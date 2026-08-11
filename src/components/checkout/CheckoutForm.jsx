import { useState } from "react";
import { useCart } from "../../context/CartContext";
import locations from "../../data/locations";

const CheckoutForm = ({ onSubmit, paymentMethod }) => {
  const { clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    shippingCountry: "",
    shippingState: "",
    shippingCity: "",
    shippingAddress: "",
    shippingPincode: "",
    billingSameAsShipping: true,
    billingCountry: "",
    billingState: "",
    billingCity: "",
    billingAddress: "",
    billingPincode: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = Object.keys(locations);

  const getStates = (country) => {
    if (!country || !locations[country]) return [];
    return Object.keys(locations[country]);
  };

  const getCities = (country, state) => {
    if (!country || !state || !locations[country] || !locations[country][state]) {
      return [];
    }
    return locations[country][state];
  };

  const shippingStates = getStates(formData.shippingCountry);
  const shippingCities = getCities(
    formData.shippingCountry,
    formData.shippingState,
  );

  const billingStates = getStates(formData.billingCountry);
  const billingCities = getCities(
    formData.billingCountry,
    formData.billingState,
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCountryChange = (e, prefix) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [`${prefix}Country`]: value,
      [`${prefix}State`]: "",
      [`${prefix}City`]: "",
    }));
    setErrors((prev) => ({
      ...prev,
      [`${prefix}Country`]: "",
      [`${prefix}State`]: "",
      [`${prefix}City`]: "",
    }));
  };

  const handleStateChange = (e, prefix) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [`${prefix}State`]: value,
      [`${prefix}City`]: "",
    }));
    setErrors((prev) => ({
      ...prev,
      [`${prefix}State`]: "",
      [`${prefix}City`]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number";
    }


    if (!formData.shippingCountry) {
      newErrors.shippingCountry = "Country is required";
    }
    if (!formData.shippingState) {
      newErrors.shippingState = "State is required";
    }
    if (!formData.shippingCity) {
      newErrors.shippingCity = "City is required";
    }
    if (!formData.shippingAddress.trim()) {
      newErrors.shippingAddress = "Address is required";
    }
    if (!formData.shippingPincode.trim()) {
      newErrors.shippingPincode = "Pincode is required";
    } else if (!/^[0-9]{5,6}$/.test(formData.shippingPincode.trim())) {
      newErrors.shippingPincode = "Enter a valid pincode";
    }

  
    if (!formData.billingSameAsShipping) {
      if (!formData.billingCountry) {
        newErrors.billingCountry = "Country is required";
      }
      if (!formData.billingState) {
        newErrors.billingState = "State is required";
      }
      if (!formData.billingCity) {
        newErrors.billingCity = "City is required";
      }
      if (!formData.billingAddress.trim()) {
        newErrors.billingAddress = "Address is required";
      }
      if (!formData.billingPincode.trim()) {
        newErrors.billingPincode = "Pincode is required";
      } else if (!/^[0-9]{5,6}$/.test(formData.billingPincode.trim())) {
        newErrors.billingPincode = "Enter a valid pincode";
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitted(true);

    
    const billingData = formData.billingSameAsShipping
      ? {
          billingCountry: formData.shippingCountry,
          billingState: formData.shippingState,
          billingCity: formData.shippingCity,
          billingAddress: formData.shippingAddress,
          billingPincode: formData.shippingPincode,
        }
      : {};

    onSubmit({ ...formData, ...billingData, paymentMethod });
    clearCart();
  };

  const inputClass = (field) =>
    `w-full rounded-lg border px-3 py-2 text-sm text-[var(--color-heading)] placeholder:text-gray-400 focus:outline-none focus:ring-1 ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
        : "border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]"
    }`;

  const selectClass = (field) =>
    `w-full rounded-lg border px-3 py-2 text-sm text-[var(--color-heading)] focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400 ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
        : "border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]"
    }`;

  const labelClass =
    "mb-2 block text-sm font-medium text-[var(--color-heading)]";

  const errorTextClass = "mt-1 text-xs text-red-600";

  const sectionClass =
    "rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm";

  const sectionTitleClass =
    "mb-6  text-xl font-semibold text-[var(--color-heading)]";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
    
      <div className={sectionClass}>

        {isSubmitted && (
          <div className="mb-6 rounded-lg bg-green-50 p-4 text-sm font-medium text-green-700">
            Order placed successfully! Your order has been recorded.
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className={inputClass("firstName")}
            />
            {errors.firstName && (
              <p className={errorTextClass}>{errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className={inputClass("lastName")}
            />
            {errors.lastName && (
              <p className={errorTextClass}>{errors.lastName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={inputClass("email")}
            />
            {errors.email && <p className={errorTextClass}>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={inputClass("phone")}
            />
            {errors.phone && <p className={errorTextClass}>{errors.phone}</p>}
          </div>
        </div>
      </div>

      
      <div className={sectionClass}>
        <h2 className={sectionTitleClass}>Shipping Address</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="shippingCountry" className={labelClass}>
              Country
            </label>
            <select
              id="shippingCountry"
              name="shippingCountry"
              value={formData.shippingCountry}
              onChange={(e) => handleCountryChange(e, "shipping")}
              className={selectClass("shippingCountry")}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.shippingCountry && (
              <p className={errorTextClass}>{errors.shippingCountry}</p>
            )}
          </div>

          <div>
            <label htmlFor="shippingState" className={labelClass}>
              State
            </label>
            <select
              id="shippingState"
              name="shippingState"
              value={formData.shippingState}
              onChange={(e) => handleStateChange(e, "shipping")}
              disabled={!formData.shippingCountry}
              className={selectClass("shippingState")}
            >
              <option value="">Select State</option>
              {shippingStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.shippingState && (
              <p className={errorTextClass}>{errors.shippingState}</p>
            )}
          </div>

          <div>
            <label htmlFor="shippingCity" className={labelClass}>
              City
            </label>
            <select
              id="shippingCity"
              name="shippingCity"
              value={formData.shippingCity}
              onChange={handleChange}
              disabled={!formData.shippingState}
              className={selectClass("shippingCity")}
            >
              <option value="">Select City</option>
              {shippingCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.shippingCity && (
              <p className={errorTextClass}>{errors.shippingCity}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="shippingAddress" className={labelClass}>
              Address
            </label>
            <input
              id="shippingAddress"
              type="text"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              placeholder="House number, street, area"
              className={inputClass("shippingAddress")}
            />
            {errors.shippingAddress && (
              <p className={errorTextClass}>{errors.shippingAddress}</p>
            )}
          </div>

          <div>
            <label htmlFor="shippingPincode" className={labelClass}>
              Pincode
            </label>
            <input
              id="shippingPincode"
              type="text"
              name="shippingPincode"
              value={formData.shippingPincode}
              onChange={handleChange}
              placeholder="Enter pincode"
              className={inputClass("shippingPincode")}
            />
            {errors.shippingPincode && (
              <p className={errorTextClass}>{errors.shippingPincode}</p>
            )}
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div className={sectionClass}>
        <h2 className={sectionTitleClass}>Billing Address</h2>

        <label className="mb-6 flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            name="billingSameAsShipping"
            checked={formData.billingSameAsShipping}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
          />
          <span className="text-sm font-medium text-[var(--color-heading)]">
            Billing address is same as shipping address
          </span>
        </label>

        {!formData.billingSameAsShipping && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="billingCountry" className={labelClass}>
                Country
              </label>
              <select
                id="billingCountry"
                name="billingCountry"
                value={formData.billingCountry}
                onChange={(e) => handleCountryChange(e, "billing")}
                className={selectClass("billingCountry")}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.billingCountry && (
                <p className={errorTextClass}>{errors.billingCountry}</p>
              )}
            </div>

            <div>
              <label htmlFor="billingState" className={labelClass}>
                State
              </label>
              <select
                id="billingState"
                name="billingState"
                value={formData.billingState}
                onChange={(e) => handleStateChange(e, "billing")}
                disabled={!formData.billingCountry}
                className={selectClass("billingState")}
              >
                <option value="">Select State</option>
                {billingStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.billingState && (
                <p className={errorTextClass}>{errors.billingState}</p>
              )}
            </div>

            <div>
              <label htmlFor="billingCity" className={labelClass}>
                City
              </label>
              <select
                id="billingCity"
                name="billingCity"
                value={formData.billingCity}
                onChange={handleChange}
                disabled={!formData.billingState}
                className={selectClass("billingCity")}
              >
                <option value="">Select City</option>
                {billingCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.billingCity && (
                <p className={errorTextClass}>{errors.billingCity}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="billingAddress" className={labelClass}>
                Address
              </label>
              <input
                id="billingAddress"
                type="text"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
                placeholder="House number, street, area"
                className={inputClass("billingAddress")}
              />
              {errors.billingAddress && (
                <p className={errorTextClass}>{errors.billingAddress}</p>
              )}
            </div>

            <div>
              <label htmlFor="billingPincode" className={labelClass}>
                Pincode
              </label>
              <input
                id="billingPincode"
                type="text"
                name="billingPincode"
                value={formData.billingPincode}
                onChange={handleChange}
                placeholder="Enter pincode"
                className={inputClass("billingPincode")}
              />
              {errors.billingPincode && (
                <p className={errorTextClass}>{errors.billingPincode}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
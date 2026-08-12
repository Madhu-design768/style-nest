import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import MainLayout from "../../layouts/MainLayout";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Backend signup will be added later
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsLoading(false);

    console.log("Signup:", formData);
  };

  return (
    <MainLayout>
    <main className="min-h-screen bg-[var(--color-grad)]  sm:px-6">
        <h2 className="font-semibold text-3xl pl-2 pt-6">Create Account</h2>

      {/* <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center"> */}
      <div className="flex justify-center pt-4">

         
        <div className="w-full max-w-md">

          <div className="mb-2 text-center">
            <Link
              to="/"
              className="text-3xl font-bold text-[var(--color-primary)]"
            >
              StyleNest
            </Link>
 

            <p className="mt-2 pt-2 pb-2 text-sm text-[var(--color-text)]">
              Create your StyleNest account.
            </p>
          </div>

          <div className="rounded-2xl  border border-[var(--color-border)] bg-white p-10 shadow-sm sm:p-8">

            <form onSubmit={handleSubmit} noValidate>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 pb-1 pt-4  block text-sm font-semibold text-[var(--color-heading)]"
                >
                  Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    className={`h-12 w-full rounded-xl border bg-white pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-gray-400 ${
                      errors.name
                        ? "border-red-500"
                        : "border-[var(--color-border)] focus:border-[var(--color-accent)]"
                    }`}
                  />
                </div>

                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="mb-2 pb-1 pt-4  block text-sm font-semibold text-[var(--color-heading)]"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    className={`h-12 w-full rounded-xl border bg-white pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-gray-400 ${
                      errors.email
                        ? "border-red-500"
                        : "border-[var(--color-border)] focus:border-[var(--color-accent)]"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="mt-5">
                <label
                  htmlFor="password"
                  className="mb-2 pb-1 pt-4  block text-sm font-semibold text-[var(--color-heading)]"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="new-password"
                    className={`h-12 w-full rounded-xl border bg-white pl-10 pr-12 text-sm outline-none transition-colors placeholder:text-gray-400 ${
                      errors.password
                        ? "border-red-500"
                        : "border-[var(--color-border)] focus:border-[var(--color-accent)]"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-accent)]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mt-5">
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 pt-3 pb-1 block text-sm font-semibold text-[var(--color-heading)]"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className={`h-12 w-full rounded-xl border bg-white pl-10 pr-12 text-sm outline-none transition-colors placeholder:text-gray-400 ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-[var(--color-border)] focus:border-[var(--color-accent)]"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-accent)]"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Creating Account..." : "Sign Up"}
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-6 pt-6 text-center text-sm text-[var(--color-text)]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[var(--color-accent)] hover:text-[var(--color-primary)]"
              >
                Login
              </Link>
            </p>
          </div>

        </div>
      </div>
    </main>
    </MainLayout>
  );
};

export default Signup;
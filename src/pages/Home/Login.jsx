import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import MainLayout from "../../layouts/MainLayout";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ 
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
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

    // Backend authentication will be added later
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsLoading(false);

    console.log("Login:", formData);
  };

  return (
    <MainLayout>
      <main className="min-h-screen bg-[var(--color-grad)] px-4 py-8 sm:px-6">
        <h2 className="font-semibold text-3xl pl-2 pt-2">My Account</h2>
        <div className="flex justify-center pt-4">
          <div className="w-full max-w-md">
            <div className="mb-7 text-center">
              <h1 className="mt-6 pt-4 pb-4 text-3xl font-bold text-[var(--color-heading)]">
                Style<span className="text-emerald-950">Next</span>
              </h1>

              <p className="mt-2 pb-2 text-sm text-[var(--color-text)]">
                Sign in to your StyleNest account.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-10 shadow-sm sm:p-8">
              <form onSubmit={handleSubmit} noValidate>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 pb-1 pt-4 block text-sm font-semibold text-[var(--color-heading)]"
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

                <div className="mt-5">
                  <label
                    htmlFor="password"
                    className="mb-2 pb-1 pt-4 block text-sm font-semibold text-[var(--color-heading)]"
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
                      autoComplete="current-password"
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
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  {/* Remember Me */}
                  <label className="flex pt-6 pb-6 cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
                    />

                    <span className="text-sm text-[var(--color-text)]">
                      Remember me
                    </span>
                  </label>

                  {/* Forgot Password */}
                  <button
                    type="button"
                    className="text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              {/* Signup Link */}
              <p className="mt-6 pt-4 text-center text-sm text-[var(--color-text)]">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-[var(--color-accent)] hover:text-[var(--color-primary)]"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Login;

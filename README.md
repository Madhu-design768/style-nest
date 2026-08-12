    <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center justify-center">
        <div className="w-full">
          {/* Brand */}
          <div className="mb-8 text-center">
            <Link
              to="/"
              className="text-3xl font-bold tracking-wide text-[var(--color-primary)]"
            >
              StyleNest
            </Link>

            <h1 className="mt-8 text-3xl font-bold text-[var(--color-heading)]">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-[var(--color-text)]">
              Sign in to your StyleNest account to continue.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[var(--color-heading)]"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`h-12 w-full rounded-xl border bg-white pl-11 pr-4 text-sm text-[var(--color-heading)] outline-none transition-colors placeholder:text-gray-400 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[var(--color-border)] focus:border-[var(--color-accent)]"
                  }`}
                />
              </div>

              {errors.email && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[var(--color-heading)]"
              >
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`h-12 w-full rounded-xl border bg-white pl-11 pr-12 text-sm text-[var(--color-heading)] outline-none transition-colors placeholder:text-gray-400 ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-[var(--color-border)] focus:border-[var(--color-accent)]"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-[var(--color-accent)]"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2">
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

              <button
                type="button"
                className="text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-primary)]"
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--color-border)]" />
            <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-text)]">
              OR
            </span>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-white text-sm font-semibold text-[var(--color-heading)] transition-colors hover:border-[var(--color-accent)] hover:bg-gray-50"
            >
              <span className="text-base font-bold">G</span>
              Continue with Google
            </button>

            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-white text-sm font-semibold text-[var(--color-heading)] transition-colors hover:border-[var(--color-accent)] hover:bg-gray-50"
            >
              <span className="text-base font-bold">f</span>
              Continue with Facebook
            </button>
          </div>

          {/* Signup */}
          <p className="mt-8 text-center text-sm text-[var(--color-text)]">
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







      const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsLoading(false);

    console.log("Login form submitted:", formData);
  };

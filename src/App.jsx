import React, { useState } from "react";

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36" fill="none">
        <path
          d="M18 3.75 31.25 11.4v13.2L18 32.25 4.75 24.6V11.4L18 3.75Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m11 22.5 5-9h9l-5 9h-9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="11" cy="22.5" r="2" fill="currentColor" />
        <circle cx="20" cy="22.5" r="2" fill="currentColor" />
      </svg>
    </span>
  );
}

function EyeIcon({ visible }) {
  return visible ? (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.5 9.5 6.4a1.3 1.3 0 0 1 0 1.2 15 15 0 0 1-3.2 3.9M6.2 6.3a15 15 0 0 0-3.7 5.1 1.3 1.3 0 0 0 0 1.2C3.5 14.5 7 19 12 19c1 0 2-.2 2.9-.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function RouteIllustration() {
  return (
    <svg
      className="route-illustration"
      viewBox="0 0 620 500"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="route-line" x1="154" y1="346" x2="467" y2="127">
          <stop stopColor="#75E0BB" />
          <stop offset="1" stopColor="#75E0BB" stopOpacity=".15" />
        </linearGradient>
        <linearGradient id="card-fill" x1="189" y1="149" x2="430" y2="394">
          <stop stopColor="#20364A" />
          <stop offset="1" stopColor="#142739" />
        </linearGradient>
        <filter
          id="card-shadow"
          x="96"
          y="77"
          width="446"
          height="393"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur stdDeviation="22" />
        </filter>
      </defs>
      <circle cx="309" cy="250" r="202" stroke="#fff" strokeOpacity=".045" />
      <circle cx="309" cy="250" r="155" stroke="#fff" strokeOpacity=".045" />
      <circle cx="309" cy="250" r="108" stroke="#fff" strokeOpacity=".045" />
      <path
        d="m115 351 49-48 45 17 51-74 49 28 51-50 36 9 41-64 45-18"
        stroke="#fff"
        strokeOpacity=".07"
        strokeWidth="1.5"
        strokeDasharray="5 9"
        strokeLinecap="round"
      />
      <path
        d="M155 349c41 0 37-73 91-73s50 40 99 40 47-111 113-111"
        stroke="#000"
        strokeOpacity=".2"
        strokeWidth="8"
        strokeLinecap="round"
        filter="url(#card-shadow)"
      />
      <path
        d="M155 349c41 0 37-73 91-73s50 40 99 40 47-111 113-111"
        stroke="url(#route-line)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="5 8"
      />
      <circle cx="155" cy="349" r="9" fill="#75E0BB" fillOpacity=".16" />
      <circle cx="155" cy="349" r="4" fill="#75E0BB" />
      <circle cx="458" cy="205" r="9" fill="#75E0BB" fillOpacity=".16" />
      <circle cx="458" cy="205" r="4" fill="#75E0BB" />
      <g transform="translate(190 118)">
        <rect width="238" height="238" rx="24" fill="#0E1C2B" fillOpacity=".48" />
        <rect
          x=".75"
          y=".75"
          width="236.5"
          height="236.5"
          rx="23.25"
          stroke="#fff"
          strokeOpacity=".1"
          strokeWidth="1.5"
        />
        <path
          d="m40 166 47-55 37 24 48-66 36 8"
          stroke="#B6C8CE"
          strokeOpacity=".3"
          strokeWidth="2"
          strokeDasharray="3 8"
          strokeLinecap="round"
        />
        <path
          d="m94 95 14-20 14 20c0 9-6 15-14 15s-14-6-14-15Z"
          fill="#75E0BB"
        />
        <circle cx="108" cy="95" r="4" fill="#142739" />
        <path
          d="m150 141 12-18 12 18c0 8-5 13-12 13s-12-5-12-13Z"
          fill="#F6B875"
        />
        <circle cx="162" cy="141" r="3.5" fill="#142739" />
        <rect x="22" y="21" width="79" height="28" rx="14" fill="#253D4C" />
        <circle cx="36" cy="35" r="4" fill="#75E0BB" />
        <path
          d="M47 35h39"
          stroke="#D3DFE0"
          strokeOpacity=".75"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="140" y="190" width="75" height="25" rx="12.5" fill="#253D4C" />
        <path
          d="M152 202.5h31"
          stroke="#D3DFE0"
          strokeOpacity=".65"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(373 94)">
        <rect width="150" height="66" rx="14" fill="url(#card-fill)" />
        <rect
          x=".75"
          y=".75"
          width="148.5"
          height="64.5"
          rx="13.25"
          stroke="#fff"
          strokeOpacity=".1"
          strokeWidth="1.5"
        />
        <circle cx="25" cy="33" r="12" fill="#75E0BB" fillOpacity=".15" />
        <path
          d="m20 33 3.5 3.5L30 30"
          stroke="#75E0BB"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46 27h64M46 39h39"
          stroke="#E4EDEF"
          strokeOpacity=".65"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(95 318)">
        <rect width="148" height="63" rx="14" fill="#20364A" />
        <rect
          x=".75"
          y=".75"
          width="146.5"
          height="61.5"
          rx="13.25"
          stroke="#fff"
          strokeOpacity=".1"
          strokeWidth="1.5"
        />
        <circle cx="25" cy="31.5" r="12" fill="#F6B875" fillOpacity=".16" />
        <path
          d="M25 25v7l4 3"
          stroke="#F6B875"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46 26h63M46 38h41"
          stroke="#E4EDEF"
          strokeOpacity=".65"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [screen, setScreen] = useState("login");
  const [email, setEmail] = useState(
    () => window.localStorage.getItem("routeflow.rememberedEmail") ?? "",
  );
  const [rememberEmail, setRememberEmail] = useState(
    () => window.localStorage.getItem("routeflow.rememberedEmail") !== null,
  );
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [notice, setNotice] = useState("");

  function updateEmail(value) {
    setEmail(value);
    if (rememberEmail) {
      window.localStorage.setItem("routeflow.rememberedEmail", value);
    }
  }

  function updateRememberEmail(checked) {
    setRememberEmail(checked);
    if (checked) {
      window.localStorage.setItem("routeflow.rememberedEmail", email);
    } else {
      window.localStorage.removeItem("routeflow.rememberedEmail");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNotice("Sign-in isn’t connected yet. Your details have not been sent.");
  }

  function openRecovery() {
    setNotice("");
    setScreen("recovery");
  }

  function openRegistration() {
    setNotice("");
    setPasswordConfirmation("");
    setScreen("register");
  }

  function returnToLogin() {
    setNotice("");
    setPasswordConfirmation("");
    setScreen("login");
  }

  function handleRecoverySubmit(event) {
    event.preventDefault();
    setNotice(
      "Password recovery isn’t connected yet. No reset email has been sent.",
    );
  }

  function handleRegistrationSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (formData.get("password") !== passwordConfirmation) {
      setNotice("Those passwords don’t match. Please check and try again.");
      return;
    }
    setNotice(
      "Account registration isn’t connected yet. Your details have not been sent.",
    );
  }

  return (
    <main className="login-layout">
      <section className="story-panel" aria-label="About Routeflow">
        <a className="brand" href="/" aria-label="Routeflow home">
          <BrandMark />
          <span>routeflow</span>
        </a>

        <div className="story-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            THE ROUTE TO BETTER DELIVERY
          </span>
          <h1>
            Every delivery,
            <br />
            <span>accounted for.</span>
          </h1>
          <p>
            One clear view of every order, every route, and every mile in
            between.
          </p>
        </div>

        <RouteIllustration />

        <div className="panel-footer">
          <span>Less chasing. More delivering.</span>
          <span className="footer-divider" />
          <span>Logistics, in sync.</span>
        </div>
      </section>

      <section className="form-panel" aria-labelledby="login-title">
        <div className="mobile-brand">
          <BrandMark />
          <span>routeflow</span>
        </div>
        <div className="login-card">
          <div className="welcome-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20a7.5 7.5 0 0 1 15 0"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M18 5.5h4M20 3.5v4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="card-kicker">
            {screen === "login"
              ? "YOUR WORKSPACE AWAITS"
              : screen === "recovery"
                ? "ACCOUNT RECOVERY"
                : "GET STARTED"}
          </span>
          <h2 id="login-title">
            {screen === "login"
              ? "Welcome back"
              : screen === "recovery"
                ? "Reset your password"
                : "Create your account"}
          </h2>
          <p className="card-description">
            {screen === "login"
              ? "Sign in to pick up right where you left off."
              : screen === "recovery"
                ? "Enter your work email and we’ll help you get back into your workspace."
                : "Set up your customer account to start managing deliveries."}
          </p>

          {screen === "login" ? (
            <form key="login" className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Work email</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => updateEmail(event.target.value)}
                  required
                />
              </div>

              <div className="password-label-row">
                <label htmlFor="password">Password</label>
                <button className="text-link text-button" type="button" onClick={openRecovery}>
                  Forgot password?
                </button>
              </div>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="4"
                    y="10"
                    width="16"
                    height="11"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 10V7a4 4 0 1 1 8 0v3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="15.5" r="1.2" fill="currentColor" />
                </svg>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  minLength="8"
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>

              <label className="remember-option">
                <input
                  type="checkbox"
                  name="rememberEmail"
                  checked={rememberEmail}
                  onChange={(event) => updateRememberEmail(event.target.checked)}
                />
                <span className="custom-checkbox" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path
                      d="m3.5 8 3 3 6-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Remember my work email</span>
              </label>

              <button className="submit-button" type="submit">
                Sign in
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="form-notice" role="status" aria-live="polite">
                {notice}
              </p>
            </form>
          ) : screen === "recovery" ? (
            <form
              key="recovery"
              className="login-form recovery-form"
              onSubmit={handleRecoverySubmit}
            >
              <label htmlFor="recovery-email">Work email</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  id="recovery-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => updateEmail(event.target.value)}
                  required
                />
              </div>
              <button className="submit-button" type="submit">
                Continue
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="form-notice" role="status" aria-live="polite">
                {notice}
              </p>
              <button className="back-link" type="button" onClick={returnToLogin}>
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M16 10H4m5 5-5-5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to sign in
              </button>
            </form>
          ) : (
            <form
              key="registration"
              className="login-form registration-form"
              onSubmit={handleRegistrationSubmit}
            >
              <label htmlFor="full-name">Full name</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle
                    cx="12"
                    cy="8"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M4.5 20a7.5 7.5 0 0 1 15 0"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  minLength="2"
                  required
                />
              </div>
              <label htmlFor="registration-email">Work email</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  id="registration-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => updateEmail(event.target.value)}
                  required
                />
              </div>
              <label htmlFor="registration-password">Password</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="4"
                    y="10"
                    width="16"
                    height="11"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 10V7a4 4 0 1 1 8 0v3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="15.5" r="1.2" fill="currentColor" />
                </svg>
                <input
                  id="registration-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  minLength="8"
                  required
                />
              </div>
              <label htmlFor="confirm-password">Confirm password</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="4"
                    y="10"
                    width="16"
                    height="11"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 10V7a4 4 0 1 1 8 0v3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="15.5" r="1.2" fill="currentColor" />
                </svg>
                <input
                  id="confirm-password"
                  name="passwordConfirmation"
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  value={passwordConfirmation}
                  onChange={(event) => setPasswordConfirmation(event.target.value)}
                  minLength="8"
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? "Hide passwords" : "Show passwords"}
                  aria-pressed={showPassword}
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>
              <button className="submit-button" type="submit">
                Create account
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="form-notice" role="status" aria-live="polite">
                {notice}
              </p>
              <button className="back-link" type="button" onClick={returnToLogin}>
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M16 10H4m5 5-5-5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to sign in
              </button>
            </form>
          )}

          {screen === "login" && (
            <div className="signup-prompt">
              New to Routeflow?{" "}
              <button className="text-link text-button" type="button" onClick={openRegistration}>
                Create an account
              </button>
            </div>
          )}
        </div>

        <footer className="form-footer">
          <span>© 2026 Routeflow Logistics</span>
          <span>Need help? Contact your administrator.</span>
        </footer>
      </section>
    </main>
  );
}

export default App;

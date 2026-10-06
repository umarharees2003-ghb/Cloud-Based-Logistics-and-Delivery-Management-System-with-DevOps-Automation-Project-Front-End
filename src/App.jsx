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

const metrics = [
  { value: "24/7", label: "Fleet visibility" },
  { value: "96%", label: "On-time delivery" },
  { value: "42%", label: "Lower operating cost" },
];

const features = [
  {
    icon: "⏱",
    title: "Smart route planning",
    description:
      "Automate dispatching and optimize routes based on traffic, capacity, and delivery priorities.",
  },
  {
    icon: "📦",
    title: "Live order tracking",
    description:
      "Track every shipment in real time from warehouse handoff to final-mile arrival with live status alerts.",
  },
  {
    icon: "📊",
    title: "Operational analytics",
    description:
      "Turn logistics data into decisions with carbon, performance, and cost insights built for scale.",
  },
  {
    icon: "🧾",
    title: "Proof of delivery",
    description:
      "Capture signatures, notes, and timestamped delivery evidence to reduce disputes and improve service trust.",
  },
];

const steps = [
  { number: "01", title: "Connect your network", text: "Integrate warehouses, vehicles, drivers, and customers into one control layer." },
  { number: "02", title: "Plan and dispatch", text: "Use AI-assisted route logic to assign jobs based on urgency, distance, and capacity." },
  { number: "03", title: "Track and improve", text: "Monitor delivery performance in real time and optimize continuously as conditions change." },
];

function WelcomeScreen({ onAuth }) {
  return (
    <div className="welcome-shell">
      <header className="welcome-topbar">
        <a className="brand home-brand" href="/" aria-label="Routeflow home">
          <BrandMark />
          <span>routeflow</span>
        </a>
        <div className="welcome-actions">
          <button
            className="ghost-btn"
            type="button"
            onClick={() => onAuth("login")}
          >
            Sign in
          </button>
          <button
            className="primary-btn"
            type="button"
            onClick={() => onAuth("signup")}
          >
            Sign up
          </button>
        </div>
      </header>

      <main className="welcome-content">
        <section className="welcome-copy">
          <span className="eyebrow dark-eyebrow">
            <span className="eyebrow-dot" />
            YOUR DELIVERY NETWORK, IN SYNC
          </span>
          <h1>
            Move every
            <span> delivery forward.</span>
          </h1>
          <p>
            Meet Routeflow: the cloud-based logistics platform that brings your
            orders, routes, drivers, and customers together in one clear view.
          </p>
          <button
            className="primary-btn welcome-cta"
            type="button"
            onClick={() => onAuth("login")}
          >
            Sign in to Routeflow
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
          <span className="welcome-caption">Smarter routes. Happier customers.</span>
        </section>

        <aside className="welcome-preview" aria-label="Routeflow operations preview">
          <div className="preview-orbit orbit-one" />
          <div className="preview-orbit orbit-two" />
          <div className="preview-card">
            <div className="preview-heading">
              <span className="preview-indicator" />
              <span>NETWORK OVERVIEW</span>
              <span className="preview-live">LIVE</span>
            </div>
            <div className="preview-map" aria-hidden="true">
              <span className="preview-route preview-route-one" />
              <span className="preview-route preview-route-two" />
              <span className="preview-node node-one" />
              <span className="preview-node node-two" />
              <span className="preview-node node-three" />
              <span className="preview-node node-four" />
            </div>
            <div className="preview-summary">
              <div>
                <span>Deliveries today</span>
                <strong>1,284</strong>
              </div>
              <div>
                <span>On-time rate</span>
                <strong>96.8%</strong>
              </div>
            </div>
          </div>
          <div className="preview-note">
            <span className="preview-check">✓</span>
            <span>
              <strong>Route optimized</strong>
              <small>Saving 18 minutes</small>
            </span>
          </div>
        </aside>
      </main>
      <footer className="welcome-footer">
        <span>© 2026 Routeflow Logistics</span>
        <span>Built for every mile.</span>
      </footer>
    </div>
  );
}

function AuthScreen({ mode, onModeChange, onBack, onSuccess }) {
  const [notice, setNotice] = useState("");
  const isSignup = mode === "signup";

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (isSignup && formData.get("password") !== formData.get("confirmPassword")) {
      setNotice("The passwords do not match. Please check and try again.");
      return;
    }

    const name = isSignup
      ? String(formData.get("fullName")).trim()
      : String(formData.get("email")).trim();
    onSuccess(name);
  }

  function changeMode(nextMode) {
    setNotice("");
    onModeChange(nextMode);
  }

  return (
    <main className="auth-shell">
      <header className="auth-topbar">
        <a
          className="brand home-brand"
          href="/"
          aria-label="Routeflow home"
          onClick={(event) => {
            event.preventDefault();
            onBack();
          }}
        >
          <BrandMark />
          <span>routeflow</span>
        </a>
        <button type="button" className="auth-back" onClick={onBack}>
          Back to welcome
        </button>
      </header>

      <section className="auth-card" aria-labelledby="auth-title">
        <div className="auth-symbol" aria-hidden="true">
          <BrandMark />
        </div>
        <span className="auth-eyebrow">YOUR LOGISTICS WORKSPACE</span>
        <h1 id="auth-title">{isSignup ? "Create your account" : "Welcome back"}</h1>
        <p className="auth-description">
          {isSignup
            ? "Sign up to bring your deliveries, routes, and team together."
            : "Sign in to continue to your Routeflow platform."}
        </p>

        <div className="auth-tabs" role="tablist" aria-label="Account access">
          <button
            id="login-tab"
            type="button"
            role="tab"
            aria-selected={!isSignup}
            aria-controls="auth-form"
            className={!isSignup ? "auth-tab active" : "auth-tab"}
            onClick={() => changeMode("login")}
          >
            Sign in
          </button>
          <button
            id="signup-tab"
            type="button"
            role="tab"
            aria-selected={isSignup}
            aria-controls="auth-form"
            className={isSignup ? "auth-tab active" : "auth-tab"}
            onClick={() => changeMode("signup")}
          >
            Sign up
          </button>
        </div>

        <form id="auth-form" className="auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <label className="auth-field">
              <span>Full name</span>
              <input
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                minLength="2"
                required
              />
            </label>
          )}
          <label className="auth-field">
            <span>Work email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
            />
          </label>
          <label className="auth-field">
            <span>Password</span>
            <input
              name="password"
              type="password"
              autoComplete={isSignup ? "new-password" : "current-password"}
              placeholder={isSignup ? "At least 8 characters" : "Enter your password"}
              minLength="8"
              required
            />
          </label>
          {isSignup && (
            <label className="auth-field">
              <span>Confirm password</span>
              <input
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Re-enter your password"
                minLength="8"
                required
              />
            </label>
          )}
          <p className="auth-demo-note">
            Demo frontend only: forms are not connected to real account authentication.
          </p>
          <p className="auth-notice" role="alert" aria-live="polite">
            {notice}
          </p>
          <button className="primary-btn auth-submit" type="submit">
            {isSignup ? "Create account" : "Sign in"}
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
        </form>
        <p className="auth-switch">
          {isSignup ? "Already have an account?" : "New to Routeflow?"}{" "}
          <button
            className="auth-inline-button"
            type="button"
            onClick={() => changeMode(isSignup ? "login" : "signup")}
          >
            {isSignup ? "Sign in" : "Create an account"}
          </button>
        </p>
      </section>
    </main>
  );
}

function App() {
  const [screen, setScreen] = useState("welcome");
  const [authMode, setAuthMode] = useState("login");
  const [accountLabel, setAccountLabel] = useState("");

  function openAuth(mode) {
    setAuthMode(mode);
    setScreen("auth");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function openPlatform(label) {
    setAccountLabel(label);
    setScreen("platform");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function signOut() {
    setAccountLabel("");
    setScreen("welcome");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  if (screen === "welcome") {
    return <WelcomeScreen onAuth={openAuth} />;
  }

  if (screen === "auth") {
    return (
      <AuthScreen
        mode={authMode}
        onModeChange={setAuthMode}
        onBack={() => setScreen("welcome")}
        onSuccess={openPlatform}
      />
    );
  }

  return (
    <div className="home-shell">
      <header className="topbar">
        <a className="brand home-brand" href="/" aria-label="Routeflow home">
          <BrandMark />
          <span>routeflow</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#solutions">Solutions</a>
          <a href="#features">Features</a>
          <a href="#insights">Insights</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="nav-actions">
          <span className="account-label" title={accountLabel}>
            Demo account
          </span>
          <button type="button" className="ghost-btn" onClick={signOut}>
            Sign out
          </button>
          <button type="button" className="primary-btn">
            Book a demo
          </button>
        </div>
      </header>

      <main className="landing-page">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              SMART LOGISTICS CLOUD
            </span>

            <h1>
              Deliver faster with
              <span> full-route visibility.</span>
            </h1>

            <p>
              Routeflow helps logistics teams plan smarter, cut delays, and keep every
              parcel, van, and customer update in sync from dispatch to doorstep.
            </p>

            <div className="cta-row">
              <button type="button" className="primary-btn large-btn">
                Get started
              </button>
              <button type="button" className="ghost-btn large-btn light-ghost">
                View platform
              </button>
            </div>

            <div className="mini-stats" aria-label="Key metrics">
              {metrics.map((stat) => (
                <div key={stat.label} className="stat-pill">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Routeflow dashboard preview">
            <div className="dashboard-panel main-panel">
              <div className="panel-header">
                <span className="panel-label">Live operations</span>
                <span className="status-tag">Online</span>
              </div>

              <div className="map-surface">
                <div className="map-route route-one" />
                <div className="map-route route-two" />
                <div className="map-stop stop-a" />
                <div className="map-stop stop-b" />
                <div className="map-stop stop-c" />
              </div>

              <div className="fleet-row">
                <div>
                  <span className="metric-label">Routes active</span>
                  <strong>184</strong>
                </div>
                <div>
                  <span className="metric-label">Avg. ETA</span>
                  <strong>17 min</strong>
                </div>
              </div>
            </div>

            <div className="floating-card metric-card">
              <span className="card-kicker">Today</span>
              <strong>1,284</strong>
              <span>Shipments tracked</span>
            </div>

            <div className="floating-card driver-card">
              <div className="driver-avatar">AL</div>
              <div>
                <strong>Driver check-in</strong>
                <span>Updated 2 mins ago</span>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip" aria-label="Client brands">
          <span>VeloCart</span>
          <span>SwiftGrid</span>
          <span>NorthStar</span>
          <span>MetroFleet</span>
          <span>NovaCargo</span>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="eyebrow dark-eyebrow">
              <span className="eyebrow-dot" />
              WHY TEAMS CHOOSE ROUTEFLOW
            </span>
            <h2>Built for modern delivery operations.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="solutions-section" id="solutions">
          <div className="solutions-copy">
            <span className="eyebrow dark-eyebrow">
              <span className="eyebrow-dot" />
              END-TO-END DELIVERY CONTROL
            </span>
            <h2>One platform for dispatch, delivery, and service quality.</h2>
            <p>
              From demand spikes to driver shortages, Routeflow gives dispatch teams the
              operational clarity they need to respond quickly and keep customers informed.
            </p>
          </div>

          <div className="operations-stack">
            <div className="operations-card highlight-card">
              <div className="card-topline">
                <span>Warehouse</span>
                <span className="trend-up">+12.4%</span>
              </div>
              <strong>163 orders scheduled</strong>
              <div className="progress-bars">
                <span className="bar bar-1" />
                <span className="bar bar-2" />
                <span className="bar bar-3" />
              </div>
            </div>

            <div className="operations-card compact-card">
              <span className="mini-label">Priority loads</span>
              <strong>28</strong>
              <span className="mini-note">5 requiring reassignment</span>
            </div>

            <div className="operations-card compact-card caution-card">
              <span className="mini-label">Late stops</span>
              <strong>9</strong>
              <span className="mini-note">2 impacted by traffic</span>
            </div>
          </div>
        </section>

        <section className="process-section" id="insights">
          <div className="section-heading">
            <span className="eyebrow dark-eyebrow">
              <span className="eyebrow-dot" />
              HOW IT WORKS
            </span>
            <h2>From planning to proof of delivery.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article key={step.number} className="step-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-banner" id="pricing">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              READY TO SCALE?
            </span>
            <h2>Bring your entire delivery operation into one cloud-based command center.</h2>
          </div>

          <button type="button" className="primary-btn large-btn">
            Talk to sales
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;

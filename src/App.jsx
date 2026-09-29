import { useState } from 'react'
import './App.css'

function App() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isResetMode, setIsResetMode] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(
      isResetMode
        ? 'Password recovery is ready to connect to your authentication service.'
        : 'Sign-in is ready to connect to your authentication service.',
    )
  }

  return (
    <main className="login-shell">
      <section className="brand-panel" aria-label="Waypoint logistics platform">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">waypoint</span>
          <span className="brand-divider" />
          <span className="brand-product">LOGISTICS CLOUD</span>
        </div>

        <div className="brand-copy">
          <p className="eyebrow"><span /> YOUR NETWORK, IN MOTION</p>
          <h1>Move goods.<br />Move business.</h1>
          <p className="brand-description">
            One connected view of every order, route, and delivery in your network.
          </p>
        </div>

        <div className="network-card">
          <div className="network-card-heading">
            <div>
              <span className="live-indicator" />
              <span className="network-label">NETWORK STATUS</span>
            </div>
            <span className="network-time">NETWORK PREVIEW</span>
          </div>
          <div className="route-visual" aria-hidden="true">
            <div className="route-line" />
            <span className="route-node route-node-start" />
            <span className="route-node route-node-mid" />
            <span className="route-node route-node-end" />
            <span className="route-city route-city-start">MUMBAI</span>
            <span className="route-city route-city-end">BENGALURU</span>
            <span className="route-truck">IN TRANSIT</span>
          </div>
          <div className="network-stats">
            <div>
              <strong>1,284</strong>
              <span>shipments moving</span>
            </div>
            <div>
              <strong>98.6<span>%</span></strong>
              <span>on-time delivery</span>
            </div>
          </div>
        </div>

        <p className="panel-footnote">BUILT FOR THE JOURNEY AHEAD <span>↗</span></p>
      </section>

      <section className="form-panel">
        <div className="mobile-brand brand-lockup">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-name">waypoint</span>
        </div>

        <div className="login-content">
          <div className="form-heading">
            <p className="form-eyebrow">OPERATIONS PORTAL</p>
            <h2>{isResetMode ? 'Reset your password' : 'Welcome back'}</h2>
            <p>
              {isResetMode
                ? 'Enter your work email and we’ll help you get back on the road.'
                : 'Sign in to pick up where your network left off.'}
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Work email</label>
            <input
              autoComplete="email"
              id="email"
              name="email"
              placeholder="you@company.com"
              required
              type="email"
            />

            {!isResetMode && (
              <>
                <div className="password-label-row">
                  <label htmlFor="password">Password</label>
                  <button
                    className="text-button"
                    onClick={() => setIsResetMode(true)}
                    type="button"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="password-input-wrap">
                  <input
                    autoComplete="current-password"
                    id="password"
                    minLength="8"
                    name="password"
                    placeholder="Enter your password"
                    required
                    type={isPasswordVisible ? 'text' : 'password'}
                  />
                  <button
                    aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
                    aria-pressed={isPasswordVisible}
                    className="password-toggle"
                    onClick={() => setIsPasswordVisible((visible) => !visible)}
                    type="button"
                  >
                    {isPasswordVisible ? 'Hide' : 'Show'}
                  </button>
                </div>
                <label className="remember-option">
                  <input name="remember" type="checkbox" />
                  <span>Keep me signed in</span>
                </label>
              </>
            )}

            <button className="submit-button" type="submit">
              {isResetMode ? 'Send reset instructions' : 'Sign in'}
              <span aria-hidden="true">↗</span>
            </button>
            {message && <p className="form-message" role="status">{message}</p>}
          </form>

          {isResetMode ? (
            <button
              className="back-to-login"
              onClick={() => {
                setIsResetMode(false)
                setMessage('')
              }}
              type="button"
            >
              <span aria-hidden="true">←</span> Back to sign in
            </button>
          ) : (
            <p className="access-note">
              Need access? Contact your system administrator.
            </p>
          )}
        </div>

        <footer className="form-footer">
          <span>© 2026 WAYPOINT LOGISTICS</span>
          <span className="secure-label"><span aria-hidden="true">●</span> SECURE ACCESS</span>
        </footer>
      </section>
    </main>
  )
}

export default App

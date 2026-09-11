import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!username.trim() || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (username.trim() === "admin" && password === "Abc@2026") {
        if (remember) {
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("rememberMe");
        }
        onLogin();
      } else {
        setError("Invalid username or password.");
        setLoading(false);
      }
    }, 650);
  };

  return (
    <main className="login-page">
      <div className="login-orb orb-one"></div>
      <div className="login-orb orb-two"></div>
      <div className="login-grid"></div>

      <div className="container position-relative">
        <div className="row align-items-center justify-content-center min-vh-100 py-5">
          <div className="col-xl-10">
            <div className="login-layout">
              <section className="login-showcase d-none d-lg-flex">
                <div className="showcase-content">
                  <div className="eyebrow"><span></span> PREMIUM WORKSPACE</div>
                  <h1>Everything you need.<br /><em>One elegant space.</em></h1>
                  <p>
                    Welcome to NovaAdmin — a focused command center for
                    managing your workspace, insights and daily operations.
                  </p>

                  <div className="showcase-points">
                    <div><i className="bi bi-shield-check"></i><span>Secure workspace experience</span></div>
                    <div><i className="bi bi-lightning-charge"></i><span>Fast, focused and responsive</span></div>
                    <div><i className="bi bi-bar-chart-line"></i><span>Clear insights at a glance</span></div>
                  </div>
                </div>
                <div className="showcase-card">
                  <div className="mini-top">
                    <span>Overview</span>
                    <i className="bi bi-three-dots"></i>
                  </div>
                  <div className="mini-value">₹ 84,240 <small>+18.6%</small></div>
                  <div className="mini-bars">
                    <span style={{height:"42%"}}></span>
                    <span style={{height:"58%"}}></span>
                    <span style={{height:"49%"}}></span>
                    <span style={{height:"72%"}}></span>
                    <span style={{height:"64%"}}></span>
                    <span style={{height:"91%"}}></span>
                    <span style={{height:"78%"}}></span>
                  </div>
                  <div className="mini-labels"><span>Mon</span><span>Sun</span></div>
                </div>
              </section>

              <section className="login-card">
                <div className="login-logo">
                  <span className="brand-icon"><i className="bi bi-stars"></i></span>
                  <strong>Nova<span>Admin</span></strong>
                </div>

                <div className="login-heading">
                  <p className="login-kicker">ADMIN PORTAL</p>
                  <h2>Welcome back.</h2>
                  <p>Sign in to continue to your workspace.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {error && (
                    <div className="login-alert">
                      <i className="bi bi-exclamation-circle"></i>
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="field-group">
                    <label htmlFor="username">Username</label>
                    <div className="input-wrap">
                      <i className="bi bi-person"></i>
                      <input
                        id="username"
                        type="text"
                        autoComplete="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="field-group">
                    <label htmlFor="password">Password</label>
                    <div className="input-wrap">
                      <i className="bi bi-lock"></i>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                      </button>
                    </div>
                  </div>

                  <div className="login-options">
                    <label className="remember">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                      />
                      <span className="custom-check"></span>
                      Remember me
                    </label>
                    <button type="button" className="forgot">Forgot Password?</button>
                  </div>

                  <button className="login-submit" type="submit" disabled={loading}>
                    {loading ? (
                      <><span className="spinner-border spinner-border-sm"></span> Signing in...</>
                    ) : (
                      <>Sign In <i className="bi bi-arrow-right"></i></>
                    )}
                  </button>
                </form>

                <div className="demo-hint">
                  <i className="bi bi-info-circle"></i>
                  <span>Demo credentials: <b>admin</b> / <b>Abc@2026</b></span>
                </div>

                <p className="login-copyright">© 2026 NovaAdmin. All rights reserved.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
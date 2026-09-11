import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Users", value: "1,250", change: "+12.8%", icon: "bi-people", positive: true },
  { label: "Active Users", value: "980", change: "+8.4%", icon: "bi-person-check", positive: true },
  { label: "Categories", value: "24", change: "+4.2%", icon: "bi-grid", positive: true },
  { label: "Messages", value: "156", change: "+16.5%", icon: "bi-chat-square-text", positive: true }
];

const activities = [
  ["AR", "Aarav Sharma", "Added a new category", "2 min ago"],
  ["PS", "Priya Singh", "Updated account settings", "18 min ago"],
  ["RK", "Rohan Kumar", "Sent a support message", "42 min ago"],
  ["NM", "Neha Mishra", "Joined the workspace", "1 hr ago"]
];

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="container-fluid px-3 px-lg-5">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> DASHBOARD OVERVIEW</div>
            <h1>Welcome back, <em>Admin.</em></h1>
            <p>
              Your workspace is looking great. Monitor performance, explore
              insights and keep everything moving from one place.
            </p>
            <div className="hero-actions">
              <Link to="/category" className="primary-btn">Explore Categories <i className="bi bi-arrow-up-right"></i></Link>
              <Link to="/about" className="secondary-btn">Learn More</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-ring ring-one"></div>
            <div className="visual-ring ring-two"></div>
            <div className="visual-core">
              <i className="bi bi-stars"></i>
            </div>
            <div className="floating-pill pill-one"><i className="bi bi-graph-up-arrow"></i> +18.6%</div>
            <div className="floating-pill pill-two"><i className="bi bi-check-circle"></i> All systems</div>
          </div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-top">
                <span className="stat-icon"><i className={`bi ${stat.icon}`}></i></span>
                <span className="stat-change"><i className="bi bi-arrow-up"></i>{stat.change}</span>
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-line"></div>
            </div>
          ))}
        </section>

        <section className="section-heading">
          <div>
            <div className="eyebrow"><span></span> INSIGHTS</div>
            <h2>Dashboard Overview</h2>
          </div>
          <button className="date-filter"><i className="bi bi-calendar3"></i> Last 7 days <i className="bi bi-chevron-down"></i></button>
        </section>

        <section className="overview-grid">
          <div className="panel activity-panel">
            <div className="panel-head">
              <div>
                <h3>Recent Activity</h3>
                <p>Latest updates across your workspace</p>
              </div>
              <button className="more-button"><i className="bi bi-three-dots"></i></button>
            </div>

            <div className="activity-list">
              {activities.map(([initials, name, action, time]) => (
                <div className="activity-item" key={name}>
                  <span className="activity-avatar">{initials}</span>
                  <div className="activity-info">
                    <strong>{name}</strong>
                    <span>{action}</span>
                  </div>
                  <time>{time}</time>
                </div>
              ))}
            </div>

            <Link to="/contact" className="panel-link">View all activity <i className="bi bi-arrow-right"></i></Link>
          </div>

          <div className="panel performance-panel">
            <div className="panel-head">
              <div>
                <h3>Performance</h3>
                <p>Weekly engagement overview</p>
              </div>
              <span className="trend-badge"><i className="bi bi-arrow-up"></i> 18.6%</span>
            </div>

            <div className="performance-value">84.2%</div>
            <div className="progress-track"><span style={{width:"84.2%"}}></span></div>
            <div className="progress-meta"><span>Current score</span><b>Excellent</b></div>

            <div className="metric-row">
              <div><span className="metric-dot"></span><span>Engagement</span><b>92%</b></div>
              <div><span className="metric-dot"></span><span>Retention</span><b>78%</b></div>
              <div><span className="metric-dot"></span><span>Conversion</span><b>81%</b></div>
            </div>
          </div>
        </section>

        <section className="quick-section">
          <div className="section-heading compact">
            <div>
              <div className="eyebrow"><span></span> SHORTCUTS</div>
              <h2>Quick Actions</h2>
            </div>
          </div>

          <div className="quick-grid">
            <Link to="/category" className="quick-card">
              <span><i className="bi bi-plus-lg"></i></span>
              <div><strong>Explore Categories</strong><small>Browse available categories</small></div>
              <i className="bi bi-arrow-up-right"></i>
            </Link>
            <Link to="/contact" className="quick-card">
              <span><i className="bi bi-send"></i></span>
              <div><strong>Send a Message</strong><small>Reach the support team</small></div>
              <i className="bi bi-arrow-up-right"></i>
            </Link>
            <Link to="/about" className="quick-card">
              <span><i className="bi bi-info-lg"></i></span>
              <div><strong>Learn About Us</strong><small>Discover NovaAdmin</small></div>
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
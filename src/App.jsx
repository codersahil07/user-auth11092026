import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function ProtectedLayout({ children, isAuthenticated, onLogout }) {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return (
    <div className="app-shell">
      <Header onLogout={onLogout} />
      <Navbar onLogout={onLogout} />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const syncAuth = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", "admin");
    setIsAuthenticated(true);
    navigate("/dashboard", { replace: true });
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login", { replace: true });
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedLayout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
            <Dashboard />
          </ProtectedLayout>
        }
      />

      <Route
        path="/about"
        element={
          <ProtectedLayout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
            <About />
          </ProtectedLayout>
        }
      />

      <Route
        path="/category"
        element={
          <ProtectedLayout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
            <Category />
          </ProtectedLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <ProtectedLayout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
            <Contact />
          </ProtectedLayout>
        }
      />

      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;
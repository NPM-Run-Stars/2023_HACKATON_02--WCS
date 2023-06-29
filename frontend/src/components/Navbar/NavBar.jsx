import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/AuthContexts";
import "./NavBar.scss";

function NavBar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { setUser, user } = useCurrentUser();

  const openNav = () => {
    setIsSideNavOpen(true);
  };

  const closeNav = () => {
    setIsSideNavOpen(false);
  };

  const logout = () => {
    setUser("");
  };

  return (
    <div>
      <div className={`sidenav ${isSideNavOpen ? "active" : ""}`}>
        <button type="button" className="close" onClick={closeNav}>
          ×
        </button>
        <ul>
          <li>
            <Link to="/" className="menu-item">
              Accueil
            </Link>
            <Link to="/faq" className="menu-item">
              F.A.Q
            </Link>

            {user.role === "admin" && (
              <>
                <Link to="/admin" className="menu-item">
                  Téléphone
                </Link>
                <Link to="/admin" className="menu-item">
                  Accessoire
                </Link>
                <Link to="/admin/signup" className="menu-item">
                  Utilisateur
                </Link>
              </>
            )}

            <Link to={`/profil/${user.id}`} className="menu-item">
              Paramètre
            </Link>

            <button type="button" onClick={logout}>
              Déconnexion
            </button>
          </li>
        </ul>
      </div>

      <button type="button" id="openBtn" onClick={openNav}>
        <span className="burger-icon">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>
  );
}

export default NavBar;

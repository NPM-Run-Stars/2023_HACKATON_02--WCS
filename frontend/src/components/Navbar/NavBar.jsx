import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/AuthContexts";

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
            <Link to="/form" className="menu-item" onClick={closeNav}>
              Téléphone
            </Link>
            <Link to="/faq" className="menu-item" onClick={closeNav}>
              F.A.Q
            </Link>

            {user.role === "admin" && (
              <>
                <Link
                  to="/admin/brands"
                  className="menu-item"
                  onClick={closeNav}
                >
                  Marque
                </Link>
                <Link
                  to="/admin/profil"
                  className="menu-item"
                  onClick={closeNav}
                >
                  Utilisateur
                </Link>
              </>
            )}

            <Link
              to={`/profil/${user.id}`}
              className="menu-item"
              onClick={closeNav}
            >
              Paramètre
            </Link>

            <button type="button" className="deconnexion" onClick={logout}>
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

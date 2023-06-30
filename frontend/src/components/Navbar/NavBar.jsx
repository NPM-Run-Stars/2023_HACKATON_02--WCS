import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowBarLeft, BsFillPhoneFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillBook, AiFillSetting } from "react-icons/ai";
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
          <BsArrowBarLeft />
        </button>
        <ul>
          <li>
            <Link to="/form" className="menu-item" onClick={closeNav}>
              <BsFillPhoneFill /> Téléphone
            </Link>
            <Link to="/faq" className="menu-item" onClick={closeNav}>
              <FaQuestion /> F.A.Q
            </Link>

            {user.role === "admin" && (
              <>
                <Link
                  to="/admin/brands"
                  className="menu-item"
                  onClick={closeNav}
                >
                  <AiFillBook /> Marque
                </Link>
                <Link
                  to="/admin/profil"
                  className="menu-item"
                  onClick={closeNav}
                >
                  <FiUsers /> Utilisateur
                </Link>
              </>
            )}

            <Link
              to={`/profil/${user.id}`}
              className="menu-item"
              onClick={closeNav}
            >
              <AiFillSetting /> Paramètre
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

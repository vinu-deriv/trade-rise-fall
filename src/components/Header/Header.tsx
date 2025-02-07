import React from "react";
import { Button } from "@deriv-com/quill-ui";
import { BrandDerivLogoCoralIcon } from "@deriv/quill-icons";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { authStore } from "../../stores/AuthStore";
import "./Header.scss";

const Header = observer(function Header() {
  const { isAuthenticated, isInitializing, login, logout } = authStore;

  if (isInitializing) {
    return null;
  }

  return (
    <nav className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">
          <BrandDerivLogoCoralIcon height={30} width={30} />
          Option Trading
        </Link>
        {isAuthenticated && (
          <Link to="/dashboard" className="header__nav-link">
            Dashboard
          </Link>
        )}
      </div>
      {isAuthenticated ? (
        <Button onClick={logout} variant="primary" size="md">
          Log out
        </Button>
      ) : (
        <Button onClick={login} variant="primary" size="md">
          Log in
        </Button>
      )}
    </nav>
  );
});

export default Header;

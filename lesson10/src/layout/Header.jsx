import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import i18n from "../i18n/i18next";
import { useTranslation } from "react-i18next";
import { Select, Space } from "antd";
const Header = () => {
  const toggleLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { t } = useTranslation();
  return (
    <>
      <Select
        defaultValue={i18n.language}
        style={{
          width: 120,
        }}
        onChange={toggleLang}
        options={[
          {
            value: "en",
            label: "En",
          },
          {
            value: "az",
            label: "Az",
          },
        ]}
      />
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  {t("navbar.0")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {t("navbar.1")}
                </NavLink>
              </li>
              <button onClick={() => toggleLang("az")}>az</button>
              <button onClick={() => toggleLang("en")}>en</button>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

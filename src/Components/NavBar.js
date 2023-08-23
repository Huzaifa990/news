import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  useEffect(() => {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);

      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    }

    toggleSwitch.addEventListener("change", switchTheme, false);
  }, []);
  return (
    <div>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke p-0">
            <h1>
              {" "}
              <Link className="navbar-brand" to="/">
                <span className="fa fa-newspaper-o"></span> Daily News
              </Link>
            </h1>

            <button
              className="navbar-toggler  collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-lg-5 mr-lg-auto">
                <li className={props.selected === "home"? "nav-item active": "nav-item"}>
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className={props.selected === "techNews"? "nav-item active": "nav-item"}>
                  <Link className="nav-link" to="/techNews">
                    Tech News
                  </Link>
                </li>

                <li className={props.selected === "automobiles"? "nav-item active": "nav-item"}>
                  <Link className="nav-link" to="/automobileNews">
                    Automobile News
                  </Link>
                </li>

                <li className={props.selected === "sportsNews"? "nav-item active": "nav-item"}>
                  <Link className="nav-link" to="/sportsNews">
                    Sports News
                  </Link>
                </li>
                <li className={props.selected === "contact"? "nav-item active": "nav-item"}>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="navbar-nav search-right nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#Pages"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="fa fa-search"></span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="search_form">
                    <form action="search-results.html" method="GET">
                      <input type="text" placeholder="Search" />
                      <button type="submit" className="btn" value="">
                        <span
                          className="fa fa-search"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

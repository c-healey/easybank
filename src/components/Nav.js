import React from "react";
class Nav extends React.Component {
  onClickMobileNav = () => {
    document.querySelector(".menu-nav").classList.toggle("show");
    document.querySelector(".close").classList.toggle("hide");
    document.querySelector(".open").classList.toggle("hide");
  };
  render() {
    return (
      <div className="container  bg-white navigation">
        <nav className="grid center-col top--nav">
          <div className="mobile--nav">
            <div className="logo">
              <img src="./images/logo.svg" alt="logo" />
            </div>
            <button
              className="hamburger"
              id="hamburger"
              onClick={() => this.onClickMobileNav()}
            >
              <img
                className="open"
                src="./images/icon-hamburger.svg"
                alt="icon-hamburger"
              />
              <img
                className="close hide"
                src="./images/icon-close.svg"
                alt="icon-close"
              />
            </button>
          </div>

          <ul id="menu" className="menu-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
          <a className="nav-btn btn btn--primary" href="#">
            Request Invite
          </a>
        </nav>
      </div>
    );
  }
}
export default Nav;

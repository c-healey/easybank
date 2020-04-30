import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div className="container bg-dark">
        <div className="grid  left center-col col-2 footer-container">
          <div className="grid col-3 footer-container-inner">
            <div className="grid col-1 left footer-social">
              <img
                className="logo-white"
                src="./images/logo-white.svg"
                alt="footer logo"
              />
              <div className="grid col-5 social-icons">
                <img src="./images/icon-facebook.svg" alt="facebook icon" />
                <img src="./images/icon-youtube.svg" alt="facebook icon" />
                <img src="./images/icon-twitter.svg" alt="facebook icon" />
                <img src="./images/icon-pinterest.svg" alt="facebook icon" />
                <img src="./images/icon-instagram.svg" alt="facebook icon" />
              </div>
            </div>
            <div className="grid col-1 left footer-menu-1 ">
              <ul id="menu" className="">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div className="grid col-1 left footer-menu-1">
              <ul id="menu" className="">
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid col-1 left footer-menu-3 footer-last">
            <a className=" btn btn--primary footer-btn" href="#">
              Request Invite
            </a>
            <p className="p-med footer-copyright">
              Easybank. All RIghts Reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

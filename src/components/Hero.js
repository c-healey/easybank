import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <div className="container bg-lt-gray">
        <div className="grid col-2 left hero">
          <div className="grid left hero-col-1">
            <h1>Next generation digital banking</h1>
            <p className="p-large">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more. Request Invite
            </p>

            <a className=" btn btn--primary" href="#">
              Request Invite
            </a>
          </div>

          <div className="hero-col-2">
            <img
              className="bg-img"
              src="./images/image-mockups.png"
              alt="mockup of devices"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;

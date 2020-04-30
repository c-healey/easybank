import React from "react";
class Features extends React.Component {
  featureDetail = () => {
    const featureData = [
      {
        image: "./images/icon-online.svg",
        imageAlt: "online banking icon",

        title: "Online Banking",
        summary:
          "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      },
      {
        image: "./images/icon-budgeting.svg",
        imageAlt: "online budgeting icon",

        title: "Simple Budgeting",
        summary:
          "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      },

      {
        image: "./images/icon-onboarding.svg",
        imageAlt: "online onboarding icon",

        title: "Fast Onboarding",
        summary:
          "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      },
      {
        image: "./images/icon-api.svg",
        imageAlt: "online api  icon",

        title: "Open API",
        summary:
          "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      },
    ];

    const markup = featureData.map((feature) => {
      return (
        <div className="grid col-1 left feature-card">
          <img src={feature.image} alt={feature.imageAlt} />
          <h3>{feature.titlw}</h3>
          <p>{feature.summary}</p>
        </div>
      );
    });
    return [markup];
  };

  render() {
    return (
      <div className="container  bg-gray left features">
        <h2 className="center-col">Why choose EasyBank?</h2>
        <p className=" p-large center-col">
          We leverage Open Banking to turn your bank account into your financial
          hub. <br></br>Control your finances like never before.
        </p>
        <div className="grid col-4 left center-col features">
          {this.featureDetail()}
        </div>
      </div>
    );
  }
}
export default Features;

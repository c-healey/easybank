import React from "react";
class Articles extends React.Component {
  cardDetail = () => {
    const cardData = [
      {
        image: "./images/image-currency.jpg",
        imageAlt: "image of currency",
        author: "Claire Robinson",
        title: "Receive money in any currency with no fees",
        summary:
          "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
      },

      {
        image: "./images/image-restaurant.jpg",
        imageAlt: "image of restaurant",
        author: "Wilson Hutton",
        title: "Treat yourself without worrying about money",
        summary:
          "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
      },
      {
        image: "./images/image-plane.jpg",
        imageAlt: "image of airplane wing",
        author: "Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        summary:
          "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
      },

      {
        image: "./images/image-confetti.jpg",
        imageAlt: "image of confetti in the air",
        author: "Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        summary:
          "After a lot of hard work by the whole team, we’re excited to launch our closed beta.  It’s easy to request an invite through the site ...",
      },
    ];

    const markup = cardData.map((card, idx) => {
      return (
        <div className="grid col-1 article" key={`article-card-${idx}`}>
          <img src={card.image} alt={card.imageAlt} />
          <div className="grid col-1 left article-detail">
            <p className="p-small">{`By ${card.author}`}</p>
            <h4>{card.title}</h4>
            <p className="p-med">{card.summary}</p>
          </div>
        </div>
      );
    });
    console.log(typeof markup);
    return [markup];
  };
  render() {
    const markup = this.cardDetail();
    return (
      <div className="container left bg-lt-gray articles-container">
        <h2 className="center-col">Latest Articles</h2>
        <div className="grid  col-4 left center-col articles">{markup}</div>
      </div>
    );
  }
}
export default Articles;

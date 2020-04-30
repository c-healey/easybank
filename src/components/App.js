import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Features from "./Features";
import Articles from "./Articles";
import Footer from "./Footer";

import "../sass/main.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <Features />
        <Articles />
        <Footer />
      </div>
    );
  }
}
export default App;

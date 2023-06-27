import React from "react";
import "./index.css";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import News from "./components/News/news";
function App() {
  return (
    <div>
      <Header />
      <section>
        <Hero />
      </section>
      <section>
        <News />
      </section>
    </div>
  );
}

export default App;

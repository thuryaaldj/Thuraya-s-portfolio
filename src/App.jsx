import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import WhatIDo from "./components/WhatIDo"
import MyProject from "./components/MyProject"
import ClientReview from "./components/ClientReview"
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <>
      <Navbar />


      <section id="hero">
        <Hero />
      </section>

      {/* Content Section */}
      <section id="contact">
        <Contact />
        <WhatIDo/>
        <MyProject/>
        <ClientReview/>
      </section>

      <Footer />
    </>
  );
}

export default App;

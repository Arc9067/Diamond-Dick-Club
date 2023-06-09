import React, { useEffect } from "react";
import Header from "./Components/Header";
import SplitType from "split-type";
import { gsap } from "gsap";
import Hero from "./Components/Hero";

const App = () => {
  useEffect(() => {
    const navLogo = new SplitType(".nav-logo", { types: "chars" });
    console.log(navLogo);

    gsap.timeline().from(navLogo.chars, {
      x: 20,
      stagger: 0.2,
      opacity: 0,
      ease: "back",
    });
  }, []);
  return (
    <div className="min-h-screen w-full bg-black text-white font-Mattb">
      <Header />
      <Hero />
    </div>
  );
};

export default App;

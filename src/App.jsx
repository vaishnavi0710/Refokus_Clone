import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marques from "./Components/Marques";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Lenis from "@studio-freight/lenis";

 


 


function App() {
  
  function lenisFn() {
    const lenis = new Lenis({
      wheelMultiplier: 2,
      duration: 1.5,
      easing: (x) => 1 - Math.pow(1 - x, 5),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  lenisFn();

  return (
    <div className=" w-full h-screen bg-zinc-900 text-white  font-['satoshi'] ">
      <Navbar  />
      <Work />
      <Stripes />
      <Products />
      <Marques />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

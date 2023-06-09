import React from "react";
import Logo from "../assets/logo.png";
import telegram from "../assets/telegram.svg";
import twitter from "../assets/twitter.svg";
import uniswap from "../assets/uniswap.svg";
import etherscan from "../assets/etherscan.svg";
import dextool from "../assets/dextool.svg";

const Hero = () => {
  return (
    <section className="hero py-[50px] w-full">
      <div className="container text-center flex justify-center items-center flex-col">
        {" "}
        <img src={Logo} alt="" className="w-[30rem]" />
        <h1
          className="flex justify-center
         flex-wrap font-bold items-center text-5xl md:text-7xl uppercase"
        >
          diamond dick club
        </h1>
        <h3 className="text-4xl">No Taxes, No Bullshit. It’s that simple.</h3>
        <div className="flex gap-2 mt-5 items-center">
          <a href="">
            <img src={telegram} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>{" "}
          <a href="">
            <img src={dextool} alt="" />
          </a>
          <a href="">
            <img src={uniswap} alt="" />
          </a>
          <a href="">
            <img src={etherscan} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

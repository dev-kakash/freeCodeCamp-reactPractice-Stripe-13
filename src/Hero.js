import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrastructure for internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            sapiente amet minima corrupti quidem a reprehenderit ipsam debitis
            commodi aliquam, atque ullam labore iusto, culpa odio possimus,
            distinctio adipisci! Saepe.
          </p>
          <button className="btn">Start Now</button>
        </article>
        <div className="hero-images">
          <img src={phoneImg} alt="phone" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

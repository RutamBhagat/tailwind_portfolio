import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    {
      class: "fa-brands fa-twitter",
      link: "https://twitter.com/rutamstwt",
    },
    {
      class: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/rutam-bhagat/",
    },
    {
      class: "fa-brands fa-github",
      link: "https://github.com/RutamBhagat",
    },
  ];
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center py-10 md:flex-row"
    >
      <div className="relative flex h-full flex-1 items-center justify-center">
        <img src={hero} alt="" className="h-full object-cover md:w-11/12" />
        <div className="absolute bottom-0 left-5 flex h-28 w-28 cursor-pointer items-center justify-center rounded-full bg-cyan-400 text-4xl text-white"></div>
        <div className="absolute bottom-40 right-5 flex h-16 w-16 animate-bounce cursor-pointer items-center justify-center rounded-full bg-cyan-400 text-4xl text-white"></div>
      </div>
      <div className="flex-1">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold leading-10 text-white md:text-5xl md:leading-normal">
            <span className="text-5xl text-cyan-400 md:text-6xl">
              Hello!
              <br />
            </span>
            My Name is{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent">
              Rutam Bhagat
            </span>
          </h1>
          <h4 className="mt-4 text-lg font-bold leading-5 text-gray-600 md:text-2xl md:leading-normal">
            React Developer
          </h4>
          <a href="#about">
            <div className="mt-8 inline-block bg-gradient-to-r from-cyan-200 to-cyan-600 p-1">
              <div className="parent bg-gray-900 hover:bg-gradient-to-r hover:from-cyan-200 hover:to-cyan-600">
                <button className="parent-hover:text-gray z-5 bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text p-2 font-bold text-transparent">
                  Know More
                </button>
              </div>
            </div>
          </a>
          <div className="mt-8 flex items-center justify-center gap-5 text-3xl md:justify-start">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="cursor-pointer text-gray-600 hover:text-white "
              >
                <a href={icon.link}>
                  <i className={icon.class}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

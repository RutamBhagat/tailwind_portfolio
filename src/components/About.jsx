import React from "react";

const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="my-3 text-lg text-gray-400">My introduction</p>
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-10 md:flex-row md:gap-6">
          <div className="p-2">
            <div className="my-3 text-gray-300">
              <p className="mx-auto w-11/12 text-justify leading-7">
                <span className="pl-10">I</span> love designing and developing
                websites and web applications. I am a self taught Full Stack
                React Developer who can solve your problems or help you with an
                existing project. I am currently focused on the MERN stack, in
                order to get a better understanding of the entire stack. I am
                planning to continue to build my skills in the full stack
                development. I am interested in projects where development is
                driven by the needs of the clients. I am a patient, calm and
                collected person, with a passion to solve the clients problems,
                and I am always keen to help clients by listening patiently and
                help find solutions according to their requirements.
              </p>
              {/* <div className="mt-10 flex items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="text-2xl font-semibold text-white md:text-4xl">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="text-xs md:text-base">{content.text}</span>
                  </div>
                ))}
              </div> */}
              <br />
              <br />
              <a href="./src/assets/resume.pdf" download>
                <div className="flex items-start">
                  <div className="m-8 inline-block bg-gradient-to-r from-cyan-200 to-cyan-600 p-1">
                    <div className="parent bg-gray-900 hover:bg-gradient-to-r hover:from-cyan-200 hover:to-cyan-600">
                      <button className="parent-hover:text-gray z-5 bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text p-2 font-bold text-transparent">
                        Download CV
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-1 items-center justify-center md:mt-0">
            <div className="aboutImg relative h-full w-11/12 max-w-sm sm:w-10/12 lg:w-96 ">
              <img
                src="https://raw.githubusercontent.com/ashutosh1919/masterPortfolio/ec97be0c38b4c1eba2b3a7ca6f881506efcf8e77/src/assests/images/fullstack.svg"
                alt=""
                className="w-full rounded-xl bg-cyan-400 object-cover py-20 px-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

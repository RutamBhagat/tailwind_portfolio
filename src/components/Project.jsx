import React from "react";
import fastkitchen from "../assets/images/fastkitchen.webp";
import smartbrain from "../assets/images/smartbrain.webp";

const Project = () => {
  const projects = [
    {
      img: fastkitchen,
      name: "FastKitchen: Delivering Happiness",
      technologies: "HTML, CSS, Tailwind, Javascript, React",
      description:
        "FastKitchen has a simple UI which allows its users to quickly and conveniently order food. Recentonline pizza delivery apps are trending among users as these services are time-saving and easy to use. This app has a fully responsive layout. It allows customers to pick from different types of pizza from your restaurant and with the pizza constructor feature they can customize their pizza by changing flavors, size, toppings etc. according to their taste, and place an order. And lastly the app was deployed on Netlify.",
      github_link: "https://github.com/RutamBhagat/pizza_UI_react",
      live_link: "https://rutambhagatgithubiopizzauireact.netlify.app/",
      demo_link: "https://youtu.be/jr-RZTDfxHs",
    },
    {
      img: smartbrain,
      name: "SmartBrain: Face detection app",
      technologies:
      "HTML, CSS, Tailwind, Javascript, React, Node, Express, PostgreSQL",
      description:
      "When you enter an image URI in the input and press detect, It'll detect all the faces in the image using an image recognition API, and put boxes around them. In frontend it uses ReactJS In backend it has its own RESTful API server with express. It stores user information such as username and also hash passwords securely in a PostgreSQL database. SmartBrain V-1 is a fully responsive web site, and the react-tsparticles make it look even cooler. And lastly the app was deployed on Heroku. ",
      github_link: "https://github.com/RutamBhagat/SmartBrain_V-2",
      live_link: "https://rutambhagatgithubiosmartbrain.netlify.app/",
      demo_link: "https://youtu.be/7Y_uCxnZuOg",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-400">Projects</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My awesome works</p>
      </div>
      <br />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-5">
        {projects &&
          projects.map((project, index) => {
            return (
              <div
                key={`${project.name}_id`}
                className={`flex w-full flex-col ${
                  index % 2 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="w-full p-5 lg:w-1/3">
                  <h1 className="mb-10 text-3xl font-bold">{project.name}</h1>
                  <p className="mb-5 text-lg font-normal">
                    {project.technologies}
                  </p>
                  <p className="">{project.description}</p>
                  <a href={project.demo_link}>
                    <div className="mt-8 inline-block bg-gradient-to-r from-cyan-200 to-cyan-600 p-1">
                      <div className="parent bg-gray-900 hover:bg-gradient-to-r hover:from-cyan-200 hover:to-cyan-600">
                        <button className="parent-hover:text-gray z-5 bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text p-2 font-bold text-transparent">
                          Demo
                        </button>
                      </div>
                    </div>
                  </a>
                  <a href={project.live_link}>
                    <div className="mt-8 mx-3 inline-block bg-gradient-to-r from-cyan-200 to-cyan-600 p-1">
                      <div className="parent bg-gray-900 hover:bg-gradient-to-r hover:from-cyan-200 hover:to-cyan-600">
                        <button className="parent-hover:text-gray z-5 bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text p-2 font-bold text-transparent">
                          See Live
                        </button>
                      </div>
                    </div>
                  </a>
                  <a href={project.github_link}>
                    <button className="z-5 bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text p-2 font-bold text-transparent">
                      Source Code
                    </button>
                  </a>
                </div>
                <div className="flex w-full items-center justify-center p-5 lg:w-2/3">
                  <a href={project.live_link}>
                    <img className="rounded-3xl" src={project.img} />
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Project;

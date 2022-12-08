import React from "react";
import fastkitchen from "../assets/images/fastkitchen.webp";
import smartbrain from "../assets/images/smartbrain.webp";
import drip from "../assets/images/drip.webp";

const Project = () => {
  const projects = [
    {
      img: fastkitchen,
      name: "FastKitchen: Delivering Happiness",
      technologies: "HTML, CSS, Tailwind, Javascript, React",
      description: `FastKitchen is a simple fully responsive front-end pizza store layout built using React and Tailwind which
        allows its users to quickly and conveniently order food.
        It allows customers to pick from different types of pizza from your restaurant and with the pizza constructor
        feature they can customize their pizza by changing flavors, size, toppings etc. according to their taste,
        and place an order. And Netlify was used in order to deploy the project.`,
      github_link: "https://github.com/RutamBhagat/pizza_UI_react",
      live_link: "https://rutambhagatgithubiopizzauireact.netlify.app/",
      demo_link: "https://youtu.be/jr-RZTDfxHs",
    },
    {
      img: smartbrain,
      name: "SmartBrain: Face detection app",
      technologies:
        "HTML, CSS, Tailwind, Javascript, React, Node, Express, PostgreSQL",
      description: `The Smart-Brain application uses image URI as an input, 
      and then it’ll detect all the faces in the image using Clarifai face detection API, 
      and tags them by puting boxes around their faces. 
      The front end is built using React, Tailwind and frontend was deployed on netlify, 
      backend on render and heroku was used for deploying the PostgreSQL database. 
      In backend it has its own REST API server with express. 
      It keeps a record of user login details such as usernames, hash encrypted passwords using bcrypt and
      count of how many faces they have detected so far with the app, securely in a PostgreSQL database. 
      SmartBrain V-2 is a fully responsive web site, and the react-tsparticles library make it look even cooler.`,
      github_link: "https://github.com/RutamBhagat/SmartBrain_V-2",
      live_link: "https://rutambhagatgithubiosmartbrain.netlify.app/",
      demo_link: "https://youtu.be/7Y_uCxnZuOg",
    },
    {
      img: drip,
      name: "DripShop: Clothing Shop App",
      technologies: "React, Redux, React Router, Context API, Firebase, Stripe",
      description: `This is a minimalist E-commerce application similar to Shopify that sells the latest clothes in fashion.
      It was created using React, Redux, React Router, Context API, Firebase, Stripe + more. This is a full
      stack app (MERN stack), using Firebase.
      It uses Redux library for global state management.
      It makes use of React Router to move between pages and Firebase for authentication and accessing shop
      data. And the payments gateway implements Stripe API in checkout process to make online purchases.
      It utilizes Tailwind for styling the app.
      Other technologies used in this app were: Redux Saga, Asynchronous Redux, React Hooks, Context API,
      React Suspense + React Lazy Loading.`,
      github_link: "https://github.com/RutamBhagat/Drip_Shop_V2",
      live_link: "https://rutambhagatgithubiodrip-shop.netlify.app/",
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
                    <div className="mx-3 mt-8 inline-block bg-gradient-to-r from-cyan-200 to-cyan-600 p-1">
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

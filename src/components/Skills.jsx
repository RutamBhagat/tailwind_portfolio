import React from "react";
import TypescriptIcon from "../assets/svg/typescript.component";
import PostgreSQLIcon from "../assets/svg/postgresql.component";
import TailwindCSSIcon from "../assets/svg/tailwindCSS.component";
import ReduxIcon from "../assets/svg/redux.components";
import GraphQLIcon from "../assets/svg/graphQL.components";
import FirebaseIcon from "../assets/svg/firebase.component";

const Skills = () => {
  const skills = [
    {
      logo: "fa-brands fa-html5",
      name: "HTML",
    },
    {
      logo: "fa-brands fa-css3",
      name: "CSS",
    },
    {
      svg: <TailwindCSSIcon />,
      name: "Tailwind",
    },
    {
      logo: "fa-brands fa-bootstrap",
      name: "Bootstrap",
    },
    {
      logo: "fa-brands fa-square-js",
      name: "Javascript",
    },
    {
      svg: <TypescriptIcon />,
      name: "Typescript",
    },
    {
      logo: "fa-brands fa-react",
      name: "React Js",
    },
    {
      svg: <ReduxIcon />,
      name: "Redux",
    },
    {
      svg: <GraphQLIcon />,
      name: "GraphQl",
    },
    {
      logo: "fa-brands fa-node",
      name: "Node Js",
    },
    {
      logo: "fa-brands fa-npm",
      name: "NPM",
    },
    {
      svg: <PostgreSQLIcon />,
      name: "PostgreSQL",
    },
    {
      svg: <FirebaseIcon />,
      name: "Firebase",
    },
    {
      logo: "fa-brands fa-stripe",
      name: "Stripe",
    },
    {
      logo: "fa-brands fa-github",
      name: "Github",
    },
  ];
  return (
    <section id="skills" className="relative bg-gray-900 py-10">
      <div className="mt-8 text-center text-gray-100">
        <h3 className="text-4xl font-semibold text-gray-100">
          My <span className="text-cyan-400">Skills</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">Languages and Frameworks</p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="group relative min-w-[10rem] max-w-[16rem] rounded-xl border-2 border-cyan-400 bg-gray-200 p-10 text-gray-700"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gray-200 text-6xl">
                {skill.logo ? (
                  <i className={`${skill.logo} group-hover:text-cyan-500`}></i>
                ) : (
                  skill.svg
                )}
              </div>
              <h1 className="group-hover:text-cyan-500">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

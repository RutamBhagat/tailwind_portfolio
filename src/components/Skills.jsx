import React from "react";

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
      logo: "fa-brands fa-square-js",
      name: "Javascript",
    },
    {
      logo: "fa-brands fa-react",
      name: "React Js",
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
      logo: "fa-solid fa-database",
      name: "PostgreSQL",
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
              className="group relative min-w-[10rem] max-w-[16rem] rounded-xl border-2 text-gray-700 border-cyan-400 bg-gray-200 p-10"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gray-200 text-6xl group-hover:text-cyan-400">
                <i className={`${skill.logo}`}></i>
              </div>
              <h1 className="group-hover:text-cyan-400">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";

// Definição de tipo para os projetos
type Project = {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string; // Link para o site ao vivo (opcional)
  repoLink: string;  // Link para o repositório no GitHub
};

// Lista de projetos como exemplo
const projects: Project[] = [
  {
    title: "Meu Portfólio",
    description: "Uma página pessoal para exibir meus projetos, habilidades e experiências.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    liveLink: "https://jonasedpi.github.io",
    repoLink: "https://github.com/jonasedpi/jonasedpi.github.io",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold">Tecnologias:</h4>
                <ul className="list-disc list-inside">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="text-gray-700">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Ver Online
                  </a>
                )}
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Repositório
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

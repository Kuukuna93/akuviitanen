import Link from "next/link";
import placeholder from "./../../../public/placeholder.svg";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  url?: string;
  gitUrl?: string;
  img: any;
  technologies?: string[];
}

const projects: Project[] = [
  {
    title: "This website",
    description:
      "My own portfolio website to demonstrate my past projects and certifications. ",
    url: "https://akuviitanen.vercel.app/",
    gitUrl: "https://github.com/Kuukuna93/akuviitanen",
    img: placeholder,
    technologies: ["TypeScript", "React", "NextJS", "Vercel", "TailwindCSS"],
  },
  {
    title: "Placeholder project",
    description: "This project was added to demonstrate strucutre of this page",
    url: "a",
    gitUrl: "a",
    img: placeholder,
    technologies: ["placeholder images", "lorem ipsum"],
  },
];

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 gap-10">
      <p className="text-5xl">Projects</p>
      <p className="max-w-2xl">
        Most of my projects have been developed directly for clients and as
        such, I will not be posting about them in detail publicly. I will list
        my own projects below.
      </p>
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <div
            className={`flex gap-5 justify-between ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={`project-${index}`}
          >
            <Image src={project.img} alt={""} width={360} height={280} />
            <div className="flex flex-col gap-3">
              <p className="text-3xl">{project.title}</p>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies?.join(", ")}</p>
              {project.url ? (
                <Link
                  className="underline text-slate-400 mr-auto"
                  href={project.url}
                >
                  Website
                </Link>
              ) : null}
              {project.gitUrl ? (
                <Link
                  className="underline text-slate-400 mr-auto"
                  href={project.gitUrl}
                >
                  Repository
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

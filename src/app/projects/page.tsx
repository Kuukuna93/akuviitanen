import Link from "next/link";
import placeholder from "./../../../public/placeholder.svg";
import website from "./../../../public/website.png";
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
    gitUrl: "https://github.com/Kuukuna93/akuviitanen",
    img: website,
    technologies: [
      "TypeScript",
      "React",
      "NextJS",
      "Vercel",
      "TailwindCSS",
      "Jest",
    ],
  },
];

export default function Projects() {
  return (
    <main className="flex flex-col items-center p-12 gap-20">
      <p className="text-5xl">Projects</p>
      <p className="max-w-2xl">
        Most of my projects have been developed directly for clients and as
        such, I will not be posting about them in detail publicly. I will list
        my own personal projects below.
      </p>
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <div
            className={`flex gap-5 justify-between ${
              index % 2 === 0
                ? "flex-row contentLeft"
                : "flex-row-reverse contentRight"
            }`}
            key={`project-${index}`}
          >
            <Image
              src={project.img}
              alt={""}
              width={360}
              height={280}
              className="border border-slate-500"
            />
            <div className="flex flex-col gap-3">
              <p className="text-3xl">{project.title}</p>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies?.join(", ")}</p>
              {project.url ? (
                <Link
                  className="underline text-slate-400 mr-auto"
                  href={project.url}
                  target="_blank"
                >
                  Website
                </Link>
              ) : null}
              {project.gitUrl ? (
                <Link
                  className="underline text-slate-400 mr-auto"
                  href={project.gitUrl}
                  target="_blank"
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

"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { Theme } from "../types";
import { useEffect, useState } from "react";

enum TimelineElementType {
  work = "work",
  education = "education",
}

interface TimelineElement {
  title: string;
  subtitle: string;
  location: string;
  date: string;
  description: string;
  type: TimelineElementType;
  keywords: string[];
}

const timelineElements: TimelineElement[] = [
  {
    title: "Software Developer",
    subtitle: "Vincit USA",
    location: "California - Remote",
    date: "2022 - current",
    description:
      "Worked on client projects as a full stack web developer. Projects varied from membership platforms to e-commerce solutions.",
    type: TimelineElementType.work,
    keywords: ["React", "TypeScript", "GraphQL", "SQL", "node.js", "GCP"],
  },
  {
    title: "Project Engineer",
    subtitle: "Prosys OPC Ltd",
    location: "Helsinki, Finland",
    date: "2020 - 2022",
    description:
      "Led a small team in an embedded technology delivery consisting of both custom hardware and software solutions. Lead developer on the associated native Android app.",
    type: TimelineElementType.work,
    keywords: ["Java", "Android", "C#", "OPC UA"],
  },
  {
    title: "MS in Computer Science",
    subtitle: "Aalto University",
    location: "Helsinki, Finland",
    date: "September 2020",
    description: "",
    type: TimelineElementType.education,
    keywords: [],
  },
  {
    title: "Sales Engineer",
    subtitle: "Prosys OPC Ltd",
    location: "Helsinki, Finland",
    date: "2019 - 2020",
    description:
      "Development of internal marketing tools and technology infrastructure. Engineering support for business growth operations.",
    type: TimelineElementType.work,
    keywords: ["Azure AD", "Microsoft Dynamics", "Linux"],
  },
  {
    title: "Full Stack Developer",
    subtitle: "Prosys OPC Ltd",
    location: "Helsinki, Finland",
    date: "2016 - 2019",
    description: "Worked in customer projects ",
    type: TimelineElementType.work,
    keywords: [
      "Java",
      "PHP",
      "Zend Framework",
      "C#",
      "SQL",
      "JavaScript",
      "JQuery",
    ],
  },
];

export default function About() {
  const [theme, setTheme] = useState(Theme.dark);

  useEffect(() => {
    const node = document.getElementsByTagName("html")[0];
    setTheme(node.classList.contains(Theme.dark) ? Theme.dark : Theme.light);

    const mutationObserver = new MutationObserver((mutationlist) => {
      for (const item of mutationlist) {
        if (
          item.attributeName === "class" &&
          node.classList.contains(Theme.dark)
        ) {
          setTheme(Theme.dark);
        } else {
          setTheme(Theme.light);
        }
      }
    });

    mutationObserver.observe(node, { attributes: true });
  });

  return (
    <main className="flex flex-col items-center p-12 gap-10">
      <p className="text-5xl">About</p>
      <div className="flex flex-row gap-10 justify-center">
        <div className="flex w-52 contentLeft">
          <p className="break-all">
            aaabasdbasbghjl,fghlöjkpgfhok,joplfg,kpojkghkfdsabdas
          </p>
        </div>
        <div className="flex w-52 contentRight">b asdgfbsdfsdbfsd</div>
      </div>
      <VerticalTimeline className="before:bg-black dark:before:bg-white">
        {timelineElements.map((timelineElement, index) => {
          const color: string =
            timelineElement.type === TimelineElementType.education
              ? "#e11d48"
              : "#0284c7";
          return (
            <VerticalTimelineElement
              key={`timelineElement_${index}`}
              className={`vertical-timeline-element--${timelineElement.type}`}
              contentStyle={{ background: color, color: "#fff" }}
              contentArrowStyle={{
                borderRight: `7px solid ${color}`,
              }}
              date={timelineElement.date}
              iconStyle={{
                background: color,
                color: "#fff",
                boxShadow:
                  theme === Theme.dark
                    ? "0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
                    : "0 0 0 4px #000, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
              }}
              icon={
                timelineElement.type === TimelineElementType.education ? (
                  <MdSchool />
                ) : (
                  <MdWork />
                )
              }
            >
              <h1 className="vertical-timeline-element-title text-xl font-bold">
                {timelineElement.title} - {timelineElement.subtitle}
              </h1>
              <h4 className="vertical-timeline-element-subtitle text-lg">
                {timelineElement.location}
              </h4>
              {timelineElement.description ? (
                <p>{timelineElement.description}</p>
              ) : null}
              {timelineElement.keywords.length > 0 ? (
                <p>{timelineElement.keywords.join(", ")}</p>
              ) : null}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </main>
  );
}

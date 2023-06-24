import apolloAssociate from "./../../../public/apollo_associate.svg";
import apolloProfessional from "./../../../public/apollo_professional.svg";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

interface Certificate {
  title: string;
  url?: string;
  img?: any;
  completed: Date;
  expires?: Date;
}

const certificates: Certificate[] = [
  {
    title: "Graph Developer - Associate",
    url: "https://www.apollographql.com/tutorials/certifications/d7b7eb6b-2b94-4590-a792-5270aba8e7a1",
    completed: new Date(2023, 4, 25),
    img: apolloAssociate,
  },
  {
    title: "Graph Developer - Professional",
    url: "https://www.apollographql.com/tutorials/certifications/e6fbb8b9-9ff5-468d-8ea0-24ca5aafda8e",
    completed: new Date(2023, 5, 19),
    img: apolloProfessional,
  },
];

export default function Certificates() {
  return (
    <main className="flex flex-col items-center p-12 gap-20">
      <p className="text-5xl">Certificates</p>
      <p>Below you can find all of my current official certifications.</p>
      <div className="flex flex-col gap-5">
        {certificates.map((certificate, index) => (
          <div
            className={`border rounded-md flex flex-row gap-10 px-5 py-3 ${
              index % 2 === 0 ? "contentLeft" : "contentRight"
            }`}
            key={`certificate-${index}`}
          >
            <Image
              src={certificate.img || null}
              alt={""}
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-center">
              <span>{certificate.title}</span>
              <span>
                Completed {format(certificate.completed, "MMMM d, y")}
              </span>
            </div>
            {certificate.url ? (
              <div className="rounded-md bg-indigo-600 p-3 self-center ml-auto">
                <Link
                  href={certificate.url}
                  className={`text-slate-300 py-2 px-4`}
                  target="_blank"
                >
                  View Certificate
                </Link>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </main>
  );
}

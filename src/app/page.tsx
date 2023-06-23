import placeholder from "./../../public/under_construction.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-12 gap-10">
      <p className="text-5xl">Home</p>
      <div className="flex flex-row items-center gap-5 max-w-3xl">
        <Image src={placeholder} alt={""}></Image>
        <span>
          This website was started on June 23rd 2023 and is still under
          construction. Future updates include but are not limited to:
          styling/color, content and mobile support
        </span>
        <Image src={placeholder} alt={""}></Image>
      </div>
      <p>Below you can find all of my current official certifications.</p>
    </main>
  );
}

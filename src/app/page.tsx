import placeholder from "./../../public/under_construction.svg";
import profile from "./../../public/profile.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-12 px-5 sm:p-12 gap-10 md:gap-20">
      <p className="text-5xl">Home</p>
      <div className="flex flex-row items-center gap-5 max-w-3xl">
        <Image src={placeholder} alt={""}></Image>
        <p>
          This website was started on June 23rd 2023 and is still under
          construction. Future updates include but are not limited to:
          styling/color, dark/lightmode, new content and additional mobile
          support. I currently recommend browsing this page with a desktop
          device.
        </p>
        <Image src={placeholder} alt={""}></Image>
      </div>
      <div className="flex flex-col md:flex-row max-w-md md:max-w-6xl gap-10 items-center md:justify-center">
        <div className="flex md:w-1/2 contentLeft flex-col gap-5">
          <p className="break-words text-2xl font-semibold">Welcome!</p>
          <p className="break-words">
            Hi, my name is Aku Viitanen and this is my brand new
            personal/portfolio/demo page to list and demonstrate my professional
            skills as a software developer. Here you can find listings of my
            (public) projects, certificates and a little more about me on both
            professional and personal level.
          </p>
        </div>
        <div className="flex contentRight ">
          <Image
            src={profile}
            alt={""}
            width={180}
            className="rounded-full"
          ></Image>
        </div>
      </div>
    </main>
  );
}

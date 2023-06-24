import Link from "next/link";

interface navItemInput {
  text: string;
  href: string;
  active: boolean;
}

export default function NavItem({ text, href, active }: navItemInput) {
  return (
    <Link
      href={href}
      className={`${active ? "active" : ""} text-slate-300 py-2 px-4`}
    >
      {text}
    </Link>
  );
}

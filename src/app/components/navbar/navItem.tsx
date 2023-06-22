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
      className={`${active ? "active" : ""} text-slate-950 dark:text-slate-50`}
    >
      {text}
    </Link>
  );
}

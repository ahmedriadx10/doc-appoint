"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavlink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${path === href ? " text-(--primaryColor) border-b-2 border-b-(--primaryColor)" : ""} hover:text-(--primaryColor) font-semibold transition-colors pb-0.5`}
    >
      {children}
    </Link>
  );
};

export default MyNavlink;
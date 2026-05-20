'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const CutstomNavlink = ({href,children}) => {
const path=usePathname()

  return (
    <Link href={href} className={`font-semibold ${path===href?'text-(--primaryColor)':''}`}>
      {children}
    </Link>
  );
};

export default CutstomNavlink;
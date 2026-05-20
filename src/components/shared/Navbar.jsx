import { FaBriefcaseMedical } from "react-icons/fa";
import AllNavlinks from "../ui/AllNavlinks";
import { Avatar, Button } from "@heroui/react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import SignOutBtn from "../ui/SignOutBtn";
import { MobileMenu } from "../ui/MobileMenu";

const Navbar =async () => {

  const session=await auth.api.getSession({
    headers:await headers()
  })



  console.log(session)

  return (
    <nav>
      <div className="flex justify-between items-center  max-w-7xl mx-auto py-5 px-4">

<div className="flex text-2xl gap-1.5  text-(--primaryColor)  font-bold">
  <FaBriefcaseMedical  />
  <h2 >DocAppoint</h2>
</div>

<ul className="hidden md:flex gap-7 items-center">
  <AllNavlinks/>
</ul>

      <div className="hidden md:block">
 
 {session?.user?<div className="flex gap-2.5 items-center">
    <Avatar className="outline-2 outline-(--outline)" size="lg">
        <Avatar.Image  alt={session?.user?.name} className="" src={session?.user?.image} referrerPolicy="no-referrer"/>
        <Avatar.Fallback>{session?.user?.name.slice(0,2).toUpperCase()}</Avatar.Fallback>
      </Avatar>
  
  <SignOutBtn >Sign out</SignOutBtn></div>: <div className="flex items-center gap-4"><Link href={'/login'}>
  <Button variant="ghost" className={'rounded-lg text-(--primaryColor) font-semibold '}>Login</Button></Link>
  <Link href={'/register'}>
   <Button  className={'w-full bg-[#0052A3] text-white font-semibold text-sm h-10 rounded-xl flex items-center justify-center gap-2 hover:bg-[#004182] transition-colors shadow-md'}>Sign up</Button></Link>
       </div>}
      </div>

            <div className="flex gap-2.5 items-center md:hidden">
     {session?.user &&    <Avatar className="outline-2 outline-(--outline)" size="lg">
        <Avatar.Image  alt={session?.user?.name} className="" src={session?.user?.image} referrerPolicy="no-referrer"/>
        <Avatar.Fallback>{session?.user?.name.slice(0,2).toUpperCase()}</Avatar.Fallback>
      </Avatar>}
       <MobileMenu/>


      </div>

      </div>
    </nav>
  );
};

export default Navbar; 
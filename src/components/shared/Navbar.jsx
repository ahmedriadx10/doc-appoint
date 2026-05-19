import { FaBriefcaseMedical } from "react-icons/fa";
import AllNavlinks from "../ui/AllNavlinks";
import { Button } from "@heroui/react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center flex-wrap max-w-7xl mx-auto py-2.5 px-4">

<div className="flex gap-1 items-center text-(--primaryColor) text-2xl font-bold">
  <FaBriefcaseMedical />
  <h2>DocAppoint</h2>
</div>

<ul className="flex gap-2.5 items-center">
  <AllNavlinks/>
</ul>

<div className="flex gap-2">
<Button variant="ghost">Login</Button>
<Button  >Register</Button>
</div>
      </div>
    </nav>
  );
};

export default Navbar; 
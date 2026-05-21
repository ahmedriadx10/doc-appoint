'use client'
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { HiOutlineSearchCircle } from "react-icons/hi";

const EmpthySearch= ({ searchTerm }) => {
  const router=useRouter()
  return (
    <div className="flex flex-col items-center justify-center py-10 col-span-full ">
      <HiOutlineSearchCircle className="text-gray-300 text-7xl mb-2" />
      <p className="text-gray-500 text-lg">
        No results found for <span className="font-bold">"{searchTerm}"</span>
      </p>
      <Button 
        onClick={() => router.replace('/all-appointments')}
        className="mt-2 bg-(--primaryColor) "
      >
        Clear Search
      </Button>
    </div>
  );
};

export default EmpthySearch;
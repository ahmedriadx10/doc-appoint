'use client'

import { Button, Input } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {  useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchCourse = () => {
const [searchInp,setSearchInp]=useState('') 
 const path=usePathname()
 console.log(path)
 const searchParams=useSearchParams()
 console.log(searchParams)
 const router=useRouter()

 console.log(searchInp)
const handleSearch=()=>{

const instanceParams=new URLSearchParams(searchParams)

if(searchInp){

  instanceParams.set('search',searchInp)
router.push(`${path}?${instanceParams.toString()}`)

}
else{
  instanceParams.delete('search')
  router.push(`${path}`)
}


}

  return (
    <div className="max-w-lg mx-auto flex justify-center items-center gap-2 ">
      
<Input aria-label="Name" className="rounded-lg py-3 shadow-none bg-[#94A3B810] w-[80%]" placeholder="Search Courses" value={searchInp} onChange={(e)=>setSearchInp(e.target.value)}/>
<Button size=""  className={'bg-(--primaryColor)  w-12 h-12'} onPress={handleSearch} ><FaSearch /></Button>

    </div>
  );
};

export default SearchCourse;
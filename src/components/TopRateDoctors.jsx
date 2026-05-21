import { topRatedDoctorsGet } from "@/lib/data";
import TopRatedDoctorCard from "./ui/TopRatedDoctorCard";
import Link from "next/link";
import {  FaArrowRight } from "react-icons/fa";

const TopRateDoctors = async() => {
 
 const topRatedDoctors=await topRatedDoctorsGet()

 console.log(topRatedDoctors)
 
  return (
    <section className="max-w-7xl mx-auto w-[90%] py-20">

{/* top rated doctors section introduce */}


<div className=" space-y-4 px-3 text-center" >

 <h2 className="  text-2xl  sm:text-3xl md:text-[32px] font-bold text-(--titleColor)">
          Out Top Rated Doctors
          </h2>
<p className="text-(--textColor)">Vetted experts dedicated to your clinical excellence.</p>

</div>


<div className="mt-15 lg:mt-20">
  <p className=" text-(--primaryColor) font-medium text-sm flex justify-end items-center gap-1.5"><Link href={'/all-appointments'}>View All Specialists</Link><FaArrowRight/></p>
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">


  {topRatedDoctors?.map((doctor)=><TopRatedDoctorCard key={doctor._id} doctor={doctor}/>)}


</div>
</div>

   
    </section>
  );
};

export default TopRateDoctors;
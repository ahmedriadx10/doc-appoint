import { topRatedDoctorsGet } from "@/lib/data";
import TopRatedDoctorCard from "./ui/TopRatedDoctorCard";
import Link from "next/link";

const TopRateDoctors = async() => {
 
 const topRatedDoctors=await topRatedDoctorsGet()

 console.log(topRatedDoctors)
 
  return (
    <section className="max-w-7xl mx-auto w-[90%] py-20">

{/* top rated doctors section introduce */}


<div >

 <h2 className="text-2xl px-6 sm:text-3xl md:text-[32px] font-bold text-(--titleColor)">
          Out Top Rated Doctors
          </h2>

<p className="text-right text-(--primaryColor) font-medium text-sm"><Link href={'/all-appointments'}>View All Specialists</Link></p>
</div>


<div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">


  {topRatedDoctors?.map((doctor)=><TopRatedDoctorCard key={doctor._id} doctor={doctor}/>)}


</div>

   
    </section>
  );
};

export default TopRateDoctors;
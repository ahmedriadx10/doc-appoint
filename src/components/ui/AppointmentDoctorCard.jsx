import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { FaStar, FaBriefcase, FaMoneyBillWave } from 'react-icons/fa';

const AppointmentDoctorCard = ({doctor}) => {

  const {_id,name,specialty,experience,image,rating,fee,education}=doctor

  return (

    <div className="w-full  h-120 rounded-2xl relative overflow-hidden shadow-md group mx-auto">
      

      <Image 
        src= {image}
        alt={name} 
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />


      <div className="absolute bottom-3 left-3 right-3 bg-white/70 backdrop-blur-md rounded-2xl p-5 flex flex-col gap-3.5 border border-white/30 shadow-sm z-10">

        <div className="flex justify-between items-center ">
          <span className="bg-(--primaryColor) text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
      {specialty}
          </span>
          <div className="flex items-center gap-1">
            <FaStar className="text-[#F5A623] text-sm" />
            <span className="text-[#1E293B] font-bold text-sm">{rating}</span>
          </div>
        </div>


        <div className="flex flex-col gap-0.5">
          <h3 className="text-[#1E293B] font-bold text-lg leading-tight">
       {name}
          </h3>
          <p className="text-[#475569] text-xs font-semibold">
       {education}
          </p>
        </div>


        <div className="grid grid-cols-2 gap-2 my-0.5">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0052A3]/10 flex items-center justify-center text-(--primaryColor)">
              <FaBriefcase className="text-xs" />
            </div>
            <div>
              <p className="text-[#64748B] text-[9px] uppercase font-bold tracking-wider leading-none">
                Experience
              </p>
              <p className="text-[#1E293B] font-bold text-xs mt-0.5">
              {experience}
              </p>
            </div>
          </div>


          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0052A3]/10 flex items-center justify-center text-(--primaryColor)">
              <FaMoneyBillWave className="text-xs" />
            </div>
            <div>
              <p className="text-[#64748B] text-[9px] uppercase font-bold tracking-wider leading-none">
                Fee
              </p>
              <p className="text-[#1E293B] font-bold text-xs mt-0.5">
              ${fee}
              </p>
            </div>
          </div>
        </div>


<Link href={`doctor-details/${_id}`}>

        <Button
       
          
          className="w-full bg-[#0052A3] text-white font-semibold text-sm h-10 rounded-xl flex items-center justify-center gap-2 hover:bg-[#004182] transition-colors shadow-md"
       
        >
     View Details
        </Button>
</Link>

      </div>
    </div>
  );
};

export default AppointmentDoctorCard;
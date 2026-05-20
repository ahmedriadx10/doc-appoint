import Image from 'next/image';
import Link from 'next/link';
import { Button, Chip } from '@heroui/react';
import { HiLocationMarker } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
 // রেটিং স্টারের জন্য
import { FiBriefcase } from 'react-icons/fi'; // এক্সপেরিয়েন্স আইকনের জন্য
import { AiFillStar } from 'react-icons/ai';

const TopRatedDoctorCard = ({doctor}) => {

  // const { _id, name, image, speciality, education, experience, location,rating } = doctor

  return (
    <div className="hover:-translate-y-1 transition-transform bg-white rounded-2xl border border-gray-100 shadow  overflow-hidden ">
  
      <div className="relative w-full h-70  overflow-hidden">
        <Image
          src={doctor?.image}
          alt={doctor?.name}
          fill
          className="object-cover object-top"
   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        
  
        <div className="absolute top-3 left-3">

            <Chip>
                      <AiFillStar className="text-amber-500 text-sm" />
          <Chip.Label>     <span className="text-xs font-bold text-gray-800">{doctor?.rating}</span></Chip.Label>
        </Chip>
  
     
        </div>
      </div>


      <div className="p-4">
        {/* Name and Verification */}
        <div className="flex items-center gap-1.5">
          <h3 className="text-lg font-bold text-(--titleColor)">{doctor?.name}</h3>
          <MdVerified className="text-blue-600 text-lg" />
        </div>

        <p className="text-sm text-(--textColor) mt-0.5">
          {doctor?.specialty} <span className=" mx-1">•</span> {doctor?.education}
        </p>

        {/* Divider */}
        <hr className="border-gray-100 my-4" />


        <div className="space-y-2.5 mb-5">
        
          <div className="flex items-center gap-2 text-gray-600">
            <FiBriefcase className="text-blue-500 text-base" />
            <span className="text-sm font-medium">Over {doctor?.experience} of Experience</span>
          </div>


          <div className="flex items-center gap-2 text-gray-600">
            <HiLocationMarker className="text-blue-500 text-base" />
            <span className="text-sm font-medium">{doctor?.location}</span>
          </div>
        </div>


        <Link href={`doctor-details/${doctor?._id}`}>
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

export default TopRatedDoctorCard;
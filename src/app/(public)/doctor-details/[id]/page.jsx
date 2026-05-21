import React from 'react';
import Image from 'next/image'; // Next.js Image Component ইমপোর্ট করা হয়েছে
import { FaRegCalendarAlt, FaStar, FaBriefcase, FaBuilding, FaSun, FaMoon } from 'react-icons/fa';
import { MdAttachMoney, MdLocationOn } from 'react-icons/md';
import { specificDoctorAppointmentsGet } from '@/lib/data';
import { BookingModal } from '@/components/ui/BookingModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';



export async function generateMetadata({params}){


  const {id}=await params
const token=await auth.api.getToken({
  headers:await headers()
})

  const doctorAppointmentsData = await specificDoctorAppointmentsGet(id,token?.token);


 return{
  title: `${doctorAppointmentsData?.name || 'Doctor'} | DocAppoint`,
  desription: doctorAppointmentsData?.description[0] || "View doctor details and book appointments."
 }


}




const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;

const token=await auth.api.getToken({
  headers:await headers()
})
console.log(token?.token)
  const doctorAppointmentsData = await specificDoctorAppointmentsGet(id,token?.token);

console.log(id)

const {_id,name,specialty,image,experience,availability,description,hospital,location,fee,rating,patients,education,}=doctorAppointmentsData



  return (
    <div className="min-h-screen  py-20 px-4 md:px-10 lg:px-20 ">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section: Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl  border border-[#e2e8f0] mb-8">
          
          {/* Next.js Image Wrapper */}
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0 relative">
            <Image 
              src={image} 
              alt={name} 
              fill 
              priority 
              sizes="(max-width: 768px) 176px, 176px"
              className="object-cover"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {specialty}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2 mb-1">
              {name}
            </h1>
            <p className="text-sm font-semibold text-slate-500 mb-4">
              {education}
            </p>
            
    
            
        <BookingModal doctorData={doctorAppointmentsData} token={token?.token}/>
          </div>
        </div>

        {/* Middle Section: Quick Info Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {/* Experience Card */}
          <div className="bg-[#F0F3FF] p-6 rounded-2xl  text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-(--primaryColor) flex items-center justify-center mb-3">
              <FaBriefcase className="w-5 h-5" />
            </div>
            <span className="text-sm text-slate-400 font-medium">Experience</span>
            <span className="text-xl font-bold text-slate-800 mt-1">{experience}</span>
          </div>

          {/* Consultation Fee Card */}
          <div className="bg-[#F0F3FF] p-6 rounded-2xl  text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-(--primaryColor) flex items-center justify-center mb-3">
              <MdAttachMoney className="w-6 h-6" />
            </div>
            <span className="text-sm text-slate-400 font-medium">Consultation Fee</span>
            <span className="text-xl font-bold text-slate-800 mt-1">${fee}</span>
          </div>

          {/* Rating Card */}
          <div className="bg-[#F0F3FF] p-6 rounded-2xl   text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-amber-500 flex items-center justify-center mb-3">
              <FaStar className="w-5 h-5" />
            </div>
            <span className="text-sm text-slate-400 font-medium">Rating</span>
            <span className="text-xl font-bold text-slate-800 mt-1">
              {rating} <span className="text-sm text-slate-400 font-normal">({patients} Reviews)</span>
            </span>
          </div>
        </div>

        {/* Bottom Section: Bio & Availability */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Biography & Facility */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0]  ">
              <h3 className="text-xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-4">
                Biography
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                {description?.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            {/* Facility Information */}
            <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] ">
              <h3 className="text-xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-5">
                Facility Information
              </h3>
              <div className="flex gap-4 items-start bg-blue-50/50 p-5 rounded-2xl border border-blue-100/50">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <FaBuilding className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">{hospital}</h4>
                  <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                    <MdLocationOn className="w-4 h-4 text-slate-400" /> {location}
                  </p>
                  <p className="text-xs text-slate-400 mt-2">Leading center for {specialty} excellence.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Availability Schedule */}
          <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0]   h-fit">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Availability</h3>
            
            <div className="space-y-4">
              {/* Morning Shift */}
              {availability?.[0] && (
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
                      <FaSun className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">Morning Shift</p>
                      <p className="text-xs text-slate-500 mt-0.5">{availability[0]}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Evening Shift */}
              {availability?.[1] && (
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center">
                      <FaMoon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">Evening Shift</p>
                      <p className="text-xs text-slate-500 mt-0.5">{availability[1]}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-400 mt-6 leading-normal">
              * Consultations are available Saturday through Thursday. Friday is closed.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DoctorDetailsPage;
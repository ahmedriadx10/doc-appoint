
import Link from "next/link";
import { HiPlus, HiSearch, HiOutlineCalendar } from "react-icons/hi";
import { MdVerifiedUser, MdLockOutline, MdHeadsetMic } from "react-icons/md";

const EmptyBooking = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center min-h-150  p-6 text-center ">

      <div className="relative flex items-center justify-center w-40 h-40 bg-blue-100/50 rounded-full mb-6">
        <div className="relative w-24 h-24 bg-white rounded-2xl shadow-md flex items-center justify-center transform -rotate-6 border border-slate-100">

          <HiOutlineCalendar className="text-5xl text-[#0052cc]" />
        </div>
 
        <div className="absolute bottom-6 right-6 w-10 h-10 bg-[#0052cc] rounded-xl flex items-center justify-center text-white shadow-lg border-2 border-white">
          <HiPlus className="text-xl" />
        </div>
      </div>


      <h2 className="text-2xl font-bold text-slate-950 mb-3">
        No Upcoming Appointments
      </h2>
      <p className="text-slate-500 max-w-sm text-sm leading-relaxed mb-8">
        You haven't scheduled any appointments yet. Find a specialist to start your healthcare journey.
      </p>


      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mb-16">
     <Link href={'/all-appointments'}>
        <button className="btn max-w-max bg-(--primaryColor) cursor-pointer hover:bg-[#0040a8] text-white border-none px-4 h-12 rounded-xl flex items-center gap-2 font-medium w-full sm:w-auto shadow-sm tracking-wide capitalize">
          <HiSearch className="text-lg" />
          Book New Appointment
        </button>
     </Link>
      </div>

      
      <div className="grid grid-cols-3 gap-8 pt-6 border-t border-slate-200/60 w-full max-w-lg">
        <div className="flex flex-col items-center gap-1.5">
          <MdVerifiedUser className="text-xl text-slate-400" />
          <span className="text-xs font-medium text-slate-500">Verified Doctors</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <MdLockOutline className="text-xl text-slate-400" />
          <span className="text-xs font-medium text-slate-500">Secure Records</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <MdHeadsetMic className="text-xl text-slate-400" />
          <span className="text-xs font-medium text-slate-500">24/7 Support</span>
        </div>
      </div>
    </div>
  );
};

export default EmptyBooking;
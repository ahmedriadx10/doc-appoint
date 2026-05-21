"use client";
import React from "react";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import { FaCheck, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineSecurity, MdOutlineSettings } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import { ProfileUpdateModal } from "./ui/ProfileUpdateModal";

const MyProfile = ({ bookingsData }) => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const user = session?.user;



  return (
    <div className="mt-15 ">

      <div className="w-full mx-auto max-w-125 bg-white border border-[#e2e8f0] shadow-sm rounded-2xl overflow-hidden flex flex-col">
 
        <div className="flex flex-col items-center pt-10 pb-6 px-6 text-center">

          <div className="relative w-32 h-32 mb-5 rounded-full border-4 border-slate-50 shadow-sm overflow-visible">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={
                  user?.image ||
                  "https://cdn-icons-png.flaticon.com/512/8188/8188349.png"
                } 
                alt={user?.name || "User"}
                fill
                priority
                sizes="(max-width: 768px) 128px, 128px"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-1 right-1 bg-blue-600 text-white rounded-full border-2 border-white flex items-center justify-center w-7 h-7 shadow z-10">
              <FaCheck className="text-[10px] stroke-2" />
            </div>
          </div>

          <h2 className="text-[26px] font-bold text-slate-900 tracking-tight">
            {user?.name}
          </h2>

          <Chip
            size="lg"
            className="mt-4   text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-50 text-blue-600 border-none"
          >
            Member Since {new Date(user?.createdAt).getFullYear()}
          </Chip>
        </div>


        <div className="grid grid-cols-2 gap-4 px-6 mb-6">
          <div className="bg-indigo-50/60 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-indigo-900">
              {bookingsData?.length !== 0 ? bookingsData?.length : 0}
            </div>
            <div className="text-[10px] font-bold text-indigo-700 uppercase tracking-widest mt-1">
              Bookings
            </div>
          </div>
          <div className="bg-indigo-50/60 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-indigo-900">4.9</div>
            <div className="text-[10px] font-bold text-indigo-700 uppercase tracking-widest mt-1">
              Punctuality
            </div>
          </div>
        </div>


        <div className="px-6 pb-6 flex flex-col gap-3">
  


          <ProfileUpdateModal user={user} />

   
        </div>


        <div className="bg-slate-100/80 px-6 py-4 flex justify-between items-center border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
            <MdOutlineSecurity className="text-base text-slate-400" />
            Data Secured
          </div>
 
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

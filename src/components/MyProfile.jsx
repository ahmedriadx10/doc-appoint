'use client'
import React from 'react';
import Image from 'next/image';
import { Button, Chip } from "@heroui/react";
import { FaCheck, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineSecurity, MdOutlineSettings } from "react-icons/md";
import { authClient } from '@/lib/auth-client';
import { ProfileUpdateModal } from './ui/ProfileUpdateModal';

const MyProfile = ({setToogle}) => {
    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 

  
const user=session?.user


  return (
    <div className="mt-15 ">
      {/* মেইন প্রোফাইল কার্ড কন্টেইনার (HTML div দিয়ে তৈরি) */}
      <div className="w-full mx-auto max-w-125 bg-white border border-[#e2e8f0] shadow-sm rounded-2xl overflow-hidden flex flex-col">
        
        {/* প্রোফাইল ইনফো সেকশন */}
        <div className="flex flex-col items-center pt-10 pb-6 px-6 text-center">
          
          {/* Next.js Image কম্পোনেন্ট (fill এবং sizes সহ) */}
          <div className="relative w-32 h-32 mb-5 rounded-full border-4 border-slate-50 shadow-sm overflow-visible">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={user?.image || 'https://cdn-icons-png.flaticon.com/512/8188/8188349.png'} // পরবর্তীতে তোমার ডাইনামিক ইমেজ ইউআরএল বসাবে
                alt={user?.name || 'User'}
                fill
                priority
                sizes="(max-width: 768px) 128px, 128px"
                className="object-cover"
              />
            </div>
            
            {/* ভেরিফাইড ব্লু টিক ব্যাজ */}
            <div className="absolute bottom-1 right-1 bg-blue-600 text-white rounded-full border-2 border-white flex items-center justify-center w-7 h-7 shadow z-10">
              <FaCheck className="text-[10px] stroke-2" />
            </div>
          </div>

          {/* নাম ও ইমেইল */}
          <h2 className="text-[26px] font-bold text-slate-900 tracking-tight">
           {user?.name}
          </h2>
          <p className="text-[15px] text-slate-500 mt-1">
{user?.email}
          </p>

          {/* HeroUI Chip (মেম্বারশিপ ব্যাজ) */}
          <Chip
        
            size="lg"
            className="mt-4   text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-50 text-blue-600 border-none"
          >
            Member Since {new Date(user?.createdAt).getFullYear()}
          </Chip>
        </div>

          {/* স্ট্যাটস গ্রিড (Bookings & Punctuality) */}
          <div className="grid grid-cols-2 gap-4 px-6 mb-6">
            <div className="bg-indigo-50/60 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-indigo-900">12</div>
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

          {/* অ্যাকশন বাটনসমূহ (HeroUI Button) */}
          <div className="px-6 pb-6 flex flex-col gap-3">
            {/* আপডেট প্রোফাইল বাটন */}
            {/* <Button
              color="primary"
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-[15px] shadow-sm h-12"
              startContent={<FaRegUser className="text-base" />}
            >
              Update Profile
            </Button> */}

            <ProfileUpdateModal user={user} setToogle={setToogle}/>

            {/* অ্যাকাউন্ট সেটিংস বাটন
            <Button
              variant="light"
              size="lg"
              className="w-full bg-transparent hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-[15px] h-12"
              startContent={<MdOutlineSettings className="text-xl" />}
            >
              Account Settings
            </Button> */}
          </div>

          {/* ফুটার সেকশন (Data Secured & Log Out) */}
          <div className="bg-slate-100/80 px-6 py-4 flex justify-between items-center border-t border-slate-100 mt-auto">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
              <MdOutlineSecurity className="text-base text-slate-400" />
              Data Secured
            </div>
            {/* <button className="flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition duration-200 uppercase tracking-wider bg-transparent border-none cursor-pointer">
              <FaSignOutAlt className="text-sm" />
              Log Out
            </button> */}
          </div>

      </div>
    </div>
  );
};

export default MyProfile;
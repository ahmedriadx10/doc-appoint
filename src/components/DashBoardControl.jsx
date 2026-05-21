'use client'
import  { useState } from 'react';
import MyBookings from './MyBookings';
import MyProfile from './MyProfile';

const DashBoardControl = ({bookingsData}) => {

  console.log(bookingsData)
   const [toggle, setToggle] = useState("bookings");
  return (
    <section className="max-w-7xl py-20 mx-auto w-[90%]">
      <div>
        <div className="max-w-max bg-gray-200  p-1 rounded-full mx-auto">
          <div className="flex items-center gap-2.5 rounded-full bg-transparent p-0.5">
            <button
              onClick={() => setToggle("bookings")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer duration-200 focus:outline-none ${toggle === "bookings" ? "bg-(--primaryColor) text-white shadow" : "bg-transparent text-(--titleColor) "}`}
            >
              My Bookings
            </button>

            <button
              onClick={() => setToggle("profile")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer duration-200 focus:outline-none ${toggle === "profile" ? "bg-(--primaryColor) text-white shadow" : "bg-transparent text-(--titleColor) "}`}
            >
              My Profile
            </button>
          </div>
        </div>
      </div>

{toggle ==='bookings'?<MyBookings bookingsData={bookingsData}/>:null}
{toggle ==='profile'?<MyProfile setToggle={setToggle} />:null}

    </section>
  );
};

export default DashBoardControl;
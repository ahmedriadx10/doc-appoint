
import Image from 'next/image';
import { FaUser, FaVenusMars, FaMoneyBillWave, FaCalendarAlt, FaClock } from 'react-icons/fa';
import {  BookingUpdateModal } from './BookingUpdateModal';
import DeleteBooking from './DeleteBooking';






const BookingCard =({bookingData}) => {




  const {_id,userId,doctorId,doctorImage,doctorName,specialty,
gender,
patientName,fee,
appointmentTime,
appointmentDate}=bookingData


  return (
    <div className=" bg-white border border-slate-100 rounded-3xl shadow-sm p-6 md:p-7 font-sans">
      
      {/* Doctor Info Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
          <Image
          src={doctorImage}
            alt={doctorName}
            fill
            className="object-cover"
            sizes="64px"
            priority
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-(--titleColor) tracking-tight">{doctorName}</h3>
          <p className="text-xs font-bold text-(--primaryColor) uppercase tracking-wider mt-0.5">{specialty}</p>
        </div>
      </div>

      <hr className="border-slate-100 my-4" />

      {/* Patient Name Section */}
      <div className="mb-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          <FaUser className="text-sm" />
          <span>Patient</span>
        </div>
        <p className="text-lg font-bold text-(--titleColor)">{patientName}</p>
      </div>

      {/* Grid Info Section (Gender, Fee, Date, Time) */}
      <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-7">
        
        {/* Gender */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            <FaVenusMars className="text-sm" />
            <span>Gender</span>
          </div>
          <p className="text-base font-bold text-(--titleColor)">{gender}</p>
        </div>

        {/* Fee */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            <FaMoneyBillWave className="text-sm" />
            <span>Fee</span>
          </div>
          <p className="text-base font-bold text-(--titleColor)">${fee}</p>
        </div>

        {/* Date */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            <FaCalendarAlt className="text-sm" />
            <span>Date</span>
          </div>
          <p className="text-base font-bold text-(--titleColor)">{new Date(appointmentDate).toDateString()}</p>
        </div>

        {/* Time */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            <FaClock className="text-sm" />
            <span>Time</span>
          </div>
          <p className="text-base font-bold text-(--titleColor)">{appointmentTime}</p>
        </div>

      </div>
   <hr className="border-slate-100 my-4" />
      {/* Action Buttons */}
      <div className="flex gap-4">
<BookingUpdateModal bookingData={bookingData}/>
<DeleteBooking bookingData={bookingData}/>
      </div>

    </div>
  );
};

export default BookingCard;

import BookingCard from "./ui/BookingCard";
import EmptyBooking from "./ui/EmptyBooking";


const MyBookings = ({bookingsData}) => {
  



  return (
    <div className="min-h-[40vh]">


{bookingsData?.length===0?<EmptyBooking/>:<div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  
  {bookingsData?.map((booking)=><BookingCard  bookingData={booking} key={booking?._id}></BookingCard>)}

  </div>}
<div></div>


    </div>
  );
};

export default MyBookings;
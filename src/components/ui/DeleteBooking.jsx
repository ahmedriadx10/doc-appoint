"use client";

import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { toast } from 'react-hot-toast';

export default function DeleteBooking({bookingData}) {
const router=useRouter()

    const {_id,userId,doctorId,doctorImage,doctorName,specialty,
gender,
patientName,fee,
appointmentTime,
appointmentDate}=bookingData




const hadleDeleteBooking=async()=>{

  console.log(_id)

const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${_id}`,{
  method:'DELETE'
})

const result=await res.json()

console.log(result)

if(result?.deletedCount>0){

  router.refresh('/dashboard')
toast.success('Appointment deleted successfully')
return
}
else{
  toast.error('Something went wrong try again')
}

}



  return (
    <AlertDialog>
      <Button className="w-full bg-white  text-danger font-semibold rounded-xl text-[15px] border border-danger shadow-sm " >
          Delete
        </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
<div className="bg-danger/10 h-10 w-10 flex justify-center items-center rounded-full">
<FaTrash className="text-danger text-lg"/>
</div>
              <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
           This will permanently delete this appointment booking and all associated
  details. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex justify-between items-center">
              <Button slot="close" className={'border-0 bg-white text-(--titleColor) hover:text-(--primaryColor)'} >
                Cancel
              </Button>
              <Button slot="close" variant="danger" className={'rounded-2xl'} onPress={hadleDeleteBooking}>
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
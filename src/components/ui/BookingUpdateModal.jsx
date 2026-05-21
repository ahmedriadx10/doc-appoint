"use client";


import { authClient } from "@/lib/auth-client";
import { convertTo24Hour, formatTime } from "@/works/shortwork";

import {
  Button,
  DateField,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  TimeField,
  Select,
  ListBox,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegCalendarAlt } from "react-icons/fa";

export  function BookingUpdateModal({ bookingData }) {


    const {_id,userId,doctorId,doctorImage,doctorName,specialty,
gender,
patientName,fee,
appointmentTime,
appointmentDate,userEmail,
reason
}=bookingData



  const router = useRouter();



  const handleUpdateBooking = async (e) => {
    e.preventDefault();



    const formData = new FormData(e.currentTarget);
    const exactFormData = Object.fromEntries(formData.entries());

const jwtToken=await authClient.token()



    const updateBookingData={

patientName:exactFormData?.patientName.trim(),
gender:exactFormData?.gender,
appointmentDate:new Date(exactFormData?.appointmentDate),
appointmentTime:formatTime(exactFormData?.appointmentTime),
reason:exactFormData?.reason?exactFormData.reason : 'Not mentioned'
    }






const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${_id}`,{

  method:'PATCH',
  headers:{

    'content-type':'application/json',
      
        ...(jwtToken?.data?.token && { Authorization: `Bearer ${jwtToken?.data?.token}` }),
   
  },
  body:JSON.stringify(updateBookingData)
})

const result=await res.json()



if(result?.modifiedCount>0){


  toast.success('Appointment updated successfully!')
  router.refresh('/dashboard')
return
}
else{

  toast.error('Something went wrong try again')
}


  };

  return (
    <Modal className="">
      <Button className="w-full bg-(--primaryColor) hover:bg-blue-800 text-white font-semibold rounded-xl text-[15px] shadow-sm ">
       Update
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-125">
            <Modal.CloseTrigger />
            <Modal.Header></Modal.Header>
            <Modal.Body className="md:px-5 py-2.5">
              <Surface className=" bg-white">
                <form
                  className="flex flex-col gap-4"
                 onSubmit={handleUpdateBooking}
                >
                  <TextField
                    className="w-full"
                    name="email"
                    defaultValue={userEmail}
                    type="email"
                    variant="secondary"
                    isReadOnly
                  >
                    <Label>Email</Label>
                    <Input
                      placeholder="Enter your name"
                      className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
                    />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="doctorName"
                    type="text"
                    defaultValue={doctorName}
                    isReadOnly
                    variant="secondary"
                  >
                    <Label>Doctor Name</Label>
                    <Input
                      placeholder="Doctor name"
                      className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
                    />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="patientName"
                    type="text"
                    variant="secondary"
                    defaultValue={patientName}
                  >
                    <Label>Patient Name</Label>
                    <Input
                      placeholder="Enter patient name"
                      className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
                    />
                  </TextField>
  

                  <div className="flex flex-col gap-2 ">
                    <label className="text-sm font-medium">Select Date</label>

                    <input
                    defaultValue={appointmentDate.split('T')[0]}
                      type="date"
                      name="appointmentDate"
                      className=" rounded-lg p-3 shadow-none bg-[#94A3B810] focus:outline-(--primaryColor)"
                    />
                  </div>

                  <div className="flex gap-5 flex-col sm:flex-row justify-between items-center">
                    <div className="flex flex-col gap-2 w-full">
                      <label className="text-sm font-medium">Time</label>

                      <input
                        name="appointmentTime"
                        type="time"
defaultValue={convertTo24Hour(appointmentTime)}
                        className="rounded-lg p-3 shadow-none w-full bg-[#94A3B810] focus:outline-(--primaryColor)"
                      />
                    </div>

                    <Select
                      className="w-full"
                      placeholder="Not Selected"
                      name="gender"
                      defaultValue={gender || 'Male'}
                    >
                      <Label>Gender</Label>
                      <Select.Trigger className="rounded-lg py-3 w-full shadow-none bg-[#94A3B810] ">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover className={"rounded-2xl"}>
                        <ListBox>
                          <ListBox.Item id="Male" textValue="male">
                            Male
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Female" textValue="female">
                            Female
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2 ">
                    <label className="text-sm font-medium">
                      Reason (optional)
                    </label>

                    <input
                    defaultValue={reason}
                      placeholder="Brief reason for visit"
                      name="reason"
                      type="text"
                      className="rounded-lg p-3 shadow-none bg-[#94A3B810] focus:outline-(--primaryColor)"
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <Button
                      slot="close"
                      className={"bg-white text-(--primaryColor)"}
                    >
                      Cancel
                    </Button>
                    <Button
                      slot={"close"}
                      type="submit"
                      className={
                        "bg-(--primaryColor) hover:bg-blue-800 text-white font-semibold rounded-xl text-[15px] shadow-sm h-10"
                      }
                    >
                      Update
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

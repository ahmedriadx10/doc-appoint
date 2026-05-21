"use client";

import { authClient } from "@/lib/auth-client";

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

export function BookingModal({ doctorData, token }) {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const {
    _id,
    name: doctorName,
    specialty,
    image,
    experience,
    availability,
    description,
    hospital,
    location,
    fee,
    rating,
    patients,
    education,
  } = doctorData;

  const user = session?.user;
  const router = useRouter();

  const [formattedTime, setFormattedTime] = useState("");

  const handleTimeChange = (e) => {
    const timeValue = e.target.value;

    if (timeValue) {
      const [hourStr, minuteStr] = timeValue.split(":");
      let hour = parseInt(hourStr, 10);
      const minute = minuteStr;

      const ampm = hour >= 12 ? "PM" : "AM";

      hour = hour % 12;
      hour = hour ? hour : 12;

      const finalTimeStr = `${hour}:${minute} ${ampm}`;

      setFormattedTime(finalTimeStr);
    }
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const exactFormData = Object.fromEntries(formData.entries());

    if (
      exactFormData?.appointmentDate === "" ||
      exactFormData?.appointmentTime === "" ||
      !formattedTime ||
      !exactFormData?.patientName ||
      !exactFormData?.phone || exactFormData?.gender === ""
    ) {
      toast.error("Please fill all the required fields");
      return;
    }

    const bookingData = {
      userId: user?.id,
      userEmail: user?.email,
      doctorId: _id,
      doctorImage: image,
      doctorName,
      fee,
      specialty,
      patientName: exactFormData?.patientName.trim(),
      gender: exactFormData?.gender || "Male",
      phone: exactFormData?.phone
        ? exactFormData.phone.trim()
        : "Not mentioned",
      appointmentDate: new Date(exactFormData?.appointmentDate),
      appointmentTime: formattedTime,
      reason: exactFormData?.reason ? exactFormData.reason : "Not mentioned",
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(bookingData),
    });

    const result = await res.json();

    if (result?.insertedId) {
      toast.success("Appointment booked successfully!");
    }
  };

  return (
    <Modal className="">
      <Button className="max-w-max bg-(--primaryColor) hover:bg-blue-800 text-white font-semibold rounded-xl text-[15px] shadow-sm h-12">
        <FaRegCalendarAlt className="w-4 h-4" /> Book Appointment
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
                  onSubmit={handleSubmitBooking}
                >
                  <TextField
                    className="w-full"
                    name="email"
                    defaultValue={user?.email}
                    type="email"
                    variant="secondary"
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
                  >
                    <Label>Patient Name</Label>
                    <Input
                      placeholder="Enter patient name"
                      className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
                    />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    minLength={10}
                    variant="secondary"
                  >
                    <Label>Phone</Label>
                    <Input
                      placeholder="01XXXXXXXXX"
                      className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
                    />
                  </TextField>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm font-medium">Select Date</label>

                    <input
                      type="date"
                      name="appointmentDate"
                      className=" rounded-lg p-3 shadow-none bg-[#94A3B810] focus:outline-(--primaryColor)"
                    />
                  </div>

                  <div className="flex gap-5 flex-col w-full sm:flex-row justify-between items-center">
                    <div className="flex flex-col gap-2 w-full">
                      <label className="text-sm font-medium">Time</label>

                      <input
                        name="appointmentTime"
                        type="time"
                        onChange={handleTimeChange}
                        className="rounded-lg p-3 shadow-none bg-[#94A3B810] focus:outline-(--primaryColor)"
                      />
                    </div>

                    <Select
                      className="w-full"
                      placeholder="Not Selected"
                      name="gender"
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
                      Book Now
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

import React from "react";
import { LuUserSearch } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const HowWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <LuUserSearch className="text-(--primaryColor) text-2xl" />,
      title: "Find a Doctor",
      description:
        "Search and discover certified specialists based on your health needs or symptoms.",
    },
    {
      id: 2,
      icon: <FaRegCalendarAlt className="text-(--primaryColor) text-2xl" />,
      title: "Choose a Slot",
      description:
        "Select your preferred date and available time slot that perfectly fits your schedule.",
    },
    {
      id: 3,
      icon: <FaRegCircleCheck className="text-(--primaryColor) text-2xl" />,
      title: "Book Appointment",
      description:
        "Confirm your details and securely book your doctor's appointment instantly.",
    },
  ];

  return (
    <section className="bg-[#f8faff] py-20  ">
      <div className="max-w-6xl mx-auto text-center">
       <div className="text-center">
          <h2 className="text-2xl px-6 sm:text-3xl md:text-[32px] font-bold text-(--titleColor) mb-12 sm:mb-16">
          3 Simple Steps to Meet Your Doctor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center max-w-sm mx-auto md:max-w-none text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#e8f1ff] flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-105">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-(--on-primary-container) mb-3">
                {step.title}
              </h3>

              <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed px-4 md:px-2 lg:px-6">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorks;

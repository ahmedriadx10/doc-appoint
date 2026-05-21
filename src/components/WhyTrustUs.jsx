import { IoFlashOutline } from "react-icons/io5";
import { MdVerifiedUser, MdSupportAgent, MdFlashOn, MdCalendarMonth } from "react-icons/md";

const WhyTrustUs = () => {
  const features = [
    {
      id: 1,
      icon: MdVerifiedUser,
      title: "Verified Doctors",
      description:
        "Every specialist is strictly vetted for credentials and experience. We ensure that only the most qualified healthcare professionals are part of our elite network.",
      bgColor: "bg-white",
      borderColor: "border-l-4 border-[--primaryColor]",
      textColor: "text-[--titleColor]",
    },
    {
      id: 2,
      icon: MdSupportAgent,
      title: "24/7 Support",
      description:
        "Our dedicated team is always here to assist with your bookings and healthcare inquiries.",
      bgColor: "bg-[--primaryColor]",
      textColor: "text-white",
      isHighlight: true,
    },
    {
      id: 3,
      icon: MdFlashOn,
      title: "Instant Confirmation",
      description:
        "No waiting. Get your booking confirmed in seconds via SMS & Email alerts.",
      bgColor: "bg-white",
      borderColor: "border-l-4 border-[--primaryColor]",
      textColor: "text-[--titleColor]",
    },
    {
      id: 4,
      icon: MdCalendarMonth,
      title: "Flexible Scheduling",
      description:
        "Easily reschedule or cancel appointments with one click. We understand life happens, and we make it simple to adapt your care plan.",
      bgColor: "bg-white",
      borderColor: "border-l-4 border-[--primaryColor]",
      textColor: "text-[--titleColor]",
    },
  ];

  return (
    <section className="py-20 bg-(--primary-container)">
      <div className="max-w-7xl mx-auto w-[90%]">
        <div className="text-center  space-y-3 px-3">
          <h2 className="text-2xl px-6 sm:text-3xl md:text-[32px] font-bold text-(--titleColor)">
           Why Patients Trust Us
          </h2>
          <p className="text-(--textColor)">Building a legacy of care and clinical precision.</p>
        </div>

        {/* Responsive Grid */}
        <div className="my-15  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:grid-rows-[270px_270px] xl:grid-rows-[220px_220px] ">
          {/* Card 1: Verified Doctors - lg:8col, md:full, sm:full */}
          <div className="col-span-full md:col-span-full lg:col-span-8">
            <div
              className={`h-full border border-[#e2e8f0] bg-white border-l-4 border-l-(--primaryColor)  rounded-lg p-8 md:p-12 `}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="shrink-0 bg-blue-50 p-3 rounded-full max-w-max">
                  <MdVerifiedUser className="text-4xl text-(--primaryColor)" />
                </div>
                <div>
                  <h3
                    className={`text-2xl  font-semibold text-(--titleColor) mb-2.5`}
                  >
                    {features[0].title}
                  </h3>
                  <p className="text-(--textColor) text-base leading-relaxed">
                    {features[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 24/7 Support - lg:4col, md:1col, sm:full */}
          <div className="col-span-full md:col-span-1 lg:col-span-4 ">
            <div
              className={`bg-(--primaryColor) h-full rounded-lg p-6 `}
            >
              <div className="flex flex-col gap-4">
                <div className="shrink-0 ">
                  <MdSupportAgent
                    className={`text-4xl text-white`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-2xl  font-semibold text-white mb-2.5`}
                  >
                    {features[1].title}
                  </h3>
                  <p
                    className={`text-white text-sm leading-relaxed opacity-90`}
                  >
                    {features[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Instant Confirmation - lg:4col, md:1col, sm:full */}
          <div className="col-span-full  md:col-span-1 lg:col-span-4">
            <div
              className={` rounded-lg p-6 gap-6 flex flex-col justify-center border bg-white border-[#e2e8f0] h-full  `}
            >
   <div className="shrink-0  bg-blue-50 p-3 rounded-full max-w-max ">
              
                  <IoFlashOutline className="text-4xl text-(--primaryColor)" />
                </div>
              
              <div className="">
             
                <div>
                  <h3
                    className={`text-2xl  font-semibold text-(--titleColor) mb-2.5`}
                  >
                    {features[2].title}
                  </h3>
                  <p className="text-(--textColor) text-base leading-relaxed">
                    {features[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Flexible Scheduling - lg:8col, md:full, sm:full */}
          <div className="col-span-full md:col-span-full lg:col-span-8">
            <div
              className={`h-full flex flex-col justify-center border-r-4 border-r-(--primaryColor) rounded-lg p-8 md:p-12 border border-[#e2e8f0] bg-white`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="shrink-0  bg-blue-50 p-3 rounded-full max-w-max">
                  <MdCalendarMonth className="text-4xl text-(--primaryColor)" />
                </div>
                <div>
                  <h3
                    className={`text-2xl  font-semibold text-(--titleColor) mb-2.5`}
                  >
                    {features[3].title}
                  </h3>
                  <p className="text-(--textColor) text-base leading-relaxed">
                    {features[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;

'use client'
import { FaArrowRight, FaCalendarCheck, FaSearch } from "react-icons/fa";
import BannerSliderPiece from "./ui/BannerSliderPiece";
import { GrTechnology } from "react-icons/gr";
import { Autoplay,  Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const sliderData = [
    {
      tooltip: "Trusted by 50,000+ Patients",
      heading: "Modern Healthcare Scheduling for the",
      subHeading: "Next Generation",
      description:
        "Connect with top-rated specialists instantly. Manage your health with clinical precision and patient-centric simplicity through our unified booking platform.",
      image: "https://images.pexels.com/photos/32160037/pexels-photo-32160037.jpeg",
      btnOne: "Book Appointment",
      btnOneIcon:<FaCalendarCheck />,
      btnTwo: "Explore Specialists",
      btnTwoIcon: <FaArrowRight />
    },
    {
      tooltip: "Innovation in Healthcare",
      heading: "Advanced Medical",
      subHeading: "Technology",
      description:
        "Leverage our AI-powered diagonistics and secure patient portals. We integrate the latest medical advancements to provide clinical precision at your fingertips.",
      image: "https://images.pexels.com/photos/36101262/pexels-photo-36101262.jpeg",
      btnOne: "View Tech Features",
      btnOneIcon:<GrTechnology />,
      btnTwo: "Explore Specialists",
      btnTwoIcon: <FaArrowRight />
    },
    {
      tooltip: "Global Network of Experts",
      heading: "Expert Specialists",
      subHeading: "Consultations",
      description:
        "Access our curated directory of board-certified specialists across 40+ medical departments. Quality healthcare i sjust a few clicks away.",
      image: "https://images.pexels.com/photos/9054999/pexels-photo-9054999.jpeg",
      btnOne: "Find a Specialist",
      btnOneIcon:<FaSearch/>,
      btnTwo: "Explore Specialists",
      btnTwoIcon:<FaArrowRight />
    },
  ];

  return (
    <section className="py-20  max-w-7xl mx-auto w-[90%]">
      {/* <BannerSliderPiece /> */}


       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination ]}
        className="mySwiper"
      >
      {sliderData?.map((slide,inx)=><SwiperSlide key={inx}><BannerSliderPiece  slide={slide}/></SwiperSlide>)}


      </Swiper>
    </section>
  );
};

export default Banner;

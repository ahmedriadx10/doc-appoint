import Image from 'next/image';

const BannerSliderPiece = ({slide}) => {

const {tooltip, heading, subHeading, description, btnOne, btnOneIcon, btnTwo, btnTwoIcon, image}=slide

  return (
    <section className=" min-h-150 w-full  flex items-center justify-center px-6 py-12 md:px-16 overflow-hidden">
      
   

      {/* মেইন ফ্লেক্স কন্টেইনার */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 ">
        
        {/* বাম পাশের কন্টেন্ট এরিয়া (Flex Item 1) */}
        <div className="w-full lg:w-[58%] flex flex-col justify-center space-y-6">
          
          {/* ব্যাজ */}
          <div>
            <span className="inline-block bg-[#DCE4FF] text-[#3B66F5] text-xs font-semibold px-4 py-1.5 rounded-full">
              {tooltip}
            </span>
          </div>

          {/* মেইন হেডিং */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight tracking-tight">
            {heading} <span className="text-[#0062D1] ">{subHeading}</span>
          </h1>

          {/* ডেসক্রিপশন */}
          <p className="text-[#4B5563] text-base md:text-lg max-w-xl leading-relaxed">
            {description}
          </p>

          {/* কল-টু-অ্যাকশন বাটন্স */}
          <div className="flex flex-wrap gap-4 pt-2">
            {/* প্রাইমারি বাতন */}
            <button className="flex items-center gap-2 bg-[#0062D1] hover:bg-[#0051B0] text-white font-medium px-6 py-3.5 rounded-lg transition-all shadow-md active:scale-95">
             <span>{btnOne}</span>
            {btnOneIcon}
              
            </button>

            {/* সেকেন্ডারি বাটন */}
            <button className="flex items-center gap-2 bg-[#EBF3FC] hover:bg-[#D9E9FA] text-[#0062D1] border border-[#A3C7F7] font-medium px-6 py-3.5 rounded-lg transition-all active:scale-95">
              {btnTwoIcon}
              <span>{btnTwo}</span>
            </button>
          </div>
        </div>

        {/* ডান পাশের ইমেজ কন্টেইনার (Flex Item 2) */}
        <div className="custom-bounce w-full h-100 lg:h-auto lg:w-[38%] flex justify-center lg:justify-end rotate-3 ">
          <div className="relative  w-full lg:max-w-100 aspect-4/5">
            <div className="relative w-full h-full rounded-xl overflow-hidden   shadow-xl bg-slate-100">
              <Image 
                src={image} 
                alt={heading} 
                fill
                priority
                sizes="(max-w-768px) 100vw, 400px"
                className=" object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BannerSliderPiece;
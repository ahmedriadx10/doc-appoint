import Banner from "@/components/Banner";
import HowWorks from "@/components/HowWorks";
import TopRateDoctors from "@/components/TopRateDoctors";
import WhyTrustUs from "@/components/WhyTrustUs";
import { Suspense } from "react";
import LoadingSpiner from "./loading";


const HomePage = () => {
  return (
    <section>

<Banner/> 
<HowWorks/>
<Suspense fallback={<LoadingSpiner/>}>
  <TopRateDoctors/>
</Suspense>
<WhyTrustUs/>

    </section>
  );
};

export default HomePage;
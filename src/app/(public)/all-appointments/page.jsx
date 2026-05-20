import AppointmentDoctorCard from "@/components/ui/AppointmentDoctorCard";
import { allAppointmentsGet } from "@/lib/data";

const AllAppointMentsPage =async () => {
 
  const appointmentsData=await allAppointmentsGet()

  console.log(appointmentsData)
 
  return (
    <section className="py-20 max-w-7xl mx-auto w-[90%]">

{/* all appointments page info +search area */}

<div className="text-center max-w-3xl mx-auto">

<div className="space-y-6 max-w-2xl mx-auto">
  <h2 className="text-3xl lg:text-5xl font-bold text-(--titleColor)">Find Your Specialist</h2>

<p className="text-(--textColor) lg:text-lg">Manage your health journey with ease. Book and review your appointments
with the world's leading healthcare professionals.</p>
</div>

{/* search layout will be added here */}

</div>


{/* all appointments card section */}

<section className="mt-15">

<div className="">
  <h3 className="text-2xl px-6 sm:text-3xl md:text-[32px] font-bold text-(--titleColor)">
          Available Specialists
          </h3>
          <p className="text-(--textColor)">Showing top-rated cardiologists for your needs</p>
</div>



{/* all appointmens card */}

<div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[360px_360px_360px] justify-center gap-8">

{appointmentsData?.map((doctor)=><AppointmentDoctorCard key={doctor?._id} doctor={doctor}/>)}

</div>

</section>
    </section>
  );
};

export default AllAppointMentsPage;
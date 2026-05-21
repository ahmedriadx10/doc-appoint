export const metadata = {
  title: "All Appointments | DocAppoint",
  description:
    "Browse and manage all your doctor appointments with DocAppoint. Find specialists and book your next visit easily.",
};

import AppointmentDoctorCard from "@/components/ui/AppointmentDoctorCard";
import EmpthySearch from "@/components/ui/EmptySearch";
import SearchCourse from "@/components/ui/SearchCourse";
import { allAppointmentsGet } from "@/lib/data";

const AllAppointMentsPage = async ({searchParams}) => {

const appointmentSearch=await searchParams



  const appointmentsData = await allAppointmentsGet(appointmentSearch?.search);



  return (
    <section className="py-20 max-w-7xl mx-auto w-[90%]">
      {/* all appointments page info +search area */}

      <div className="text-center max-w-3xl mx-auto">
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-(--titleColor)">
            Find Your Specialist
          </h2>

          <p className="text-(--textColor) lg:text-lg">
            Manage your health journey with ease. Book and review your
            appointments with the world's leading healthcare professionals.
          </p>
<div>

  <SearchCourse/>
</div>

        </div>



        {/* search layout will be added here */}
      </div>

      {/* all appointments card section */}

      <section className="mt-20 ">
        {/* all appointmens card */}

        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[360px_360px_360px] justify-center gap-8">
          {appointmentsData.length===0?<EmpthySearch searchTerm={appointmentSearch?.search}/>:appointmentsData?.map((doctor) => (
            <AppointmentDoctorCard key={doctor?._id} doctor={doctor} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default AllAppointMentsPage;

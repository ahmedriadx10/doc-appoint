import { allAppointmentsGet } from "@/lib/data";

const AllAppointMentsPage =async () => {
 
  const appointmentsData=await allAppointmentsGet()

  console.log(appointmentsData)
 
  return (
    <div>
      all appointments page

    </div>
  );
};

export default AllAppointMentsPage;
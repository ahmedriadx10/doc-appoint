import { specificDoctorAppointmentsGet } from "@/lib/data";

const DoctorDetailsPage =async ({params}) => {
 
 const {id}=await params
const doctorAppointmentsData=await specificDoctorAppointmentsGet(id)
console.log(doctorAppointmentsData)


 
  return (
    <div>
      <h2>Doctor Details Page</h2>
    </div>
  );
};

export default DoctorDetailsPage;
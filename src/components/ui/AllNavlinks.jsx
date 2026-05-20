import MyNavlink from "./MyNavlink";




const AllNavlinks = () => {
  return (
    <>
     <li><MyNavlink href={'/'}>Home</MyNavlink></li> 
     <li><MyNavlink href={'/all-appointments'}>All Appointments</MyNavlink></li> 
     <li><MyNavlink href={'/dashboard'}>Dashboard</MyNavlink></li> 
    </>
  );
};

export default AllNavlinks;
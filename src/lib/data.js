export const allAppointmentsGet=async ()=>{


  const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments`)

const data=await res.json()

return data

}

export const specificDoctorAppointmentsGet=async (doctorId)=>{

const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/${doctorId}`)
const data=await res.json()

return data
}



export const topRatedDoctorsGet=async ()=>{

  const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top-rated-doctors`)



  return res.json()

}



//bookings data get 


export const bookingsDataGet=async (userId)=>{


  const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${userId}`)
  const result=await res.json()

  return result || []
  

  

}


export const allAppointmentsGet = async (search) => {
  if (!search) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments`);

    const data = await res.json();

    return data;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/appointments?search=${search}`,
  );

  const data = await res.json();

  return data;
};

export const specificDoctorAppointmentsGet = async (doctorId, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/appointments/${doctorId}`,
    {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    },
  );
  const data = await res.json();

  return data;
};

export const topRatedDoctorsGet = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/top-rated-doctors`,
  );

  return res.json();
};

//bookings data get

export const bookingsDataGet = async (userId,token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bookings/${userId}`,{

            headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },

    }
  );
  const result = await res.json();

  return result || [];
};

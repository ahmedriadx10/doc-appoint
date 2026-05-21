export const metadata = {
  title: "Dashboard | DocAppoint",
  description:
    "View and manage your appointments, profile, and health information on your DocAppoint dashboard.",
};

import DashBoardControl from "@/components/DashBoardControl";
import { auth } from "@/lib/auth";

import { bookingsDataGet } from "@/lib/data";
import { headers } from "next/headers";

const DashBoard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

const jwtToken=await auth.api.getToken({
  headers:await headers()
})



  const bookingsData = await bookingsDataGet(session?.user?.id,jwtToken?.token);

  return (
    <>
      <DashBoardControl bookingsData={bookingsData}  />
    </>
  );
};

export default DashBoard;

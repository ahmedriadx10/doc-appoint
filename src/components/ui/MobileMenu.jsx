"use client";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

import { authClient } from "@/lib/auth-client";
// import {  toast } from "@heroui/react";

import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";
import CutstomNavlink from "./CustomNavlink";

export const MobileMenu = () => {
  const [open, isOpen] = useState(false);
  const route = useRouter();
  const {
    data,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const manageMenuBar = () => {
    isOpen(!open);
  };

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          route.refresh("/");
          toast.success('Sign out successfull')
        },
      },
    });
  };

  return (
    <div>
      <FaBarsStaggered
        className="text-2xl cursor-pointer"
        onClick={manageMenuBar}
      />

      {/* controled menu items */}
      <div
        className={`absolute z-10 bg-white ${open ? "top-18 right-5 visible" : "right-350 invisible"} border border-(--outline) shadow rounded-lg p-2.5 w-40`}
      >
        <ul className="space-y-1">
          <li className="border-b pb-1 border-(--outline)">
            <CutstomNavlink href={"/"}>Home</CutstomNavlink>
          </li>
          <li className="border-b pb-1 border-(--outline)">
            <CutstomNavlink href={"/all-appointments"}>All Appointments</CutstomNavlink>
          </li>
          <li className="border-b pb-1 border-(--outline)">
            <CutstomNavlink href={"/dashboard"}>Dashboard</CutstomNavlink>
          </li>
          {data?.user ? (
            <li>
              <button
                className="inline-flex gap-1 font-semibold items-center cursor-pointer"
                onClick={handleLogOut}
              >
                <MdLogout /> Log out
              </button>
            </li>
          ) : (
            <>
              <li>
                <CutstomNavlink href={"/login"}>Log in</CutstomNavlink>
              </li>
              <li>
                <CutstomNavlink href={"/register"}>Sign up</CutstomNavlink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

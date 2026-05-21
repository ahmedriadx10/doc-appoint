"use client";
import { Button, toast } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";

const SignOutBtn = ({ children }) => {
  const route = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          route.refresh("/");
          toast.success("Sign out successfull");
        },
      },
    });
  };

  return (
    <Button
      onPress={handleSignOut}
      className="w-full bg-[#0052A3] text-white font-semibold text-sm h-10 rounded-xl flex items-center justify-center gap-2 hover:bg-[#004182] transition-colors shadow-md"
    >
      <MdLogout /> {children}
    </Button>
  );
};

export default SignOutBtn;

"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function ProfileUpdateModal({ user, setToogle }) {
  const router = useRouter();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const exactFormData = Object.fromEntries(formData.entries());

    console.log(exactFormData);

    const { data, error } = await authClient.updateUser({
      ...exactFormData,
    });

    if (data) {
      toast.success("Profile updated successfully!");
      router.refresh("/dashboard");

      return;
    }

    if (error) {
      toast.error("failed to update profile");
      return;
    }
  };

  return (
    <Modal>
      <Button className="w-full bg-(--primaryColor) hover:bg-blue-800 text-white font-semibold rounded-xl text-[15px] shadow-sm h-12">
        Update Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <div className="relative mx-auto w-32 h-32  rounded-full border-4 border-slate-50 shadow-sm overflow-visible">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={
                      user?.image ||
                      "https://cdn-icons-png.flaticon.com/512/8188/8188349.png"
                    } // পরবর্তীতে তোমার ডাইনামিক ইমেজ ইউআরএল বসাবে
                    alt={user?.name || "User"}
                    fill
                    priority
                    sizes="(max-width: 768px) 128px, 128px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Modal.Header>
            <Modal.Body className="md:px-5 py-2.5">
              <Surface className=" bg-white">
                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleUpdateProfile}
                >
                  <TextField
                    className="w-full"
                    name="name"
                    defaultValue={user?.name}
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input
                      placeholder="Enter your name"
                      className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
                    />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="image"
                    type="url"
                    defaultValue={user?.image}
                    variant="secondary"
                  >
                    <Label>Email</Label>
                    <Input
                      placeholder="Image URL"
                      className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
                    />
                  </TextField>

                  <div className="flex justify-between items-center">
                    <Button
                      slot="close"
                      className={"bg-white text-(--primaryColor)"}
                    >
                      Cancel
                    </Button>
                    <Button
                      slot={"close"}
                      type="submit"
                      className={
                        "bg-(--primaryColor) hover:bg-blue-800 text-white font-semibold rounded-xl text-[15px] shadow-sm h-10"
                      }
                    >
                      Update
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

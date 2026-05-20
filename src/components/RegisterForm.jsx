"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {


    const [eye, setEye] = useState(false);
 const router=useRouter()
  const eyeClick = () => {
    setEye(!eye);
  };

const handleRegister=async(e)=>{

e.preventDefault()

const formData=new FormData (e.currentTarget)
const exactFormData=Object.fromEntries(formData.entries())

console.log(exactFormData)


const {data,error}=await authClient.signUp.email(
  
  {...exactFormData},{
onSuccess:()=>{
router.push('/')
}


  })


  if(error){

    alert(error.message)

  }

}




  return (
    <section className="max-w-lg border mx-auto p-5 md:p-10 rounded-2xl mt-10">
      <Form className="flex  flex-col gap-4" onSubmit={handleRegister}>
        <TextField isRequired name="name" type="text">
          <Label className="font-semibold">Full Name</Label>
          <Input
            placeholder="Enter your full name"
            className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
          />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label className="font-semibold">Email Address</Label>
          <Input
            placeholder="user@name.com"
            className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
          />
          <FieldError />
        </TextField>
        <TextField name="imageURL" type="url">
          <Label className="font-semibold">Photo URL</Label>
          <Input
            placeholder="https://example.com/avatar.jpg"
            className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
          />
          <FieldError />
        </TextField>

        <TextField
        className={'relative'}
          isRequired
          minLength={8}
          name="password"
      type={`${eye ? "text" : "password"}`}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label className="font-semibold">Password</Label>
          <Input
            placeholder="Enter your password"
            className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
          />
              <div className="absolute top-9 right-3 text-lg" onClick={eyeClick}>
              {eye ? <FaEye /> : <FaEyeSlash />}
            </div>
          <FieldError />
        </TextField>

        <div className="">
             <Button
       type="submit"
          
          className="mt-5 w-full bg-[#0052A3] text-white font-semibold text-sm h-10 rounded-xl flex items-center justify-center gap-2 hover:bg-[#004182] transition-colors shadow-md"
       
        >
    Sign up
        </Button>
        </div>
      </Form>

      <div className="mt-5 space-y-5">
        <div className="flex justify-between text-xs items-center gap-2 text-[#94A3B8] ">
          <p className="border  w-[55%] md:w-full   "></p>

          <p className="w-full  text-center tracking-widest text-nowrap">OR REGISTER WITH</p>
          <p className=" border w-[55%] md:w-full "></p>
 
        </div>

        <Button className="w-full h-10 rounded-xl border border-(--outline) bg-white">
          <FcGoogle />
          <span className="text-(--on-surface) font-semibold">Sign up with Google</span>
        </Button>

        <div className="flex gap-1 justify-center">
          <p className="text-[#494454]">Already have an account?</p>{" "}
          <Link href={"/login"} className="text-(--primaryColor) font-semibold">
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;

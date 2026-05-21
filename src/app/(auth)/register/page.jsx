export const metadata = {
  title: "Register | DocAppoint",
  description:
    "Create a new DocAppoint account to start booking appointments and managing your health journey.",
};

import RegisterForm from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="max-w-6xl py-10 mx-auto w-[90%]">
      {/* register page intor */}
      <div className="text-center max-w-lg mx-auto space-y-3">
        <h3 className="text-[40px] text-(--primaryColor) font-bold">
          Register
        </h3>

        <p className="text-lg text-(--textColor)">
          Precision in care, excellence in booking. Join DocAppoint to manage
          your health journey today.
        </p>
      </div>

      <RegisterForm />
    </section>
  );
}

export const metadata = {
  title: "404 Not Found | DocAppoint",
  description:
    "The page you are looking for does not exist. Return to DocAppoint home to continue your health journey.",
};

import Link from "next/link";
import { FaBriefcaseMedical, FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] px-4 text-center">
      <div className="max-w-md w-full flex flex-col items-center space-y-6">
        <div className="w-24 h-24 bg-[#e0f2fe] rounded-full flex items-center justify-center text-(--primaryColor) shadow-sm">
          <FaBriefcaseMedical className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-7xl font-extrabold text-(--primaryColor) tracking-tight">
            404
          </h1>
          <h2 className="text-3xl font-bold text-slate-800">Page Not Found</h2>
          <p className="text-slate-500 font-medium pt-2 max-w-sm mx-auto leading-relaxed">
            The page you are looking for might have been moved or doesn't exist.
            Let's get you back on track with your health journey.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-(--primaryColor) hover:bg-blue-700 text-white font-semibold px-6 h-12 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            <FaHome className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

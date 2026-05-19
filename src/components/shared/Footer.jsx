import React from 'react';

import { FiGlobe, FiMail } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaBriefcaseMedical, FaFacebookF, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-[#232B38] text-gray-300 py-12 px-6 md:px-16 ">
      <div className="max-w-7xl mx-auto">
        
     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
 
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 text-white  text-2xl font-bold">
        
              <div className=" w-8 h-8">
              <FaBriefcaseMedical className='text-(--primaryColor)' />
              </div>
              <span>DocAppoint</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Precision in care, excellence in booking. Empowering health journeys through modern technology.
            </p>
          </div>


          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Doctor Search</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Consult</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Plans</a></li>
            </ul>
          </div>

  
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
            </ul>
          </div>

   
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* কপিরাইট টেক্সট */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} DocAppoint. Precision in care, excellence in booking.
          </p>

         
          <div className="flex items-center space-x-5 text-gray-400 text-xl">
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <FaFacebookF className="text-[18px]" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter X">
              <RiTwitterXFill />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Website">
              <FiGlobe />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Email">
              <FiMail />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
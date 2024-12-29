import React from 'react';
import Logo from '../assets/img/logo.png';
import { FaInstagram, FaFacebook, FaMailBulk, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <img src={Logo} alt="Logo" className="mb-4" />
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Our experienced instructors will guide you through structured lessons, helping you to 
              develop a solid foundation while nurturing your creativity and musical expression.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/people/KUBER-Yoga-Physiotherapy-Classes/100064034465706/" className="text-pink-500 text-xl">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/kuberyoga/" className="text-pink-500 text-xl">
                <FaInstagram />
              </a>
              <a href="mailto:info@kuberyoga.com" className="text-pink-500 text-xl">
                <FaMailBulk />
              </a>
            </div>
            <div className="flex flex-col items-start gap-2 mt-6 text-pink-500 text-xl">
              <div className="flex items-center gap-2">
                <FaPhone style={{ transform: 'scaleX(-1)' }} />
                <span className="text-gray-700 text-sm">+91 98250 04228</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span className="text-gray-700 text-sm">Triveni Complex, Sb 6, Vadodara 390011</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex flex-col lg:flex-row gap-10 justify-end mt-10"> {/* Added mt-10 to push down */}
            <div>
              <h5 className="font-bold text-pink-500 mb-2">Services</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Yoga Classes</li>
                <li>Physiotherapy</li>
                <li>Diet & Weight Loss Plan</li>
                <li>Zumba & Aerobics</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-pink-500 mb-2">Support</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>FAQs</li>
                <li>Contact</li>
                <li>Chat</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and Developed By Section */}
        <div className="mt-10 text-center text-sm text-gray-700">
          <p>&copy; 2024 Kuber Yoga. All Rights Reserved.</p>
          <p>Developed by Prachi Sanyal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

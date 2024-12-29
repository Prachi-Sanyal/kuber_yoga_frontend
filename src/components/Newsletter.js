import React from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Newsletter = () => {
  return (
    <section className="section-sm lg:section-lg bg-green min-h-[120px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-x-4">
        {/* Newsletter Section */}
        <div className="lg:w-2/5 w-full bg-green-500 p-8 border-[8px] border-green-300 rounded-lg text-center mb-4 lg:mb-0">
          <h4 className="text-[26px] text-white font-bold mb-[14px]">Subscribe Our Newsletter</h4>
          <p className="text-green-200 mb-12">Subscribe to our newsletter for further updates about us</p>

          <form className="max-w-[752px] mx-auto relative flex flex-col lg:flex-row gap-y-6 lg:p-0 gap-x-4">
            <div className="w-full relative flex">
              <div className="absolute left-2 h-full w-12 flex justify-center items-center text-2xl text-green-300">
                <MdEmail />
              </div>
              <input
                className="form-control w-full border border-green-300 bg-transparent outline-none placeholder:text-green-200 text-white pl-[60px]"
                placeholder="Enter your email address"
                type="email"
              />
            </div>

            <button className="btn btn-lg btn-orange text-white w-full lg:max-w-[180px]">Get Started</button>
          </form>
        </div>

        {/* Location Section */}
        <div className="lg:w-2/5 w-full bg-green-500 p-8 border-[8px] border-green-300 rounded-lg text-center">
          <h4 className="text-[26px] text-white font-bold mb-[14px]">Our Location</h4>
          <div className="flex justify-center items-center text-2xl text-green-300 mb-4">
            <MdLocationOn />
            <p className="ml-2 text-green-200">Manjalpur, Vadodara, India</p>
          </div>

          {/* Insert Google Map (you can use iframe or a React component like react-google-maps) */}
          <div className="h-[200px] bg-gray-300 mb-4">
           

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.1036928923327!2d73.17984087444339!3d22.27406157970548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5e0591c32c7%3A0x9c7cafb1ad00341f!2sKuber%20Yoga%20Classes%20%7C%7C%20Best%20Yoga%20Class%20In%20Manjalpur%20%7C%20Physiotherapist%20Home%20Visit%20In%20Manjalpur!5e0!3m2!1sen!2sin!4v1735402084154!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

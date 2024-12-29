import React from 'react';

import { courses } from '../data';

const Courses = () => {
  return (
    <section className="section-sm lg:section-lg">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-32">
          <h2 className="h2 mb-3 lg:mb-[18px]">What We Offer?</h2>
          <p className="max-w-[480px] mx-auto">
            We focus on providing a holistic approach to fitness and well-being, designed to energize your body, refresh your mind, and inspire a healthier, more balanced lifestyle.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14">
          {courses.map((item, index) => {
            const { image, title, desc, link, delay } = item;
            return (
              <div
                className="w-full bg-pink-100 shadow-primary max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] flex flex-col rounded-[14px] mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                key={index}
              >
                {/* Ensure all images have the same size */}
                <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6 flex justify-center">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-[200px] object-cover rounded-[8px]"
                  />
                </div>

                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">{title}</h4>
                  <p>{desc}</p>
                </div>

                <div className="flex items-center justify-between mt-8 mb-2 lg:mb-0">
                  <a href="#">
                    <button
                      className="btn btn-md lg:px-[20px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition"
                    >
                      Get started
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;

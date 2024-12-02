import React from 'react';
import _layout from '../components/_layout';
import Image02 from '../assets/Image02.jpg';
import Image05 from '../assets/Image03.avif';
import { ReactTyped } from 'react-typed';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const pageHandler = () => {
    navigate('/Product');
  };

  return (
    <_layout>
      {/* Intro Section */}
      <section>
        <div
          className="relative w-full h-96 md:h-[70vh] lg:h-[850px] bg-cover bg-center rounded-t-xl"
          style={{ backgroundImage: `url(${Image02})` }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-t-xl" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <div className="flex flex-row items-center justify-center space-x-4">
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white font-poppins">
                Nike Alphafly Next%
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-extrabold text-[#e0ff30] font-poppins">
                2
              </h1>
            </div>

            <div className="flex flex-row items-center justify-center mt-2 lg:mt-8 text-2xl lg:text-7xl space-x-2">
              <p className="text-white font-poppins font-bold">Unlock</p>
              <ReactTyped
                className="text-[#e0ff30] font-poppins font-bold"
                strings={['Speed', 'Performance', 'Longevity']}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section>
        <div className=" bg-white flex flex-col items-center justify-center text-center font-poppins m-4 p-6">
          <p className="font-medium text-gray-500">Performance at each step</p>
          <h1 className="font-extrabold text-4xl md:text-5xl my-2">NEXT RUNNERS</h1>
          <p className="font-medium text-gray-600 mb-4">
            Run long distances comfortably, competitively, and confidently.
          </p>
          <button
            onClick={pageHandler}
            className="bg-[#e0ff30] hover:bg-[#a4bb21] transition-all duration-300 text-white font-bold lg:w-96 w-full py-2 rounded-full shadow-md hover:shadow-lg"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Image Section */}
      <section className="mt-2">
        <div className="relative">
          <img
            src={Image05}
            alt="Performance Showcase"
            className="w-full h-auto rounded-b-xl object-cover"
          />
        </div>
      </section>
    </_layout>
  );
};

export default Home;

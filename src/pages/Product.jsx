import React, { useState } from "react";
import _layout from "../components/_layout";

import shoes01 from "../assets/shoe01.png";
import shoes02 from "../assets/shoe02.png";
import shoes03 from "../assets/shoe03.png";
import shoes04 from "../assets/shoe04.png";
import shoes05 from "../assets/shoe05.png";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: shoes01,
    img2: shoes02,
    img3: shoes03,
    img4: shoes04,
    img5: shoes05,
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);

  return (
    <_layout>
      <div className="flex flex-col lg:flex-row gap-16 lg:items-center bg-gray-900 text-white p-8 rounded-lg">
        {/* Image Section */}
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImg}
            alt="Active product"
            className="w-full h-full aspect-square object-cover rounded-xl"
          />
          <div className="flex flex-row justify-between h-24 gap-4">
            {Object.values(images).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-24 h-24 rounded-md cursor-pointer transition-transform duration-300 hover:scale-110 ${
                  activeImg === img ? "ring-4 ring-[#e0ff30]" : ""
                }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className="text-[#e0ff30] font-semibold text-lg mb-2">
              Nike Runners
            </span>
            <h1 className="text-3xl md:text-4xl font-bold">
              Nike Alphafly Next% 2
            </h1>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Unleash your inner champion with the Nike Alphafly Next% 2, a
            pinnacle of innovation designed for peak performance. Engineered
            for speed, its lightweight build combines responsive ZoomX foam and
            cutting-edge Air pods for unparalleled energy return and propulsion.
          </p>
          <h6 className="text-2xl font-semibold">$125.00</h6>

          {/* Quantity and Add to Cart Section */}
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-700 py-2 px-5 rounded-lg text-[#e0ff30] text-3xl transition-all duration-300 hover:bg-[#e0ff30] hover:text-gray-900"
                onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span
                className="py-4 px-6 rounded-lg font-medium text-lg bg-gray-800 text-white"
                aria-live="polite"
              >
                {amount}
              </span>
              <button
                className="bg-gray-700 py-2 px-5 rounded-lg text-[#e0ff30] text-3xl transition-all duration-300 hover:bg-[#e0ff30] hover:text-gray-900"
                onClick={() => setAmount((prev) => prev + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              className="bg-[#e0ff30] text-gray-900 font-semibold py-3 px-16 rounded-xl transition-all duration-300 hover:bg-[#b6cf28] hover:shadow-lg"
              aria-label="Add to Cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </_layout>
  );
};

export default ProductPage;

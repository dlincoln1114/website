import React from 'react';
import _layout from '../components/_layout';
import logo from '../assets/logo.png';

const About = () => {
  return (
    <_layout>
      <section className="flex flex-wrap items-center justify-center p-4">
        <div className="w-full md:w-1/3 p-4">
          <img 
            src={logo} 
            alt="Nike logo" 
            className="w-full h-auto object-contain" 
          />
        </div>
      </section>
      <section>
        <article className="flex flex-col items-center text-center font-poppins p-6">
          <header className="mb-4">
            <h1 className="text-2xl font-semibold">About Us</h1>
          </header>
          <div className="text-sm leading-relaxed max-w-prose">
            <p>
              At Nike, we bring inspiration and innovation to every athlete* in the world. (*If you have a body, you’re an athlete.) Founded in 1964 and headquartered in Beaverton, Oregon, we’ve spent decades pushing the boundaries of sportswear and redefining performance.
            </p>
            <p className="mt-4">
              In 2024, we continue our journey of empowering individuals to move, play, and thrive. From groundbreaking footwear technology to sustainable design practices, we lead with purpose—merging style and function to create products that celebrate diversity, fuel self-expression, and help athletes of every level reach their potential.
            </p>
            <p className="mt-4">
              Our commitment extends beyond products. Through initiatives like Move to Zero, we strive for a more sustainable future, focusing on reducing waste and carbon emissions. We also champion equity in sports, investing in communities worldwide to break down barriers and build a more inclusive playing field.
            </p>
            <p className="mt-4">
              With every step, jump, and sprint, we’re reminded of what unites us: the power of sport to transform lives. Nike is more than a brand; it’s a movement. Together, we’re redefining the future of sport, one innovation at a time.
            </p>
          </div>
        </article>
      </section>
    </_layout>
  );
};

export default About;

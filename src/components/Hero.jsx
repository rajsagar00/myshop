import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          alt="Shopping"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          New Season Arrivals
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Discover our latest collection of premium fashion items. Quality meets style in every piece.
        </p>
        <div className="mt-10">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <ShoppingBag className="mr-2" size={20} />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
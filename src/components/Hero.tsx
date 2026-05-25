'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your <br /> 
            <span className="text-accent">Perfect Sanctuary</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-200 max-w-2xl mx-auto">
            Experience luxury living with our curated selection of the world&apos;s most prestigious properties.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto glass p-2 rounded-2xl md:rounded-full"
        >
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 w-full flex items-center px-6 gap-3">
              <MapPin className="text-accent" />
              <input 
                type="text" 
                placeholder="Where would you like to live?" 
                className="bg-transparent border-none focus:ring-0 w-full py-4 text-primary placeholder:text-slate-500"
              />
            </div>
            <div className="hidden md:block w-[1px] h-10 bg-slate-300" />
            <div className="flex-1 w-full px-6 text-left">
              <p className="text-xs text-slate-500 uppercase font-bold">Property Type</p>
              <select className="bg-transparent border-none focus:ring-0 w-full text-primary font-medium p-0">
                <option>All Types</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>House</option>
              </select>
            </div>
            <button className="w-full md:w-auto bg-accent text-white p-4 md:px-10 rounded-xl md:rounded-full flex items-center justify-center gap-2 hover:bg-accent/90 transition-all font-bold">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-slate-200"
        >
          <div>
            <p className="text-3xl font-bold">12k+</p>
            <p className="text-sm">Premium Properties</p>
          </div>
          <div>
            <p className="text-3xl font-bold">5k+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold">150+</p>
            <p className="text-sm">Awards Won</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

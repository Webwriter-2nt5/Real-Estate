'use client';

import React from 'react';
import { Home, ShieldCheck, BadgeDollarSign, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Buy Your Dream Home',
    description: 'We help you find the perfect match from thousands of premium listings across the country.',
    icon: Home,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Sell with Confidence',
    description: 'Our expert agents use data-driven strategies to sell your property at the best market price.',
    icon: BadgeDollarSign,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Secure Transactions',
    description: 'Your security is our priority. We handle all legalities and paperwork with complete transparency.',
    icon: ShieldCheck,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Property Management',
    description: 'Professional management services to help you maintain and grow your real estate portfolio.',
    icon: Key,
    color: 'bg-orange-50 text-orange-600',
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-widest text-sm mb-4"
          >
            How it works
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            We Provide The Best Services
          </motion.h2>
          <p className="text-slate-500 leading-relaxed text-lg">
            Our comprehensive range of real estate services is designed to cater to every aspect of your property journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-accent/50 transition-all hover:shadow-xl group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

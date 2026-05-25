'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Home, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
            <Home className="w-8 h-8 text-accent" />
            <span>LuxeEstate</span>
          </Link>
          <p className="text-slate-400 leading-relaxed">
            Leading the way in luxury real estate with unmatched expertise and a commitment to excellence.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-accent transition-colors"><Globe className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-accent transition-colors"><Mail className="w-5 h-5" /></Link>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="#properties" className="hover:text-accent transition-colors">Properties</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link href="#testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-6">Services</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="hover:text-accent transition-colors">Buying</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Selling</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Renting</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Property Management</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-1" />
              <span>123 Luxury Way, Beverly Hills, CA 90210</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent" />
              <span>+1 (555) 000-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent" />
              <span>info@luxeestate.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>&copy; {year || 2025} LuxeEstate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

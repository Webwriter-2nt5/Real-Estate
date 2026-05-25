import React from 'react';
import Image from 'next/image';
import { BedDouble, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '@/types/property';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-slate-100 dark:border-slate-800"
    >
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={property.image} 
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
          {property.type}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-4 py-1 rounded-full text-sm font-bold">
          ${property.price.toLocaleString()}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-1 text-slate-500 text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{property.title}</h3>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {property.description}
        </p>
        
        <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <BedDouble className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;

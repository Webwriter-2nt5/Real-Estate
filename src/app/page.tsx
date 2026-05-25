import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <FeaturedProperties />
      <Services />
      <Testimonials />
      
      {/* Contact CTA Section */}
      <section id="contact" className="py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to find your dream home?</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Join thousands of satisfied homeowners who found their perfect property with LuxeEstate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-accent px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all">
              Contact an Agent
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Browse Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

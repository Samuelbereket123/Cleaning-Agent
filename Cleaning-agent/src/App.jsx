import { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaCheck, FaMapMarkerAlt, FaLeaf, FaClock, FaCalendarAlt, FaQuoteLeft } from 'react-icons/fa';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const howItWorksRef = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    { icon: <FaMapMarkerAlt className="w-6 h-6" />, text: "Delivery to your home or office" },
    { icon: <FaLeaf className="w-6 h-6" />, text: "Eco-friendly, trusted cleaning products" },
    { icon: <FaClock className="w-6 h-6" />, text: "Save time, avoid last-minute store runs" },
    { icon: <FaCalendarAlt className="w-6 h-6" />, text: "Flexible delivery — you choose the time" },
  ];

  const testimonials = [
    {
      quote: "Didn't realize how easy this could be. Supplies came right to my door.",
      author: "Alem T.",
      location: "Bole, Addis Ababa"
    },
    {
      quote: "Booked during my lunch break. Got what I needed — fast!",
      author: "Sara M.",
      location: "Kazanchis, Addis Ababa"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">CleanEase</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors">How It Works</a>
            <a href="#benefits" className="text-gray-700 hover:text-primary-600 transition-colors">Benefits</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">Testimonials</a>
          </nav>
          <a 
            href="https://your-google-form-link.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-overlay min-h-screen flex items-center justify-center text-center text-white bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="hero-content container mx-auto px-4 py-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Tired of running around for cleaning supplies?
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Introducing Ethiopia's first door-to-door cleaning agent delivery service. We bring the products — and the pros — to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://your-google-form-link.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get My Supplies Now
            </a>
            <button 
              onClick={() => scrollToSection(howItWorksRef)}
              className="btn-secondary text-white border-white hover:bg-white/10"
            >
              Learn how it works
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} id="how-it-works" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your cleaning supplies has never been easier. Just three simple steps!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { number: '01', title: 'Place Your Order', description: 'Fill out our simple form with your cleaning needs and delivery details.' },
              { number: '02', title: 'We Prepare Your Order', description: 'Our team carefully selects eco-friendly products and prepares your delivery.' },
              { number: '03', title: 'Delivery to Your Door', description: 'Sit back and relax while we deliver everything you need right to your doorstep.' }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                style={{ animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`, opacity: 0 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make cleaning convenient, efficient, and environmentally friendly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <p className="text-lg font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-xl relative"
                style={{ animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`, opacity: 0 }}
              >
                <FaQuoteLeft className="text-primary-200 text-4xl mb-4" />
                <p className="text-gray-700 text-lg mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md mb-8">
            <FaMapMarkerAlt className="text-primary-600 mr-2" />
            <span className="font-medium">Currently operating in Addis Ababa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Service Area</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're currently serving all major neighborhoods in Addis Ababa, with plans to expand soon!
          </p>
          <div className="bg-white p-6 rounded-xl shadow-lg inline-block max-w-4xl w-full">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.507860717794!2d38.7865!3d9.0336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnNTQuOCJOIDM4wrA0NycxMy4xIkU!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Service Area Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Convenience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of happy customers who have made the switch to hassle-free cleaning supplies delivery.
          </p>
          <a 
            href="https://your-google-form-link.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary bg-white text-primary-700 hover:bg-gray-100 hover:text-primary-800 inline-flex items-center"
          >
            Get Started Now <FaArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-3 px-4 z-40 transform transition-transform duration-300 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 group">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-800 font-medium mb-2 md:mb-0 text-center md:text-left">
            Get your cleaning supplies delivered today!
          </p>
          <a 
            href="https://your-google-form-link.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">CleanEase</h3>
              <p className="text-gray-400">Ethiopia's first door-to-door cleaning agent delivery service.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@cleanease.et</li>
                <li>Phone: +251 911 123 456</li>
                <li>Addis Ababa, Ethiopia</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Telegram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1.01-.69.95-.57-.15-1.02-.37-1.58-.67-.88-.38-1.37-.62-2.22-1.01-.96-.44-.34-.68.21-1.07.14-.09 2.61-1.7 2.66-1.84.01-.01.01-.02.01-.03.02-.11-.03-.16-.11-.1-.44.28-1.84 1.21-2.4 1.45-.18.08-.34.12-.49.11-.2-.01-.58-.11-.88-.21-.7-.22-1.25-.34-1.2-.72.02-.16.18-.33.5-.43.8-.25 2.66-.82 2.88-.9.22-.08.37-.13.36-.2-.01-.08-.15-.1-.42-.05-.32.06-2.77.9-3.78 1.3-.14.06-.28.09-.42.09-.17 0-.42-.04-.64-.08-.27-.05-.48-.08-.47-.17.01-.08.59-.56 1.15-1.04 1.2-1.04 1.73-1.24 2.93-1.33.24-.02.38-.04.43-.03.1.01.33.08.48.15.33.16.36.28.4.5.12.6.4 2.07.46 2.38.04.2.08.22.15.13.06-.08.33-.38.64-.75.38-.46.5-.61.81-1 .05-.06.1-.05.14-.03.05.03.3.4.57.78.44.62.75 1.06.83 1.12.08.06.14.07.2.04.06-.03.09-.15.12-.22.03-.08.03-.15.04-.15.01 0 .05.03.1.07.05.04.28.19.5.36.45.33.86.63.95.7.14.1.23.1.3.09.07-.01.2-.08.38-.31.15-.19.46-.6.46-.6z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} CleanEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

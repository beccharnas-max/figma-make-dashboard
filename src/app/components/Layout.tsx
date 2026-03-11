import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, Facebook, Linkedin, Instagram } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export const Layout = () => {
  const { scrollYX } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 font-sans selection:bg-pink-100 selection:text-slate-900">
      {/* Navigation */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 z-50 relative">
            Workhorse
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/she-means-business">She Means Business</NavLink>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Nav Overlay */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 pt-20"
            >
              <MobileNavLink to="/">Home</MobileNavLink>
              <MobileNavLink to="/about">About</MobileNavLink>
              <MobileNavLink to="/services">Services</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink>
              <Link
                to="/contact"
                className="mt-4 px-8 py-3 rounded-full bg-slate-900 text-white text-lg font-medium hover:bg-slate-800 transition-colors shadow-sm"
              >
                Get in Touch
              </Link>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-pink-50 border-t-2 border-slate-900 border-dashed py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
             style={{
               backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Workhorse</h3>
              <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
                Strategy-first marketing for small businesses. Building sustainable growth without the noise.
              </p>
              <div className="flex gap-4">
                <SocialIcon Icon={Facebook} href="#" />
                <SocialIcon Icon={Instagram} href="#" />
                <SocialIcon Icon={Linkedin} href="#" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Menu</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About</Link></li>
                <li><Link to="/services" className="text-slate-600 hover:text-slate-900 transition-colors">Services</Link></li>
                <li><Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="text-slate-600">hello@workhorse.com.au</li>
                <li className="text-slate-600">+61 (0) 413 024 788</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-pink-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Workhorse. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "text-sm font-medium transition-colors hover:text-slate-900",
        isActive ? "text-slate-900" : "text-slate-500"
      )}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={cn(
        "text-2xl font-semibold transition-colors hover:text-slate-900",
        isActive ? "text-slate-900" : "text-slate-400"
      )}
    >
      {children}
    </Link>
  );
};

const SocialIcon = ({ Icon, href }: { Icon: any; href: string }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-white/50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all hover:bg-white"
  >
    <Icon size={18} />
  </a>
);

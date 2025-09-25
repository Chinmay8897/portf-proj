import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail, Coffee } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-foreground">Chinmay</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium hover-effect"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Action Buttons */}
          <motion.div
            className="hidden lg:flex items-center space-x-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              onClick={() => navigate('/coffee')}
              variant="ghost"
              size="sm"
              className="hover:bg-accent/10 hover:text-accent transition-colors"
            >
              <Coffee size={18} />
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary hover-effect relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Connect</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ scale: [0, 1] }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.div
              className="px-4 pt-2 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => navigate('/coffee')}
                variant="ghost"
                className="w-full flex items-center justify-center space-x-2"
              >
                <Coffee size={18} />
                <span>Buy Me a Coffee</span>
              </Button>
              <Button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary w-full"
              >
                Let's Connect
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};
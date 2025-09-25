import { motion } from 'framer-motion';
import { Heart, MapPin, Coffee, Mail, Github, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Chinmay8897', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-sai-chinmay/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/__._chinmay_.__/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:adityasaichinmay@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={scrollToTop}
              className="text-2xl font-bold mb-2 hover-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-foreground">Chinmay</span>
            </motion.button>
            <p className="text-muted-foreground">
              Full-Stack Developer & Tech Enthusiast
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-1 mt-2 text-sm text-muted-foreground">
              <MapPin size={14} />
              <span>Hyderabad, India</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-150 hover-effect"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                custom={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3 + i * 0.1 }
                  })
                }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Availability */}
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium mb-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm">Available for work</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Open to freelance, part-time, internship, and full-time opportunities
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-border/50 my-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>© {currentYear} K. Aditya Sai Chinmay.</span>
            {/* <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-400 fill-current" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Coffee size={14} className="text-accent" />
            </motion.div> */}
          </div>

          {/* Tech Stack */}
          {/* <div className="text-muted-foreground text-sm">
            <span>Built with React, TypeScript & Framer Motion</span>
          </div> */}
        </motion.div>

        {/* Easter Egg */}
        {/* <motion.div
          className="text-center mt-8 text-muted-foreground text-xs opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.p
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="cursor-default"
          >
            "First, solve the problem. Then, write the code." - John Johnson
          </motion.p>
        </motion.div> */}
      </div>
    </footer>
  );
};
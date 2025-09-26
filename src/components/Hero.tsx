import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Chinmay8897', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-sai-chinmay/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/__._chinmay_.__/', label: 'Instagram' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-accent font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-2xl">👋</span>
              <span>Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                K. Aditya Sai
              </span>
              <br />
              <span className="text-foreground">Chinmay</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Full-Stack Developer & Tech Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Passionate about building innovative web applications using modern
              technologies. Currently pursuing CSE (Data Science) and exploring
              the intersection of development and data-driven solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <Button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary hover-effect group"
                size="lg"
              >
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  View Projects
                </motion.span>
              </Button>
              <Button
                onClick={() => window.open('https://drive.google.com/file/d/1pZqBelOSM-UVv1cDyu-ypH5EcOR9luf5/view?usp=sharing', '_blank')}
                className="btn-secondary hover-effect"
                size="lg"
              >
                My Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-4 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-muted-foreground font-medium">Connect with me:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors hover-effect"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative">
              {/* Animated Background Circle */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Profile Image */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 25px 50px -12px rgba(0, 106, 103, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1758168698363-3109a8d4da39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D"
                  alt="K. Aditya Sai Chinmay"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Image overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover border glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-full opacity-0 blur-sm"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.2, rotate: 45 }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full shadow-md"
                animate={{
                  x: [0, 8, 0],
                  y: [0, -5, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                whileHover={{ scale: 1.3, y: -10 }}
              />

              <motion.div
                className="absolute top-1/4 -left-8 w-4 h-4 bg-accent/60 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                whileHover={{ scale: 2, opacity: 1 }}
              />

              <motion.div
                className="absolute bottom-1/3 -right-6 w-5 h-5 bg-primary/50 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{ scale: 1.8, opacity: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
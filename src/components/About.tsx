import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ExternalLink } from 'lucide-react';

export const About = () => {
  const quickFacts = [
    { icon: MapPin, label: 'Location', value: 'Hyderabad, India (IST)' },
    { icon: Clock, label: 'Availability', value: 'Open to freelance, part-time, internship, and full-time' },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-header">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1758168559709-b6a772794d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
                  alt="K. Aditya Sai Chinmay"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl"
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Final-year CSE (Data Science) student at{' '}
                <span className="text-accent font-medium">
                  Vignana Bharathi Institute of Technology, Hyderabad
                </span>
                . Passionate about building projects, learning new technologies,
                watching movies, filming, and editing videos.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                I specialize in{' '}
                <span className="text-accent font-medium">full-stack web development</span>{' '}
                using modern technologies and frameworks. My goal is to create
                innovative solutions that bridge the gap between technical excellence
                and user-centered design.
              </motion.p>
            </div>

            {/* Quick Facts */}
            <motion.div
              className="space-y-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  className="flex items-start space-x-3 p-4 bg-card/50 rounded-lg border border-border/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5, backgroundColor: "hsl(var(--card))" }}
                >
                  <fact.icon className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="font-medium text-foreground">{fact.label}:</span>
                    <p className="text-muted-foreground">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Button
                className="btn-secondary hover-effect"
                onClick={() => window.open('https://www.linkedin.com/in/aditya-sai-chinmay/', '_blank')}
              >
                <ExternalLink size={18} className="mr-2" />
                LinkedIn Profile
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
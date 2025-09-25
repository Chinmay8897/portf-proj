import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Web Development (MERN)',
    description: 'Complete web application development using MongoDB, Express.js, React, Node.js with modern TypeScript and Next.js when suitable.',
    color: 'from-blue-400 to-blue-600',
    deliverables: [
      'Responsive SPA/MPA development',
      'RESTful API design & implementation',
      'User authentication & authorization',
      'Admin dashboards & user panels',
      'Cloud deployment & hosting',
      'Performance optimization',
      'Comprehensive documentation'
    ],
    process: [
      'Discovery & Requirements Analysis',
      'Design & Architecture Planning',
      'Development & Implementation',
      'Testing & Quality Assurance',
      'Deployment & Launch',
      'Handover & Ongoing Support'
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    startingPrice: 'Starting from $500'
  },
  {
    icon: Globe,
    title: 'Frontend Development',
    description: 'Creating beautiful, interactive user interfaces with React, TypeScript, and modern CSS frameworks for optimal user experience.',
    color: 'from-green-400 to-green-600',
    deliverables: [
      'Responsive UI components',
      'Interactive user interfaces',
      'Cross-browser compatibility',
      'Performance optimization',
      'Accessibility compliance',
      'Modern CSS animations',
      'Mobile-first design'
    ],
    process: [
      'UI/UX Analysis',
      'Component Architecture',
      'Implementation & Styling',
      'Testing & Optimization',
      'Deployment',
      'Performance Monitoring'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Vite'],
    startingPrice: 'Starting from $300'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust server-side development with Node.js, Express, and database management for scalable web applications.',
    color: 'from-purple-400 to-purple-600',
    deliverables: [
      'RESTful API development',
      'Database design & optimization',
      'Authentication systems',
      'Server deployment',
      'API documentation',
      'Performance monitoring',
      'Security implementation'
    ],
    process: [
      'Requirements Analysis',
      'Database Design',
      'API Development',
      'Testing & Validation',
      'Deployment & Scaling',
      'Monitoring & Maintenance'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JWT', 'Docker'],
    startingPrice: 'Starting from $400'
  }
];

export const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-header">Services & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-4"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto">
            Comprehensive web development services tailored to bring your 
            digital vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card-portfolio group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Service Header */}
                <div className="lg:col-span-1">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon size={32} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-accent font-semibold text-lg">{service.startingPrice}</span>
                    <p className="text-muted-foreground text-sm">Contact for detailed quote</p>
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className="btn-primary hover-effect w-full group"
                  >
                    <span>Request Quote</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Service Details */}
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <CheckCircle size={18} className="mr-2 text-accent" />
                      Deliverables:
                    </h4>
                    <div className="space-y-2">
                      {service.deliverables.map((deliverable, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start space-x-2 text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                        >
                          <span className="text-accent mt-1 flex-shrink-0">•</span>
                          <span className="text-sm">{deliverable}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <Settings size={18} className="mr-2 text-accent" />
                      Process:
                    </h4>
                    <div className="space-y-2">
                      {service.process.map((step, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start space-x-2 text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                        >
                          <span className="text-accent mt-1 flex-shrink-0">{i + 1}.</span>
                          <span className="text-sm">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Zap size={18} className="mr-2 text-accent" />
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="skill-badge text-xs"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-accent/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together. 
            I'm committed to delivering high-quality solutions that exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="btn-primary hover-effect"
              size="lg"
            >
              Start Your Project
            </Button>
            <Button 
              onClick={() => window.open('https://github.com/Chinmay8897', '_blank')}
              className="btn-secondary hover-effect"
              size="lg"
            >
              View My Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
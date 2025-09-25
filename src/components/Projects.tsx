import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Zap, Shield, Home, Car } from 'lucide-react';

const projects = [
  {
    id: 'eyewitness',
    title: 'Eyewitness',
    description: 'Real-time incident reporting platform with secure backend APIs, geospatial analytics, and multi-step authentication to protect sensitive submissions and accelerate authority response times.',
    role: 'Full-stack Developer',
    duration: '3 months',
    team: 'Solo Project',
    technologies: ['Node.js', 'Appwrite', 'Real-time APIs', 'Geospatial Analytics', 'TypeScript'],
    highlights: [
      'Real-time incident reporting system',
      'Secure backend APIs with authentication',
      'Geospatial analytics for location tracking',
      'Multi-step auth for sensitive data protection',
      'Notification system for authorities'
    ],
    links: {
      live: 'https://eyewitness-five.vercel.app/',
      github: 'https://github.com/Chinmay8897/BlogWeb'
    },
    icon: Shield,
    color: 'from-red-400 to-red-600',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'simplhome',
    title: 'SimplHome',
    description: 'Voice-driven home automation platform with predictive analytics, device management, and service orchestration through scalable REST APIs.',
    role: 'Full-stack Developer',
    duration: '4 months',
    team: '2 Developers',
    technologies: ['Python', 'Node.js', 'REST APIs', 'Voice Recognition', 'IoT'],
    highlights: [
      'Voice-driven automation system',
      'Predictive analytics for smart control',
      'Device management dashboard',
      'Scalable REST API architecture',
      'Service orchestration platform'
    ],
    links: {
      live: 'https://simplhome.vercel.app/',
      github: 'https://github.com/Chinmay8897/simplhome'
    },
    icon: Home,
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'parkease',
    title: 'ParkEase',
    description: 'Advanced parking booking application with responsive design, admin and user interfaces, cross-browser compatibility, and optimized front-end performance.',
    role: 'Front-end Architect',
    duration: '2 months',
    team: 'Solo Project',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    highlights: [
      'Responsive parking booking system',
      'Admin and user interface separation',
      'Cross-browser compatibility',
      'Front-end performance optimization',
      'Real-time booking updates'
    ],
    links: {
      live: 'https://advanced-parking-booking.vercel.app/',
      github: 'https://github.com/Chinmay8897/advanced-parking-booking'
    },
    icon: Car,
    color: 'from-blue-400 to-blue-600',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-header">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-4"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto">
            Showcasing my expertise in full-stack web development through
            innovative and impactful projects
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card-portfolio group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`grid gap-8 items-start ${project.image ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}>
                {/* Project Icon & Info */}
                <div className={project.image ? 'lg:col-span-1' : 'lg:col-span-1'}>
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <project.icon size={32} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-accent font-medium mb-4">{project.role}</p>

                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => window.open(project.links.live, '_blank')}
                      className="btn-primary hover-effect flex-1"
                      size="sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    {project.links.github && (
                      <Button
                        onClick={() => window.open(project.links.github, '_blank')}
                        className="btn-secondary hover-effect flex-1"
                        size="sm"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                  </div>

                  {/* Project Image for projects with images */}
                  {project.image && (
                    <motion.div
                      className="mt-6 rounded-xl overflow-hidden shadow-lg border border-border/50"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder if image fails to load
                          e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                              <rect width="100%" height="100%" fill="#f3f4f6"/>
                              <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#6b7280" text-anchor="middle" dy=".3em">
                                ${project.title} Preview
                              </text>
                            </svg>
                          `)}`;
                        }}
                      />
                    </motion.div>
                  )}
                </div>

                {/* Project Details */}
                <div className={project.image ? 'lg:col-span-1' : 'lg:col-span-2'}>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Zap size={18} className="mr-2 text-accent" />
                      Key Features:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start space-x-2 text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                        >
                          <span className="text-accent mt-1 flex-shrink-0">•</span>
                          <span className="text-sm">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="skill-badge text-xs"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
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
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground text-lg mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <Button
            onClick={() => window.open('https://github.com/Chinmay8897', '_blank')}
            className="btn-secondary hover-effect"
            size="lg"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
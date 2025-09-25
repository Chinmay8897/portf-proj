import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';

const projects = [
  {
    id: 'eyewitness',
    title: 'Eyewitness',
    description: 'Real-time incident reporting platform with secure backend APIs, geospatial analytics, and multi-step authentication to protect sensitive submissions and accelerate authority response times.',
    role: 'Full-stack Developer',
    duration: '3 months',
    team: 'Solo Project',
    status: 'Completed',
    technologies: ['Node.js', 'Appwrite', 'TypeScript', 'Real-time APIs', 'Geospatial Analytics'],
    keyFeatures: [
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
    abbreviation: 'EP',
    image: 'https://images.unsplash.com/photo-1757611614105-c2dd05bcd67c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'simplhome',
    title: 'SimplHome',
    description: 'Voice-driven home automation platform with predictive analytics, device management, and service orchestration through scalable REST APIs.',
    role: 'Full-stack Developer',
    duration: '4 months',
    team: '2 developers',
    status: 'Completed',
    technologies: ['Python', 'Node.js', 'REST APIs', 'Voice Recognition', 'IoT'],
    keyFeatures: [
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
    abbreviation: 'TMD',
    image: 'https://images.unsplash.com/photo-1757611614212-6d6eeb1d850c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'parkease',
    title: 'ParkEase',
    description: 'Advanced parking booking application with responsive design, admin and user interfaces, cross-browser compatibility, and optimized front-end performance.',
    role: 'Front-end Architect',
    duration: '2 months',
    team: 'Solo Project',
    status: 'Completed',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    keyFeatures: [
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
    abbreviation: 'DVP',
    image: 'https://images.unsplash.com/photo-1757611614101-dbe46dd68418?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D'
  }
];

export const ProjectsNew = () => {
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

        <div className="grid gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.01, y: -5 }}
              >
                <div className={`grid lg:grid-cols-12 gap-8 items-start ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  {/* Project Visual */}
                  <div className={`lg:col-span-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <motion.div
                      className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 aspect-[4/3] flex flex-col items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.status === 'Completed'
                            ? 'bg-accent/20 text-accent border border-accent/30'
                            : 'bg-orange-500/20 text-orange-500 border border-orange-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Project Visual - Image or Abbreviation */}
                      {project.image ? (
                        <div className="w-full h-120 mb-4 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center">
                          <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="text-6xl font-bold text-gray-400 dark:text-gray-600 mb-4">
                          {project.abbreviation}
                        </div>
                      )}

                      {/* Decorative Elements */}
                      <div className="absolute top-1/2 left-4 w-2 h-2 rounded-full bg-accent/30"></div>
                      <div className="absolute bottom-4 right-6 w-3 h-3 rounded-full bg-primary/30"></div>
                      <div className="absolute top-8 right-8 w-1 h-1 rounded-full bg-muted-foreground/30"></div>
                      <div className="absolute bottom-8 left-8 w-1 h-1 rounded-full bg-muted-foreground/30"></div>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className={`lg:col-span-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Project Meta */}
                      <div className="grid sm:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Users size={16} />
                          <span>{project.team}</span>
                        </div>
                        <div className="text-accent font-medium">
                          {project.role}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Zap size={18} className="mr-2 text-accent" />
                          Key Features:
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.keyFeatures.map((feature, i) => (
                            <motion.div
                              key={i}
                              className="flex items-center space-x-3 text-muted-foreground"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                            >
                              <span className="text-accent flex-shrink-0 text-sm">•</span>
                              <span className="text-sm leading-relaxed">{feature}</span>
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
                              className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs font-medium"
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

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button
                          onClick={() => window.open(project.links.live, '_blank')}
                          className="bg-primary/90 hover:bg-primary text-primary-foreground flex-1"
                          size="sm"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
                        {project.links.github && (
                          <Button
                            onClick={() => window.open(project.links.github, '_blank')}
                            variant="outline"
                            className="border-border hover:bg-accent/10 hover:border-accent/30 flex-1"
                            size="sm"
                          >
                            <Github size={16} className="mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
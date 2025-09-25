import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'Fettle',
    duration: 'May 2025 – Aug 2025',
    location: 'Remote',
    status: 'Upcoming',
    description: 'Contributed to web development tasks in a collaborative environment, implementing features, fixing bugs, and optimizing UI performance.',
    responsibilities: [
      'Implemented responsive UI components using React and modern CSS frameworks',
      'Collaborated with cross-functional teams to deliver high-quality web solutions',
      'Optimized application performance and improved user experience',
      'Participated in code reviews and maintained coding standards'
    ],
    technologies: ['React', 'Node.js', 'JavaScript', 'CSS', 'Git'],
    highlights: [
      'Contributed to feature development',
      'Performance optimization',
      'UI/UX improvements'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-header">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-4"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto">
            Professional journey and contributions to the tech industry
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Work Experience */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Content Card */}
              <div className="w-full">
                <motion.div
                  className="card-portfolio relative max-w-4xl mx-auto"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Status Badge */}
                  <div className="absolute -top-2 -right-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      exp.status === 'Upcoming'
                        ? 'bg-accent/20 text-accent border border-accent/30'
                        : 'bg-primary/20 text-primary border border-primary/30'
                    }`}>
                      {exp.status}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-accent font-medium text-lg">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {/* Key Responsibilities */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {exp.responsibilities.map((responsibility, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="skill-badge text-xs"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
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
            Excited to contribute to innovative projects and continue growing in the tech industry
          </p>
          <motion.div
            className="inline-flex items-center space-x-2 text-accent font-medium"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Ready to make an impact</span>
            <span>→</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
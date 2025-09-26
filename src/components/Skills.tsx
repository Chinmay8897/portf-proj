import { motion } from 'framer-motion';
import { Monitor, Server, Settings, Hammer, BarChart3, Bot } from 'lucide-react';

const skillCategories = [
  {
    icon: Monitor,
    title: 'Languages',
    color: 'from-blue-400 to-blue-600',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'C++', 'R', 'HTML', 'CSS']
  },
  {
    icon: Server,
    title: 'Databases & Query',
    color: 'from-green-400 to-green-600',
    skills: ['MySQL', 'SQL', 'PostgreSQL', 'MS SQL Server']
  },
  {
    icon: Settings,
    title: 'Frameworks & Tech',
    color: 'from-purple-400 to-purple-600',
    skills: ['ReactJS', 'Redux', 'Next.js', 'Node.js', 'Express.js', 'Angular.js', 'Flutter']
  },
  {
    icon: Hammer,
    title: 'Developer Tools',
    color: 'from-orange-400 to-orange-600',
    skills: ['Git', 'GitHub', 'VS Code', 'PyCharm']
  },
  {
    icon: BarChart3,
    title: 'Data Science & Analytics',
    color: 'from-red-400 to-red-600',
    skills: ['Pandas', 'NumPy', 'Machine Learning', 'Applied Statistics']
  },
  {
    icon: Bot,
    title: 'GenAI Tools & Platforms',
    color: 'from-teal-400 to-teal-600',
    skills: ['Cursor', 'MidJourney', 'Windsurf', 'Replit', 'GitHub Copilot', 'Hugging Face']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-header">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-4"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, data science,
            and modern AI-powered tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card-portfolio group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Category Header */}
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </motion.div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
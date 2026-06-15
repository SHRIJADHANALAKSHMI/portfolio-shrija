import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../hooks/useAnimations'
import { MdOpenInNew } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Inovex – SaaS Project Management Platform',
      description:
        'Developed a complete SaaS project management solution with authentication, role-based dashboards, project tracking, file sharing, progress monitoring, and real-time communication using Socket.io.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Express.js'],
      github: 'https://github.com/SHRIJADHANALAKSHMI/inovex-IT-service-website.git',
      demo: 'https://example.com',
      icon: '📊',
    },
    {
      title: 'ResQNow – Roadside Assistance Platform',
      description:
        'A location-aware roadside assistance platform connecting stranded users with nearby mechanics and towing services using GPS tracking and rapid-response workflows.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Maps API', 'Express.js'],
      github: 'https://github.com/SHRIJADHANALAKSHMI/ResQNOW',
      demo: 'https://drive.google.com/file/d/1c1V9YrLP-DGxUb2QYJ4Q_mOExS5nK0_L/view?usp=sharing',
      icon: '🚗',
    },
    {
      title: 'Career Compass – AI Career Guidance Platform',
      description:
        'AI-powered career guidance platform providing personalized career recommendations, skill-gap analysis, learning roadmaps, resume insights, and industry trends.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'REST APIs'],
      github: 'https://github.com/SHRIJADHANALAKSHMI/Carreer-Boost-AI',
      demo: 'https://drive.google.com/file/d/1akju-DBnwpPHbk7YBOhtZ9w3h6bRpOxq/view?usp=sharing',
      icon: '🚀',
    },
    {
      title: 'Silent Feedback System',
      description:
        'Anonymous feedback collection platform built for organizations to gather secure and unbiased employee feedback. Includes role-based access control and analytics dashboard.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/SHRIJADHANALAKSHMI/Silent-Feedback-System',
      demo: 'https://drive.google.com/file/d/1rw8FI_YvlH3VpKWuZcjjNmki03R3xEDl/view?usp=sharing',
      icon: '💬',
    },
    {
  title: 'AI Voice Recognition System',
  description:
    'An AI-powered voice recognition system that converts speech into text, identifies spoken commands, and enables hands-free interaction. Features real-time speech processing, voice command recognition, and intelligent response generation using machine learning techniques.',
  technologies: ['Python', 'Machine Learning', 'SpeechRecognition', 'Flask'],
  github: 'https://github.com/SHRIJADHANALAKSHMI/pluto---voice-assistant',
  demo: 'https://drive.google.com/file/d/1C4-tNOrfF2_HXCjRN500bsine1XlVhvE/view?usp=sharing',
  icon: '🎙️',
},
  ]

  return (
    <section id="projects" className="section-container">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Featured Projects</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                className="card group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-red-500/10 text-red-500 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-red-500/10 text-red-500 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
 
                {/* Links */} 
                <div className="flex gap-3 pt-4 border-t border-white/10 dark:border-white/5">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-4 py-2 bg-dark-900 dark:bg-white/5 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all font-semibold text-sm"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </motion.a>
                 
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all font-semibold text-sm flex-1"
                  >
                    Live Demo
                    <MdOpenInNew size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="https://github.com/SHRIJADHANALAKSHMI?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block btn-secondary"
            >
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

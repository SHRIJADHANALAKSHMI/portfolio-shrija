import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../hooks/useAnimations'
import { MdCheckCircle } from 'react-icons/md'

const Experience = () => {
  const experiences = [
    {
      company: 'Calanjiyam Consultancies and Technology',
      role: 'Full Stack Web Development Intern',
      duration: '3 Months',
      responsibilities: [
        'Developed Silent Feedback System',
        'Implemented Role-Based Access Control',
        'Built Analytics Dashboard',
        'Integrated Backend APIs with Frontend',
        'Designed Secure Authentication Flow',
      ],
    },
    {
      company: 'CodSoft',
      role: 'Full Stack Web Development Intern',
      duration: '1 Month',
      responsibilities: [
        'Developed Job Board Application',
        'Built MERN Stack Architecture',
        'Implemented Job Posting Features',
        'Developed Search Functionality',
        'Created User Management System',
      ],
    },
    {
      company: 'SystemTron',
      role: 'Full Stack Web Development Intern',
      duration: '1 Month',
      responsibilities: [
        'Developed Full Stack Applications',
        'Implemented Authentication Systems',
        'Built Dynamic User Interfaces',
        'Worked with REST APIs',
        'Improved Frontend Performance',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Work Experience</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card relative overflow-hidden"
              >
                {/* Timeline Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-transparent transform md:-translate-x-1/2" />

                <div className="md:flex gap-8">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-start justify-center flex-shrink-0 w-12">
                    <motion.div
                      whileInView={{ scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-4 h-4 rounded-full bg-red-500 border-4 border-dark-900 dark:border-dark-900"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-red-500 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{exp.duration}</p>

                    <div className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <MdCheckCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                          <p className="text-gray-700 dark:text-gray-300">{resp}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

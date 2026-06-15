import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../hooks/useAnimations'
import { MdSchool } from 'react-icons/md'

const Education = () => {
  const education = [
    {
      institution: 'KGISL Institute of Technology',
      degree: 'B.Tech Information Technology',
      duration: '2023 – 2027',
      status: 'Currently Pursuing',
      icon: '🎓',
    },
    {
      institution: 'Indian Institute of Technology Madras',
      degree: 'B.Sc Data Science and Applications',
      duration: '2025 – 2029',
      status: 'Currently Pursuing',
      icon: '📚',
    },
  ]

  return (
    <section id="education" className="section-container">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Education</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card relative overflow-hidden group"
              >
                {/* Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-600 transform -translate-x-1 group-hover:translate-x-0 transition-transform" />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-4xl flex-shrink-0">
                    {edu.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-red-500 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {edu.duration} • <span className="text-green-500">{edu.status}</span>
                    </p>
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

export default Education

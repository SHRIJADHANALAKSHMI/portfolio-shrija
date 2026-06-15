import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../hooks/useAnimations'
import { MdEmojiEvents, MdVerified } from 'react-icons/md'

const Achievements = () => {
  const achievements = [
    {
      title: 'Oracle Certified AI Foundations Associate',
      category: 'Certification',
      icon: '🔐',
    },
    {
      title: 'IBM Full Stack Software Developer Specialization',
      category: 'Certification',
      icon: '💼',
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      category: 'Certification',
      icon: '☁️',
    },
    {
      title: 'IoT Training Program – IIT Hyderabad',
      category: 'Training',
      icon: '📡',
    },
    {
      title: 'React.js Pointer Camp – Best Performance Award',
      category: 'Award',
      icon: '🏆',
    },
    {
      title: 'SMART India Hackathon – College Level Selection',
      category: 'Achievement',
      icon: '🚀',
    },
    {
      title: 'Mentor – SIH Dev\'s Day 2025',
      category: 'Role',
      icon: '👨‍🏫',
    },
    {
      title: 'Solved 100+ Problems on LeetCode',
      category: 'Competitive Programming',
      icon: '💻',
    },
    {
      title: 'Solved 200+ Problems on CodeChef',
      category: 'Competitive Programming',
      icon: '🧠',
    },
  ]

  return (
    <section id="achievements" className="section-container">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Achievements & Certifications</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="card group relative"
              >
                {/* Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                {/* Badge */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{achievement.icon}</span>
                  <motion.span
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-red-500"
                  >
                    <MdVerified size={20} />
                  </motion.span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-red-500 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {achievement.category}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements

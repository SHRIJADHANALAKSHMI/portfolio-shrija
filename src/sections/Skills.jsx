import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../hooks/useAnimations'

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'PHP'],
    },
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'PHP'],
    },
    {
      category: 'Database Technologies',
      skills: ['MongoDB', 'MySQL', 'SQL'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'AWS Fundamentals'],
    },
    {
      category: 'Core Concepts',
      skills: ['REST APIs', 'Authentication', 'Database Design', 'Agile Methodology', 'Full Stack Development', 'Software Architecture'],
    },
  ]

  return (
    <section id="skills" className="section-container">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Skills & Expertise</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="card"
              >
                <h3 className="text-lg font-bold text-red-500 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded" />
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm font-medium hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

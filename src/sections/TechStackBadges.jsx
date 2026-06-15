import { motion } from 'framer-motion'
import { FaReact, FaNode, FaPython, FaJava, FaAws, FaGithub, FaDatabase } from 'react-icons/fa'
import { SiExpress, SiTailwindcss, SiMongodb } from 'react-icons/si'

const TechStackBadges = () => {
  const technologies = [
    { name: 'React.js', icon: <FaReact size={32} className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNode size={32} className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress size={32} className="text-white" /> },
    { name: 'MongoDB', icon: <SiMongodb size={32} className="text-green-600" /> },
    { name: 'Python', icon: <FaPython size={32} className="text-yellow-400" /> },
    { name: 'Java', icon: <FaJava size={32} className="text-red-600" /> },
    { name: 'AWS', icon: <FaAws size={32} className="text-orange-400" /> },
    { name: 'GitHub', icon: <FaGithub size={32} className="text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} className="text-blue-400" /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative py-16 px-4 md:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#FF3B30]/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-[#FF3B30] mb-2 uppercase tracking-wide">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technologies I Work With</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 md:gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.1 }}
              className="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[#FF3B30]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF3B30]/20 cursor-pointer"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <p className="text-xs md:text-sm font-semibold text-gray-300 text-center group-hover:text-[#FF3B30] transition-colors">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStackBadges

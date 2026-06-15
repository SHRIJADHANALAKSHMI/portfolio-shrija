import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../hooks/useAnimations'
import { MdCheckCircle } from 'react-icons/md'

const About = () => {
  const interests = [
    'Full Stack Development',
    'SaaS Product Development',
    'Artificial Intelligence',
    'Enterprise Workflow Automation',
    'Cloud Technologies',
    'Data Science',
    'Modern Web Technologies',
  ]

  const benefits = [
    {
      icon: '⚡',
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern tech stacks'
    },
    {
      icon: '🔌',
      title: 'REST API Development',
      description: 'Scalable and secure backend APIs with best practices'
    },
    {
      icon: '🗄️',
      title: 'Database Design',
      description: 'Efficient database architecture and optimization'
    },
    {
      icon: '🧩',
      title: 'Problem Solving',
      description: 'Creative solutions to complex technical challenges'
    },
    {
      icon: '👥',
      title: 'Agile Collaboration',
      description: 'Effective teamwork and communication in development cycles'
    },
    {
      icon: '🤖',
      title: 'AI Integration',
      description: 'Implementing AI and ML solutions in web applications'
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 md:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF3B30]/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#FF3B30] mb-2 uppercase tracking-wide">Who I Am</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Full Stack Developer passionate about building scalable solutions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                I am a Full Stack Software Developer with hands-on experience in MERN Stack development, 
                REST API development, SaaS platforms, and AI-powered applications.
              </motion.p>

              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                I have experience building scalable web applications, project management systems, 
                feedback platforms, and location-based service solutions. My passion lies in solving 
                real-world problems through technology and creating products that deliver meaningful impact.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-400">
                Beyond coding, I'm passionate about continuous learning, contributing to open-source projects, 
                and mentoring junior developers. I believe in writing clean, maintainable code and following 
                best practices in software development.
              </motion.p>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[#FF3B30]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF3B30]/20"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FF3B30] to-[#FF6B57] bg-clip-text text-transparent mb-2">4+</h3>
                <p className="text-gray-300">Major Projects Completed</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[#FF3B30]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF3B30]/20"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FF3B30] to-[#FF6B57] bg-clip-text text-transparent mb-2">3</h3>
                <p className="text-gray-300">Internships at Top Companies</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[#FF3B30]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF3B30]/20"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FF3B30] to-[#FF6B57] bg-clip-text text-transparent mb-2">300+</h3>
                <p className="text-gray-300">Coding Problems Solved</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Why Work With Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Me?</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">Bringing expertise, dedication, and innovation to every project</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[#FF3B30]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF3B30]/20"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">I enjoy working on:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="p-4 rounded-xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[#FF3B30]/50 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#FF3B30]/20"
                >
                  <p className="font-semibold text-white">{interest}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

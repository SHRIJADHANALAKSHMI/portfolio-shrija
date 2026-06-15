import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { MdArrowOutward, MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import { useTypingEffect } from '../hooks/useAnimations'

// Placeholder image - replace with actual profile image when available
const PROFILE_IMAGE = '/profile.png'

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
  ]
  
  const displayedRole = useTypingEffect(roles, 100, 2000)

  const socialLinks = [
    { icon: <FaGithub size={24} />, href: 'https://github.com/SHRIJADHANALAKSHMI', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/in/shrija-dhanalakshmi-s-m-406a052b6/', label: 'LinkedIn' },
    { icon: <FaCode size={24} />, href: 'https://leetcode.com/u/Shrija16/', label: 'LeetCode' },
    { icon: <MdEmail size={24} />, href: 'mailto:shrijasm@gmail.com', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black/50">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF3B30]/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B57]/10 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF3B30]/5 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 order-2 lg:order-1"
          >
            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-[#FF3B30] to-[#FF6B57] bg-clip-text text-transparent">
                Shrija
              </span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-[#FF3B30] mb-8 h-12 flex items-center"
            >
              {displayedRole}
              <span className="animate-pulse ml-2">|</span>
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl"
            >
              Building scalable web applications,
              <br />
              AI-powered solutions,
              <br />
              and SaaS products that solve real-world problems.
            </motion.p>

            {/* Education Info */}
            <motion.div variants={itemVariants} className="mb-10 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#FF3B30] text-lg mt-1">→</span>
                <p className="text-gray-200">B.Tech Information Technology</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FF3B30] text-lg mt-1">→</span>
                <p className="text-gray-200">B.Sc Data Science and Applications (IIT Madras)</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <ScrollLink
                to="projects"
                smooth
                duration={500}
                className="cursor-pointer group px-6 py-3 bg-gradient-to-r from-[#FF3B30] to-[#FF6B57] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#FF3B30]/50 transition-all duration-300 flex items-center gap-2 hover:gap-3"
              >
                View Projects
                <MdArrowOutward className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </ScrollLink>

              <a
                href="https://drive.google.com/file/d/1wm4vdyHs2EDLB29ixpk4xeZlS6S6m-OR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 border-2 border-[#FF3B30] text-[#FF3B30] rounded-lg font-semibold hover:bg-[#FF3B30]/10 transition-all duration-300 flex items-center gap-2 hover:gap-3"
              >
                View Resume
                <MdArrowOutward className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <ScrollLink
                to="contact"
                smooth
                duration={500}
                className="cursor-pointer px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-gray-400 hover:text-white transition-all duration-300"
              >
                Contact Me
              </ScrollLink>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6"
            >
              <span className="text-gray-500 text-sm font-semibold">Follow:</span>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.15, color: '#FF3B30' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg border border-gray-600 text-gray-400 hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF3B30]/20"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 h-96 md:h-[500px] flex items-center justify-center"
          >
            {/* Glow Effect */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 30px rgba(255, 59, 48, 0.4)',
                  '0 0 50px rgba(255, 59, 48, 0.6)',
                  '0 0 30px rgba(255, 59, 48, 0.4)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl"
            />

            {/* Floating Container */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full"
            >
              {/* Glass Border Effect */}
              <div className="absolute inset-0 rounded-3xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-1">
                <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#FF3B30]/20 to-[#FF6B57]/10 relative">
                  {/* Profile Image */}
                  <motion.img
                    src={PROFILE_IMAGE}
                    alt="Shrija Dhanalakshmi S M"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[#FF3B30] rounded-full opacity-50" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-[#FF6B57] rounded-full opacity-50" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-sm text-gray-500 font-medium">Scroll to explore</p>
          <svg className="w-6 h-6 text-[#FF3B30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

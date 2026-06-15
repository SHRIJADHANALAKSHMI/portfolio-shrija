import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { MdMenu, MdClose, MdDarkMode, MdLightMode, MdArrowOutward } from 'react-icons/md'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Education', to: 'education' },
    { label: 'Skills', to: 'skills' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Achievements', to: 'achievements' },
    { label: 'Certifications', to: 'achievements' },
    { label: 'Contact', to: 'contact' },
  ]

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1wm4vdyHs2EDLB29ixpk4xeZlS6S6m-OR/view?usp=sharing', '_blank')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-[#FF3B30] to-[#FF6B57] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#FF3B30] to-[#FF6B57] bg-clip-text text-transparent hidden sm:inline">
              Shrija
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy
                smooth
                duration={500}
                className="cursor-pointer text-sm font-medium text-gray-300 hover:text-[#FF3B30] transition-colors duration-300"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeClick}
              className="hidden md:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FF3B30] to-[#FF6B57] hover:shadow-lg hover:shadow-[#FF3B30]/40 text-white rounded-full text-sm font-semibold transition-all duration-300 group"
            >
              View Resume
              <MdArrowOutward className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-400 hover:text-[#FF3B30] hover:bg-white/10 transition-all duration-300"
            >
              {darkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
            </motion.button>

            <button
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-[#FF3B30] hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-4 pt-4 border-t border-white/10 space-y-3"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy
                smooth
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 text-gray-300 hover:text-[#FF3B30] hover:bg-white/10 rounded-lg cursor-pointer transition-all"
              >
                {item.label}
              </ScrollLink>
            ))}
            <motion.button
              whileHover={{ scale: 0.98 }}
              onClick={handleResumeClick}
              className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-[#FF3B30] to-[#FF6B57] text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#FF3B30]/40"
            >
              View Resume
              <MdArrowOutward />
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar

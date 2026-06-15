import { motion } from 'framer-motion'
import { MdEmail, MdPhone, MdArrowOutward } from 'react-icons/md'
import { FaLinkedin, FaCode, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      href: 'https://github.com/SHRIJADHANALAKSHMI',
    },
    {
      icon: <FaLinkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shrija-dhanalakshmi-s-m-406a052b6/',
    },
    {
      icon: <FaCode size={24} />,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Shrija16/',
    },
    {
      icon: <MdEmail size={24} />,
      label: 'Email',
      href: 'mailto:shrijasm@gmail.com',
    },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative backdrop-blur-md bg-black/40 border-t border-white/10 mt-20"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FF3B30] to-[#FF6B57] bg-clip-text text-transparent mb-3">
              Shrija
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building amazing web experiences, AI-powered solutions, and SaaS products that solve real-world problems through code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', to: 'hero' },
                { label: 'About', to: 'about' },
                { label: 'Projects', to: 'projects' },
                { label: 'Contact', to: 'contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FF3B30] transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <MdArrowOutward size={14} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:shrijasm@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FF3B30] transition-colors text-sm group"
              >
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-[#FF3B30]/20 transition-colors">
                  <MdEmail size={18} />
                </div>
                <span>shrijasm@gmail.com</span>
              </a>
              <a
                href="tel:+917395863267"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FF3B30] transition-colors text-sm group"
              >
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-[#FF3B30]/20 transition-colors">
                  <MdPhone size={18} />
                </div>
                <span>+91 7395863267</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 py-8 border-t border-white/10"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: '#FF3B30' }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg border border-white/20 text-gray-400 hover:border-[#FF3B30]/50 hover:text-[#FF3B30] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF3B30]/20"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright & CTA */}
        <div className="text-center border-t border-white/10 pt-8 mt-8">
          <p className="text-gray-400 text-sm mb-3">
            © {currentYear} Shrija Dhanalakshmi S M • All Rights Reserved
          </p>
          <p className="text-[#FF3B30] font-semibold text-sm mb-4">
            Open to Internships and Full-Time Opportunities
          </p>
          <p className="text-gray-500 text-xs">
            Built with React, Tailwind CSS and Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

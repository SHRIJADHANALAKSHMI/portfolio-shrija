import { motion } from 'framer-motion'
import { FaGithub, FaCode } from 'react-icons/fa'
import { SiLeetcode, SiCodechef } from 'react-icons/si'
import { MdArrowOutward } from 'react-icons/md'

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'GitHub',
      icon: <FaGithub size={40} />,
      stats: '50+ Repositories',
      url: 'https://github.com/SHRIJADHANALAKSHMI',
      color: 'from-gray-600 to-gray-800',
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode size={40} />,
      stats: '100+ Problems Solved',
      url: 'https://leetcode.com/u/Shrija16/',
      color: 'from-yellow-600 to-yellow-800',
    },
    {
      name: 'CodeChef',
      icon: <SiCodechef size={40} />,
      stats: '200+ Problems Solved',
      url: 'https://www.codechef.com/',
      color: 'from-orange-600 to-orange-800',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative py-20 px-4 md:px-6 overflow-hidden" id="coding-profiles">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF6B57]/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#FF3B30] mb-2 uppercase tracking-wide">Coding Profiles</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Connect With Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my coding profiles and see my problem-solving journey across different platforms
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {profiles.map((profile) => (
            <motion.div
              key={profile.name}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <motion.a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                className="flex flex-col items-center justify-center p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[#FF3B30]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF3B30]/30 cursor-pointer group"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                />

                {/* Icon */}
                <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-white/20 to-white/10 group-hover:from-[#FF3B30]/30 group-hover:to-[#FF6B57]/20 transition-all duration-300">
                  <div className="text-[#FF3B30] group-hover:scale-110 transition-transform duration-300">
                    {profile.icon}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>

                {/* Stats */}
                <p className="text-gray-300 font-semibold mb-6 text-center">{profile.stats}</p>

                {/* Button */}
                <motion.div
                  whileHover={{ gap: 12 }}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FF3B30] to-[#FF6B57] text-white rounded-full font-semibold transition-all duration-300"
                >
                  Visit {profile.name}
                  <MdArrowOutward className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CodingProfiles

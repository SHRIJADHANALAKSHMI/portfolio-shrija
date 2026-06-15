import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const AnimatedCounter = ({ targetValue, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startValue = 0
    const increment = targetValue / (duration / 16)

    const timer = setInterval(() => {
      startValue += increment
      if (startValue >= targetValue) {
        setCount(targetValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(startValue))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [targetValue, duration])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

const Stats = () => {
  const stats = [
    { label: 'Major Projects', value: 4, suffix: '+' },
    { label: 'Internships', value: 3, suffix: '' },
    { label: 'Coding Problems Solved', value: 300, suffix: '+' },
    { label: 'Certifications', value: 5, suffix: '+' },
  ]

  return (
    <section className="section-container bg-gradient-to-r from-dark-900 to-dark-800 dark:from-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
                  viewport={{ once: true }}
                  className="text-6xl md:text-7xl font-bold gradient-text mb-3"
                >
                  <AnimatedCounter
                    targetValue={stat.value}
                    duration={2000}
                    suffix={stat.suffix}
                  />
                </motion.div>
                <p className="text-lg md:text-xl text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats

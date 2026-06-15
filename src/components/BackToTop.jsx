import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdArrowUpward } from 'react-icons/md'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-red-500/50 z-40"
        >
          <MdArrowUpward size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop

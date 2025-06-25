import { motion } from 'framer-motion'

const Hero = () => {

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          background: 'linear-gradient(180deg, #0a0d11 0%, #141b26 20%, #1f2937 40%, #374151 60%, #4b5563 80%, #6b7280 100%)'
        }}
      />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-60 blur-[60px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 104, 71, 0.4) 0%, transparent 70%)',
            top: '-20%',
            right: '-10%'
          }}
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -50, 30, 20, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 0.9, 1.05, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-60 blur-[60px]"
          style={{
            background: 'radial-gradient(circle, rgba(160, 120, 80, 0.3) 0%, transparent 70%)',
            bottom: '-15%',
            left: '-5%'
          }}
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -50, 30, 20, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 0.9, 1.05, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -7
          }}
        />
        
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-60 blur-[60px]"
          style={{
            background: 'radial-gradient(circle, rgba(200, 150, 100, 0.2) 0%, transparent 70%)',
            top: '30%',
            left: '20%'
          }}
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -50, 30, 20, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 0.9, 1.05, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -14
          }}
        />
      </div>

      {/* Main content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50">
        <motion.h1 
          className="text-white font-light leading-tight tracking-wide mb-8 font-sans" 
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="block">Développez votre projet</span>
          <span className="block">Web Mobile Data sur mesure</span>
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-12 z-100 cursor-pointer"
        onClick={handleScrollClick}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-20 h-20 border border-white/30 rounded-full flex items-center justify-center hover:border-white transition-all duration-300">
          <div className="w-4 h-4 border-r border-b border-white/70 transform rotate-45 -mt-1" />
        </div>
      </motion.div>

    </section>
  )
}

export default Hero

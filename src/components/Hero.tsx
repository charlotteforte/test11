import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section ref={ref} id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background gradient with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-90"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #050608 20%, #0a0d11 40%, #141b26 60%, #1f2937 80%, #374151 100%)',
          y
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orb */}
        <motion.div
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-40 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(147, 197, 253, 0.3) 40%, transparent 70%)',
            top: '-30%',
            right: '-20%'
          }}
          animate={{
            x: [0, 50, -30, 60, 0],
            y: [0, -80, 50, 30, 0],
            scale: [1, 1.2, 0.8, 1.1, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Medium floating orb */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full opacity-50 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(16, 185, 129, 0.25) 50%, transparent 70%)',
            bottom: '-25%',
            left: '-15%'
          }}
          animate={{
            x: [0, 40, -25, 50, 0],
            y: [0, -60, 40, 25, 0],
            scale: [1, 1.15, 0.85, 1.05, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -10
          }}
        />
        
        {/* Small accent orb */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 70%)',
            top: '40%',
            left: '30%'
          }}
          animate={{
            x: [0, 35, -20, 45, 0],
            y: [0, -45, 35, 20, 0],
            scale: [1, 1.1, 0.9, 1.05, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -15
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Main content with enhanced animations */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-white font-light leading-tight tracking-wide mb-8 font-sans" 
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Développez votre projet
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Web Mobile Data sur mesure
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Solutions digitales innovantes conçues avec expertise et passion
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-12 z-100 cursor-pointer group"
        onClick={handleScrollClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="relative">
          <div className="w-20 h-20 border border-white/30 rounded-full flex items-center justify-center group-hover:border-white transition-all duration-500 backdrop-blur-sm bg-white/5">
            <motion.div 
              className="w-4 h-4 border-r border-b border-white/70 transform rotate-45 -mt-1"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        </div>
      </motion.div>

      {/* Ambient light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>
    </section>
  )
}

export default Hero

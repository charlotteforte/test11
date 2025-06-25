import { motion } from 'framer-motion'
import { HiCode, HiDeviceMobile, HiGlobe, HiLightningBolt } from 'react-icons/hi'

const Services = () => {
  const services = [
    {
      icon: HiCode,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      color: 'text-primary'
    },
    {
      icon: HiDeviceMobile,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      color: 'text-secondary'
    },
    {
      icon: HiGlobe,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies tailored to your business.',
      color: 'text-accent'
    },
    {
      icon: HiLightningBolt,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications optimized for speed and user experience.',
      color: 'text-primary'
    }
  ]

  return (
    <section id="services" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #374151 0%, #1f2937 20%, #141b26 40%, #0a0d11 60%, #050608 80%, #000000 100%)' }}>
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 197, 253, 0.2) 50%, transparent 70%)',
            top: '10%',
            right: '-10%'
          }}
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -40, 30, 20, 0],
            scale: [1, 1.1, 0.9, 1.05, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-25 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)',
            bottom: '20%',
            left: '-5%'
          }}
          animate={{
            x: [0, 25, -15, 35, 0],
            y: [0, -35, 25, 15, 0],
            scale: [1, 1.1, 0.9, 1.05, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -10
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-wide">
            Nos Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Des solutions digitales sur mesure pour propulser votre entreprise vers l'excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const accentColors = [
              'from-blue-500/15 to-cyan-500/10',
              'from-emerald-500/15 to-teal-500/10', 
              'from-sky-500/15 to-blue-500/10',
              'from-teal-500/15 to-green-500/10'
            ]
            const hoverColors = [
              'group-hover:from-blue-500/25 group-hover:to-cyan-500/20',
              'group-hover:from-emerald-500/25 group-hover:to-teal-500/20',
              'group-hover:from-sky-500/25 group-hover:to-blue-500/20', 
              'group-hover:from-teal-500/25 group-hover:to-green-500/20'
            ]
            const borderColors = [
              'group-hover:border-blue-400/40',
              'group-hover:border-emerald-400/40',
              'group-hover:border-sky-400/40',
              'group-hover:border-teal-400/40'
            ]
            return (
              <motion.div
                key={service.title}
                className={`relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 ${borderColors[index]} transition-all duration-700 group overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -20, scale: 1.03 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${accentColors[index]} ${hoverColors[index]} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <service.icon className={`w-14 h-14 text-white mb-8 relative z-10 group-hover:scale-125 transition-all duration-500 drop-shadow-lg`} />
                <h3 className="text-2xl font-light text-white mb-6 relative z-10 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed relative z-10 group-hover:text-gray-100 transition-colors duration-500">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

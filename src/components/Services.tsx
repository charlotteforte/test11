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
    <section id="services" className="py-20" style={{ background: 'linear-gradient(180deg, #374151 0%, #4b5563 15%, #5a6478 30%, #6b7280 45%, #737a85 60%, #7a8189 75%, #898F9B 85%, #9ba1ab 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <service.icon className={`w-14 h-14 text-white mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-2xl font-light text-white mb-6 relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

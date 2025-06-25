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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <service.icon className={`w-12 h-12 ${service.color} mb-6`} />
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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

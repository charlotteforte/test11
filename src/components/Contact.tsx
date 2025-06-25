import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const Contact = () => {
  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      info: 'hello@terros.com',
      color: 'text-primary'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      color: 'text-secondary'
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      info: 'San Francisco, CA',
      color: 'text-accent'
    }
  ]

  return (
    <section id="contact" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #374151 0%, #1f2937 20%, #141b26 40%, #0a0d11 60%, #050608 80%, #000000 100%)' }}>
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full opacity-15 blur-[85px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.2) 50%, transparent 70%)',
            top: '20%',
            right: '5%'
          }}
          animate={{
            x: [0, 25, -15, 35, 0],
            y: [0, -30, 20, 15, 0],
            scale: [1, 1.1, 0.9, 1.05, 1]
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-20 blur-[60px]"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 70%)',
            bottom: '30%',
            left: '10%'
          }}
          animate={{
            x: [0, 20, -10, 30, 0],
            y: [0, -20, 15, 10, 0],
            scale: [1, 1.1, 0.9, 1.05, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -12
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/10 p-3 rounded-full">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-white/80">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 resize-none"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex justify-center">
                  {"Send Message".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      initial={{ y: 0 }}
                      whileHover={{ 
                        y: [-2, -8, -2],
                        transition: { 
                          delay: index * 0.05,
                          duration: 0.4,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

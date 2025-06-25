import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ]

  return (
    <section id="about" className="py-20" style={{ background: 'linear-gradient(180deg, #898F9B 0%, #9ba1ab 25%, #a1a8b5 50%, #b4bac3 75%, #c1c7d0 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-wide">
              À Propos de Terros
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Nous sommes une équipe de développeurs et designers passionnés, dédiés à créer 
              des expériences digitales exceptionnelles. Notre expertise couvre le développement web, 
              les applications mobiles et la stratégie digitale.
            </p>
            <p className="text-xl text-white mb-12 leading-relaxed">
              Avec un focus sur l'innovation et la qualité, nous aidons les entreprises à transformer 
              leur présence digitale et atteindre leurs objectifs grâce à des solutions sur mesure.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 hover:bg-white/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-4xl font-light text-white mb-3">
                    {stat.number}
                  </div>
                  <div className="text-white font-medium">
                    {stat.label}
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
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

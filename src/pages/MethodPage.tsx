import { motion } from 'framer-motion'
import { HiLightBulb, HiCode, HiCloudUpload, HiTrendingUp } from 'react-icons/hi'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const MethodPage = () => {
  const steps = [
    {
      number: '1',
      icon: HiLightBulb,
      title: 'Conception',
      description: 'Nous imaginons et planifions avec vous les fonctionnalités les plus à mêmes de répondre à vos problématiques métier.'
    },
    {
      number: '2',
      icon: HiCode,
      title: 'Développement agile',
      description: 'Applications web, mobile, outils d\'automatisation... Nous mettons nos nombreux savoirs faire à votre service en itérant de manière agile tout au long du processus de développement.'
    },
    {
      number: '3',
      icon: HiCloudUpload,
      title: 'Déploiement',
      description: 'Votre projet mis en ligne en un temps record, sur votre propre infrastructure ou nos serveurs dédiés sécurisés.'
    },
    {
      number: '4',
      icon: HiTrendingUp,
      title: 'Évolution',
      description: 'Un bon produit est un produit qui évolue. Nous demeurons à vos côtés sur toute la durée de votre projet pour assurer la maintenance et l\'ajout de nouvelles fonctionnalités.'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #000000 0%, #050608 20%, #0a0d11 40%, #141b26 60%, #1f2937 80%, #374151 100%)' }}>
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(147, 197, 253, 0.25) 40%, transparent 70%)',
              top: '-20%',
              right: '-15%'
            }}
            animate={{
              x: [0, 40, -25, 50, 0],
              y: [0, -60, 40, 25, 0],
              scale: [1, 1.15, 0.85, 1.05, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-25 blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)',
              bottom: '-10%',
              left: '-10%'
            }}
            animate={{
              x: [0, 30, -20, 40, 0],
              y: [0, -40, 30, 20, 0],
              scale: [1, 1.1, 0.9, 1.05, 1]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -10
            }}
          />

          {/* Floating particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                top: `${30 + i * 20}%`,
                left: `${15 + i * 15}%`
              }}
              animate={{
                y: [-15, -45, -15],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-light text-white mb-8 tracking-wide"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Méthode de développement agile
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-4xl font-light bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Prototyper. Développer. Itérer.
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Notre méthode de développement Web et Mobile agile vise à concevoir des produits de manière efficace et pragmatique.
            </motion.p>
          </motion.div>
        </div>

        {/* Ambient light effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </div>
      </section>

      {/* Method Steps Section */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #374151 0%, #1f2937 20%, #141b26 40%, #0a0d11 60%, #050608 80%, #000000 100%)' }}>
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[90px]"
            style={{
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 70%)',
              top: '20%',
              right: '10%'
            }}
            animate={{
              x: [0, 25, -15, 35, 0],
              y: [0, -30, 20, 15, 0],
              scale: [1, 1.1, 0.9, 1.05, 1]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[80px]"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, rgba(16, 185, 129, 0.15) 50%, transparent 70%)',
              bottom: '30%',
              left: '5%'
            }}
            animate={{
              x: [0, 20, -10, 30, 0],
              y: [0, -25, 15, 10, 0],
              scale: [1, 1.1, 0.9, 1.05, 1]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: -8
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-left mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Développer une plateforme ou application sur mesure : mode d'emploi
            </h2>
            <p className="text-xl text-gray-200 max-w-5xl leading-relaxed mb-6">
              Notre méthode de développement agile se découpe en 4 étapes successives : conception, développement, déploiement, évolution.
            </p>
            <p className="text-lg text-gray-300 max-w-5xl leading-relaxed">
              Ces 4 étapes visent à atteindre un objectif précis : lancer une première version de votre projet dans un délai restreint, afin de le confronter dès que possible à vos utilisateurs cibles et mettre à profit leurs retours pour itérer efficacement sur le produit.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((step, index) => {
              const accentColors = [
                'from-blue-500/20 to-cyan-500/10',
                'from-emerald-500/20 to-teal-500/10',
                'from-sky-500/20 to-blue-500/10',
                'from-teal-500/20 to-green-500/10'
              ]
              const hoverColors = [
                'group-hover:from-blue-500/30 group-hover:to-cyan-500/20',
                'group-hover:from-emerald-500/30 group-hover:to-teal-500/20',
                'group-hover:from-sky-500/30 group-hover:to-blue-500/20',
                'group-hover:from-teal-500/30 group-hover:to-green-500/20'
              ]
              const numberColors = [
                'group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500',
                'group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500',
                'group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-blue-500',
                'group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-green-500'
              ]
              const borderColors = [
                'group-hover:border-blue-400/40',
                'group-hover:border-emerald-400/40',
                'group-hover:border-sky-400/40',
                'group-hover:border-teal-400/40'
              ]
              return (
                <motion.div
                  key={step.number}
                  className={`relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 ${borderColors[index]} transition-all duration-700 group overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15, scale: 1.03 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${accentColors[index]} ${hoverColors[index]} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="flex items-start space-x-6 relative z-10">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-white/20 ${numberColors[index]} rounded-full flex items-center justify-center mb-4 group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                        <span className="text-2xl font-light text-white">{step.number}</span>
                      </div>
                      <step.icon className="w-12 h-12 text-white mx-auto group-hover:scale-125 transition-transform duration-500 drop-shadow-lg" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-white mb-4 group-hover:text-white transition-colors duration-500">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MethodPage

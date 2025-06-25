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
      <section className="pt-32 pb-20" style={{ background: 'linear-gradient(180deg, #000000 0%, #050608 20%, #0a0d11 40%, #141b26 60%, #1f2937 80%, #374151 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-wide">
              Méthode de développement agile
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-white/90 mb-8">
              Prototyper. Développer. Itérer.
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Notre méthode de développement Web et Mobile agile vise à concevoir des produits de manière efficace et pragmatique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Method Steps Section */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #374151 0%, #4b5563 15%, #5a6478 30%, #6b7280 45%, #737a85 60%, #7a8189 75%, #898F9B 85%, #9ba1ab 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((step, index) => {
              const accentColors = [
                'from-red-500/20 to-orange-500/10',
                'from-blue-500/20 to-purple-500/10',
                'from-green-500/20 to-emerald-500/10',
                'from-purple-500/20 to-pink-500/10'
              ]
              const hoverColors = [
                'group-hover:from-red-500/30 group-hover:to-orange-500/20',
                'group-hover:from-blue-500/30 group-hover:to-purple-500/20',
                'group-hover:from-green-500/30 group-hover:to-emerald-500/20',
                'group-hover:from-purple-500/30 group-hover:to-pink-500/20'
              ]
              const numberColors = [
                'group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500',
                'group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500',
                'group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500',
                'group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500'
              ]
              return (
                <motion.div
                  key={step.number}
                  className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 group overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${accentColors[index]} ${hoverColors[index]} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="flex items-start space-x-6 relative z-10">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-white/20 ${numberColors[index]} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                        <span className="text-2xl font-light text-white">{step.number}</span>
                      </div>
                      <step.icon className="w-12 h-12 text-white mx-auto group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-white mb-4 group-hover:text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
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

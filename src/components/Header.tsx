import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Méthode', href: '/method', type: 'route' },
    { name: 'Agence', href: '#services', type: 'anchor' },
    { name: 'Cas Client', href: '#about', type: 'anchor' },
    { name: 'Intégration', href: '#contact', type: 'anchor' },
    { name: 'Leo, Premier développeur IA', href: '#leo', type: 'anchor' },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[200] bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <motion.div
              className="text-xl font-light text-white tracking-widest"
              whileHover={{ scale: 1.05 }}
            >
              Terros
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center">
            <ul className="flex gap-8 items-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.type === 'route' ? (
                    <Link to={item.href}>
                      <motion.span
                        className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-light whitespace-nowrap"
                        whileHover={{ y: -2 }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.a
                      href={location.pathname === '/' ? item.href : `/${item.href}`}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-light whitespace-nowrap"
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                    </motion.a>
                  )}
                </li>
              ))}
              <li>
                <motion.a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-light ml-4"
                  whileHover={{ y: -2 }}
                >
                  EN
                </motion.a>
              </li>
            </ul>
          </nav>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-black/90 backdrop-blur-md z-[100]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-center">
              {navItems.map((item) => (
                item.type === 'route' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-white/70 hover:text-white text-sm font-light"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={location.pathname === '/' ? item.href : `/${item.href}`}
                    className="block text-white/70 hover:text-white text-sm font-light"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="#"
                className="block text-white/70 hover:text-white text-sm font-light"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                EN
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header

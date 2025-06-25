import { FunctionComponent, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './MeetLeoCard.module.css';

const MeetLeoCard: FunctionComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={styles.meetLeoCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 0.98
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className={styles.cardBackground}
        animate={{
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(88, 115, 156, 0.35) 30%, rgba(30, 40, 54, 0.5) 70%, rgba(0, 0, 0, 0.7) 100%)'
            : 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(88, 115, 156, 0.25) 30%, rgba(30, 40, 54, 0.4) 70%, rgba(0, 0, 0, 0.6) 100%)'
        }}
        transition={{ duration: 0.4 }}
      />
      
      <motion.div 
        className={styles.meetLeo}
        animate={{
          x: isHovered ? 8 : 0,
          y: isHovered ? -2 : 0
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        Meet Leo
      </motion.div>
      
      <motion.div 
        className={styles.iaDeveloppeur}
        animate={{
          x: isHovered ? 8 : 0,
          y: isHovered ? -2 : 0
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.05 }}
      >
        IA Développeur
      </motion.div>
      
      <motion.div 
        className={styles.arrowContainer}
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? 0 : -45
        }}
        transition={{ 
          duration: 0.3, 
          ease: [0.4, 0, 0.2, 1],
          delay: isHovered ? 0.1 : 0
        }}
      >
        <motion.div 
          className={styles.arrowCircle}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          <FiArrowUpRight className={styles.arrowIcon} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MeetLeoCard;

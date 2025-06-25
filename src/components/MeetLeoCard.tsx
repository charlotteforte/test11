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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.cardBackground} />
      <div className={styles.meetLeo}>Meet Leo</div>
      <div className={styles.iaDeveloppeur}>IA Développeur</div>
      
      <motion.div 
        className={styles.arrowContainer}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0 
        }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.arrowCircle} />
        <FiArrowUpRight className={styles.arrowIcon} />
      </motion.div>
    </motion.div>
  );
};

export default MeetLeoCard;

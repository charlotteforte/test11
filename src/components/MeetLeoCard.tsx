import { FunctionComponent, useState } from 'react';
import { motion } from 'framer-motion';
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
      <div className={styles.cardBackground} />
      
      <div className={styles.meetLeo}>Meet Leo</div>
      <div className={styles.iaDeveloppeur}>IA Développeur</div>
      
    </motion.div>
  );
};

export default MeetLeoCard;

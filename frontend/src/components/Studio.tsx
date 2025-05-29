import { photography } from '../assets/photography';

import { motion } from 'framer-motion';

// Define type for photography items
interface PhotographyItem {
  id: number;
  img: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const Studio: React.FC = () => {
  const weddingPhotographer = photography.filter(
    (item) => item.catergory === 'studio',
  );

  return (
    <motion.div
      className="mt-20 md:mt-40 mb-20 px-2 md:max-w-6xl mx-auto "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {weddingPhotographer.map((item: PhotographyItem) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={item.img}
              alt="Photography"
              className="w-full h-auto object-cover shadow-2xl transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Studio;

import { PhotoProvider, PhotoView } from 'react-photo-view';
import { photography } from '../../assets/photography';
import { motion } from 'framer-motion';

// Example animation variants (you can customize)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// If you have a TypeScript type for your photography items
// type PhotographyItem = {
//   id: string;
//   img: string;
// };

const MainScreen = () => {
  console.log(photography);
  return (
    <motion.div
      className="mb-20 px-2 md:max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PhotoProvider>
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {photography.map((item /*: PhotographyItem*/) => (
            <PhotoView id={item.id} src={item.img}>
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
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </motion.div>
  );
};

export default MainScreen;

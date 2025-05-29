import { Carousel } from 'flowbite-react';
import bg1 from '../../assets/bg.jpeg';
import bg2 from '../../assets/bg2.jpeg';
import bg3 from '../../assets/bg3.jpeg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MainSlider = () => {
  const images = [bg1, bg2, bg3];

  return (
    <div className="">
      <div className="relative h-screen w-full overflow-visible">
        <Carousel>
          {images.map((image, index) => (
            <div key={index} className="relative h-full w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="text-center text-white space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Link
                      to="niche"
                      className="bg-white/50 hover:bg-white/80 text-black font-bold py-15 px-5  shadow-lg transition duration-300"
                    >
                      CHECK ME OUT
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MainSlider;

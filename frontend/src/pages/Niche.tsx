import { Link } from 'react-router-dom';

import wed from '../assets/wedd.jpg'
import life from '../assets/lifestyle.jpg'
import studio from '../assets/studio.jpg'

const Niche = () => {
  return (
    <div className="mt-20 md:mt-40 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:max-w-6xl mx-auto">
        <Link
          to="collection"
          style={{
            backgroundImage: `url(${wed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="h-64 flex items-center justify-center text-white text-2xl font-bold shadow-lg rounded-xl"
        >
          <p>WEDDING</p>
        </Link>

        <Link
          to="lifestyle"
          style={{
            backgroundImage: `url(${life})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="h-64 bg-gray-800 flex items-center justify-center text-white text-2xl font-bold shadow-lg rounded-xl"
        >
          <p>LIFESTYLE</p>
        </Link>

        <Link
          to="studio"
          style={{
            backgroundImage: `url(${studio})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="h-64 bg-gray-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg rounded-xl"
        >
          <p>STUDIO</p>
        </Link>
      </div>
    </div>
  );
};

export default Niche;

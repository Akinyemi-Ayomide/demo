import { Link } from 'react-router-dom';

import wed from '../assets/wedd.jpg';
import life from '../assets/lifestyle.jpg';
import studio from '../assets/studio.jpg';

const Niche = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:max-w-6xl mx-auto">
        <Link
          to="collection"
          style={{ backgroundImage: `url(${wed})` }}
          className="h-64  bg-cover bg-center flex items-center justify-center text-white text-2xl font-bold shadow-lg rounded-xl transition-transform hover:scale-105"
        >
          <p>WEDDING</p>
        </Link>

        <Link
          to="lifestyle"
          style={{ backgroundImage: `url(${life})` }}
          className="h-64 bg-cover bg-center flex items-center justify-center text-white text-2xl font-bold shadow-lg rounded-xl transition-transform hover:scale-105"
        >
          <p>LIFESTYLE</p>
        </Link>

        <Link
          to="studio"
          style={{ backgroundImage: `url(${studio})` }}
          className="h-64 bg-cover bg-center flex items-center justify-center text-white text-2xl font-bold shadow-lg rounded-xl transition-transform hover:scale-105"
        >
          <p>STUDIO</p>
        </Link>
      </div>
    </div>
  );
};

export default Niche;

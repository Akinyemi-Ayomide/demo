import { FaWhatsapp } from 'react-icons/fa6';
const WeddingPrice = () => {
  const phoneNumber = '23473222';
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          WEDDING <span className="text-orange-300">PRICE LIST</span>{' '}
        </h2>
        <p className="mt-4 text-gray-600 italic">
          Choose a plan that fits your needs.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Basic Plan */}
        <div className="hover:bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">Basic</h3>
          <p className="text-3xl font-bold text-orange-300 mt-2">
            ₦9<span className="text-base font-normal">/mo</span>
          </p>
          <ul className="mt-6 space-y-2 text-orange">
            <li>
              ✔️ 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Esse, neque?
            </li>
            <li>
              ✔️ 5 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Esse, neque?
            </li>
            <li>
              ✔️ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              neque?
            </li>
          </ul>
          <button className="mt-6 w-full bg-orange-300 text-white py-2 rounded-lg hover:bg-orange-400 flex flex-row justify-center">
            <span className="mr-4">Reach out</span>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </button>
        </div>

        {/* Pro Plan */}
        <div className=" rounded-2xl shadow-lg p-6  hover:bg-white">
          <h3 className="text-xl font-semibold text-gray-800">Pro</h3>
          <p className="text-3xl font-bold text-orange-300 mt-2">
            ₦29<span className="text-base font-normal">/mo</span>
          </p>
          <ul className="mt-6 space-y-2 text-gray-600">
            <li>
              ✔️ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              neque?
            </li>
            <li>
              ✔️ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              neque?
            </li>
            <li>
              ✔️ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              neque?
            </li>
            <li>
              ✔️ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              neque?
            </li>
          </ul>
          <button className="mt-6 w-full bg-orange-300 text-white py-2 rounded-lg hover:bg-orange-400 flex flex-row justify-center">
            <span className="mr-4">Reach out</span>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </button>
        </div>

        {/* Premium Plan */}
        <div className=" rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">Premium</h3>
          <p className="text-3xl font-bold text-orange-300 mt-2">
            ₦49<span className="text-base font-normal">/mo</span>
          </p>
          <ul className="mt-6 space-y-2 text-gray-600">
            <li>
              ✔️ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              neque?
            </li>
            <li>
              ✔️ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              neque?
            </li>
            <li>
              ✔️ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              neque?
            </li>
            <li>
              ✔️ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              neque?
            </li>
          </ul>
          <button className="mt-6 w-full bg-orange-300 text-white py-2 rounded-lg hover:bg-orange-400 flex flex-row justify-center">
            <span className="mr-4">Reach out</span>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeddingPrice;

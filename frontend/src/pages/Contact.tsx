import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto px-4 mb-10 ">
        {/* Contact Info */}
        <div className="grid  md:grid-cols-3 gap-6">
          {[ 
            {
              icon: <FaMapMarkerAlt className="w-6 h-6 md:w-10 md:h-10 text-gray-500" />,
              title: "Address",
              content: "***********",
            },
            {
              icon: <FaPhoneAlt className="w-6 h-6 md:w-10 md:h-10 text-green-500" />,
              title: "Hotline",
              content: "**** *** *** ****",
            },
            {
              icon: <IoMail className="w-6 h-6 md:w-10 md:h-10 text-blue-500" />,
              title: "Email",
              content: "*******************",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex justify-center items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {item.icon}
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-orange-300">{item.title}</h2>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="mt-20 max-w-lg mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-center">
            <span className="text-orange-300">GET</span> IN TOUCH
          </h1>
          <form className="flex flex-col gap-6 mt-6">
            <motion.label className="flex flex-col" variants={fadeUp} transition={{ delay: 0.1 }}>
              <span className="text-gray-700">Full Name</span>
              <input
                className="w-full border-b border-orange-300 outline-none py-2 px-2"
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                required
              />
            </motion.label>
            <motion.label className="flex flex-col" variants={fadeUp} transition={{ delay: 0.2 }}>
              <span className="text-gray-700">Email</span>
              <input
                className="w-full border-b border-orange-300 outline-none py-2 px-2"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </motion.label>
            <motion.label className="flex flex-col" variants={fadeUp} transition={{ delay: 0.3 }}>
              <span className="text-gray-700">Message</span>
              <textarea
                className="w-full border-b border-orange-300 outline-none py-2 px-2"
                name="message"
                placeholder="Enter your message"
                rows={4}
                required
              ></textarea>
            </motion.label>
            <motion.button
              type="submit"
              className="w-full bg-orange-300 py-3 text-white font-semibold rounded-md hover:bg-orange-400 transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

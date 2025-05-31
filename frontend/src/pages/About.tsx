import { motion } from 'framer-motion';
// import { FaReact, FaBootstrap, FaDiscord, FaSlack } from 'react-icons/fa6';
// import { RiTailwindCssFill } from 'react-icons/ri';
// import { BiLogoTypescript } from 'react-icons/bi';
// import { FiFigma } from 'react-icons/fi';
// import { TbBrandFramerMotion } from 'react-icons/tb';
import a from '../assets/a.jpeg';

const About = () => {
  return (
    <>
      <div className="px-4 md:px-10   md:max-w-6xl mx-auto">
        {/* About Text & Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <img src={a} alt="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 "
          >
            {/* Left: About Description */}
            <div className="md:col-span-8">
              <h1 className="text-2xl font-bold capitalize">Photographer</h1>
              <p className="mt-2  leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                fugiat. Nisi beatae molestiae amet. Voluptatem repellendus
                minima nemo unde dolorem omnis atque hic doloremque dolore a qui
                consectetur voluptatum blanditiis porro odit, in, repellat dicta
                vel ad cum eum! Ipsa sit corporis ducimus, provident ipsam
                quaerat, vero corrupti voluptas earum voluptatibus fugit minima
                aspernatur praesentium natus, aliquam facilis numquam? Tenetur
                delectus iusto excepturi impedit maiores mollitia, laborum
                nesciunt vel magnam esse, repudiandae obcaecati accusamus aut
                ipsa dignissimos sapiente aperiam reprehenderit similique!
                Incidunt distinctio nisi debitis a mollitia. Officiis odit ad
                eos doloremque rem, culpa error libero sapiente hic assumenda
                doloribus.
              </p>
            </div>

            {/* Right: Personal Info */}
            <div className="md:col-span-4 rounded-lg space-y-2">
              <h1 className="text-2xl font-bold capitalize mb-2">
                Personal Information
              </h1>
              <p>
                <span className="font-bold italic">Name:</span> Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                <span className="font-bold italic">Residence:</span> Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                <span className="font-bold italic">Email:</span> Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                <span className="font-bold italic">Phone:</span> Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                <span className="font-bold italic">Freelance:</span> Lorem ipsum
                dolor sit amet.
              </p>

              <a href="/Akinyemi_Ayomide.pdf" download="">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-2 px-4 mt-3 border border-black hover:bg-black text-black hover:text-white transition duration-300"
                >
                  Download Resume
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-14 text-black"
        >
          {/* Frontend Skills */}
          {/* <div>
            <h1 className="font-bold text-yellow-500 text-xl mb-2">Frontend</h1>
            <p className="flex items-center">
              <FaReact className="mr-2 " /> React
            </p>
            <p className="flex items-center">
              <RiTailwindCssFill className="mr-2" /> Tailwind CSS
            </p>
            <p className="flex items-center">
              <BiLogoTypescript className="mr-2" /> TypeScript
            </p>
            <p className="flex items-center">
              <FiFigma className="mr-2" /> Figma
            </p>
            <p className="flex items-center">
              <TbBrandFramerMotion className="mr-2" /> Framer Motion
            </p>
            <p className="flex items-center">
              <FaBootstrap className="mr-2" /> Bootstrap
            </p>
          </div> */}

          {/* Team Collaboration */}
          {/* <div>
            <h1 className="font-bold text-yellow-500 text-xl mb-2">
              Team Collaboration
            </h1>
            <p className="flex items-center">
              <FaDiscord className="mr-2" /> Discord
            </p>
            <p className="flex items-center">
              <FaSlack className="mr-2" /> Slack
            </p>
            <p className="flex items-center">📝 Trello</p>
          </div> */}

          {/* Remote Support */}
          {/* <div>
            <h1 className="font-bold text-yellow-500 text-xl mb-2">
              Remote Support
            </h1>
            <p className="flex items-center">📹 Google Meet</p>
            <p className="flex items-center">🖥️ TeamViewer</p>
            <p className="flex items-center">💼 MS Teams</p>
          </div> */}

          {/* Hosting Services */}
          {/* <div>
            <h1 className="font-bold text-yellow-500 text-xl mb-2">
              Hosting Services
            </h1>
            <p className="flex items-center">🌐 Namecheap</p>
            <p className="flex items-center">🚀 Vercel</p>
          </div> */}
        </motion.div>
      </div>
    </>
  );
};

export default About;

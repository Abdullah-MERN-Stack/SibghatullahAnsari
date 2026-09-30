"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Samplethis Full-Stack Platform",
    img: "/Project1.jpeg",
    desc: "Built a responsive digital music marketplace with asset filtering, pagination, admin order management, and automated licensing.",
    link: { Link: "http://samplethis.com/", IsGithub: false, IsPrivate: false },
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "MERN-Stack Grocery Store",
    img: "/Project2.jpeg",
    desc: "Built a full-stack grocery platform using React, Node.js, Express, and MongoDB with secure authentication, inventory, and checkout.",
    link: {
      Link: "https://www.naurahs.com/",
      IsGithub: false,
      IsPrivate: false,
    },
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Full-Stack E-Commerce Platform",
    img: "/Project3.jpeg",
    desc: "Architected standalone full-stack e-commerce platforms using Next.js, React, TypeScript, Express.js, and MongoDB.",
    link: {
      Link: "https://oslo-one.vercel.app/",
      IsGithub: false,
      IsPrivate: false,
    },
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Websmith Solutions",
    img: "/Project4.jpeg",
    desc: "Build my own company with my team in Full-Stack, for providing online services and providing online courses.",
    link: {
      Link: "https://websmithsolutions.vercel.app/",
      IsGithub: false,
      IsPrivate: false,
    },
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "Real-Time One-To-One Chat Platform",
    img: "/Project5.jpeg",
    desc: "Built a real-time instant messaging platform utilizing Socket.io and socket.io-client for persistent, low-latency communication.",
    link: {
      Link: "https://github.com/SibghatUllah295295/One-2-One-Chatting-App_Socket.io_MERN",
      IsGithub: true,
      IsPrivate: false,
    },
  },
  {
    id: 6,
    color: "from-blue-300 to-violet-300",
    title: "Point Of Sale (POS) System",
    img: "/Project6.jpeg",
    desc: "Developed a secure, desktop-optimized POS system with scalable backend services and robust authorization mechanisms.",
    link: { Link: "", IsGithub: false, IsPrivate: true },
  },
  {
    id: 7,
    color: "from-violet-300 to-purple-300",
    title: "Hilma BioCare",
    img: "/Project7.jpeg",
    desc: "Built a medical e-commerce platform with product filtering, secure cart, admin dashboard, order management, and cryptocurrency payments.",
    link: { Link: "", IsGithub: false, IsPrivate: true },
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "Full-Stack Grocery Store",
    img: "/Project8.jpeg",
    desc: "Built a full-stack grocery platform with React, Node.js, Express, and MongoDB, featuring secure authentication, admin dashboard, inventory, and checkout",
    link: { Link: "", IsGithub: false, IsPrivate: true },
  },
  {
    id: 9,
    color: "from-red-300 to-blue-300",
    title: "Aparvi Webased platform",
    img: "/Project9.jpeg",
    desc: "Developed an e-learning platform with course purchasing and a custom Quill.js admin editor.",
    link: { Link: "https://aparavic.om/", IsGithub: false, IsPrivate: false },
  },
  {
    id: 10,
    color: "from-blue-300 to-violet-300",
    title: "Blood Bank Management System",
    img: "/Project10.jpg",
    desc: "Built a full-stack blood bank management system using the MERN stack.",
    link: {
      Link: "https://github.com/SibghatUllah295295/Blood-Bank-Management-System-_-MERN",
      IsGithub: true,
      IsPrivate: false,
    },
  },
];

const NumWidth = projects.length * 70 + 200;
let width = `${NumWidth}vh`;
let size = 89;

export default function PortfolioPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${size}%`]);

  return (
    <motion.div
      className="w-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div ref={ref} className="relative w-full" style={{ height: width }}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center px-4">
          My Works
        </div>

        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen shrink-0 flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />

            {projects.map((project) => (
              <div
                key={project.id}
                className={`h-screen w-[80vw] shrink-0 flex items-center justify-center bg-gradient-to-r ${project.color} px-4`}
              >
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 text-black pt-5 w-72 sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px]">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    {project.title}
                  </h1>

                  <div className="relative w-full aspect-video">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="rounded-2xl object-cover"
                      sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 500px, 600px"
                    />
                  </div>

                  <p className="text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed">
                    {project.desc}
                  </p>

                  {!project.link.IsPrivate && (
                    <Link
                      href={project.link.Link}
                      className="flex justify-end"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-2 text-sm sm:p-3 sm:text-base lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold rounded cursor-pointer transition-all duration-500 hover:bg-black hover:text-white">
                        {project.link.IsGithub ? "Github" : "See Demo"}
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* This section will now be reachable by normal vertical scrolling */}
      <div className="w-screen min-h-screen flex flex-col gap-8 sm:gap-12 md:gap-16 items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          Do you have a project?
        </h1>

        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-full h-full"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150,150 m -60,0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>

            <text fill="#000">
              <textPath
                href="#circlePath"
                className="text-sm sm:text-base md:text-xl"
              >
                Full-Stack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>

          <Link
            href="/contact"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 absolute inset-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-xs sm:text-sm md:text-base"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

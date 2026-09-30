"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 w-full lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="image" fill className="object-contain" />
        </div>
        <div className="h-auto w-full lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Highly skilled MERN Stack Developer
          </h1>
          <p className="text-xl">
            3+ year exp. in Next.js, React.js, Node.js, TypeScript. Skilled in
            scalable apps, REST APIs, database optimization, and payment
            integration. Focused on clean, maintainable code and team
            collaboration.
          </p>
          <div className="flex gap-4 w-full">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
                Contact Me
              </button>
            </Link>
            <Link href="/cv.docx" target="_blank">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

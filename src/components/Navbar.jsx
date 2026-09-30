"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255,255,255)",
  },
};
const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255,255,255)",
  },
};

const listVariants = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  closed: {
    x: "-10",
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-2 w-1/3">
        {links.map((link) => (
          <Link
            className={`${pathName === link.url || (link.url !== "/" && pathName.includes(link.url)) ? "bg-black text-white rounded px-2 py-0.5" : "bg-white text-black"}`}
            key={link.title}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Sibghatullah</span>
          <span className="w-12 h-8 rounded flex items-center justify-center bg-white text-black">
            Ansari
          </span>
        </Link>
      </div>
      <div className="hidden  md:flex gap-4 w-1/3">
        <Link target="_blank" href="https://github.com/sibghatullah295295">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/people/Sibghat-Ullah/pfbid0M4iNJdhTMuz3rwuSvsjDNnN64DHK1MspMuuxoxqfovPshjcE9c1QX8soe3VYsEvgl/"
        >
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/sibghatullah295?_l=en_US"
        >
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/cv.docx" target="_blank">
          <Image src="/CV.png" alt="" width={24} height={24} />
        </Link>
      </div>
      <div className="md:hidden z-40">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={isMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={isMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={isMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {isMenuOpen && (
          <motion.div
            variants={listVariants}
            initial={"closed"}
            animate={"opened"}
            className="h-screen w-screen absolute left-0 top-0 bg-black text-white flex flex-col justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariants}>
                <Link
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="flex items-center justify-center"
                  href={link.url}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const MOBILE_NAV_ITEMS = [
  { id: 0, navTitle: "home" },
  { id: 3, navTitle: "[write]" },
  { id: 4, navTitle: "contact" }
];



export default function Navbar() {
  const [NavOpen, setNavOpen] = useState(false);
  const [language, setLanguage] = useState('NO'); // State for language
  // Animation variants

  const toggleMenu = () => {
    setNavOpen((prev) => !prev);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'NO' ? 'EN' : 'NO');
  };
  
  const hideNavItemsVariant = {
    opened: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
    closed: { opacity: 1, y: "0%", transition: { delay: 1.1, duration: 0.5, ease: "easeInOut" } }
  };

  const MenuVariant = {
    opened: { y: "0%", transition: { delay: 0.15, duration: 1.1, ease: [0.74, 0, 0.19, 1.02] } },
    closed: { y: "-100%", transition: { delay: 0.35, duration: 0.63, ease: [0.74, 0, 0.19, 1.02] } }
  };

  const fadeInVariant = {
    opened: { opacity: 1, transition: { delay: 1.2 } },
    closed: { opacity: 0 }
  };

  const ulVariant = {
    opened: { transition: { delayChildren: 1, staggerChildren: 0.18 } },
    closed: { transition: { staggerChildren: 0.06, staggerDirection: -1 } }
  };

  const liVariant = {
    opened: { opacity: 1, y: "0%", transition: { duration: 0.65, ease: "easeOut" } },
    closed: { opacity: 0, y: "100%", transition: { duration: 0.25, ease: "easeInOut" } }
  };

  return (
    <div className="">
        <nav className="h-full overflow-y-hidden bg-transparent ">
        <motion.nav
            initial="closed"
            animate={NavOpen ? "opened" : "closed"}
            className="flex justify-between p-[25px_30px] md:p-[25px_50px]"
        >
            {/* Logo Container */}
            <div className="overflow-y-hidden">
            <motion.h1 variants={hideNavItemsVariant} className="font-sen text-lg grid grid-flow-col">
              <Link href="/">
              <div className="relative flex flex-row">
                <Image
                  src="/images/icons/logo.svg"
                  width={30}
                  height={30}
                  alt="logo"
                />
                <p className="text-md fold-bold font-sen mt-2 hidden md:flex"><b></b></p>
              </div>
              </Link>

            </motion.h1>
            <motion.div variants={hideNavItemsVariant} className="absolute text-xs flex top-0 right-12 items-center">
              <LanguageSwitch language={language} setLanguage={setLanguage} /> {/* Component for language switch */}
            </motion.div>

            </div>

            {/* Menu Trigger */}
            <div className="relative flex flex-row gap-10">
              <div className="overflow-y-hidden">
              <motion.div
                  variants={hideNavItemsVariant}
                  onClick={() => setNavOpen(true)}
                  className="cursor-pointer hover:opacity-75"
              >
                <button
                  className="absolute right-0 menu-button m-2 w-9 h-4 flex flex-col justify-between items-center md:hidden"
                  onClick={toggleMenu}
                >
                  {/* Hamburger bars */}
                  <span
                    className={`bar block bg-black w-full h-[4px] transition-transform 
                      ${ NavOpen ? "rotate-45 translate-y-[4px]" : ""}                      `}
                  />
                  <span
                    className={`bar block bg-black w-full h-[4px] transition-transform ${
                      NavOpen ? "-rotate-45 -translate-y-[4px]" : ""
                    }`}
                  />
                </button>
                  <p className="hidden md:flex font-sen">Menu</p>
              </motion.div>

              </div>
            </div>

            <motion.div
            variants={MenuVariant}
            className="fixed top-0 left-0 h-screen w-full flex flex-col items-center bg-black text-white z-50"
            >
              <motion.div
                  variants={fadeInVariant}
                  onClick={() => setNavOpen(false)}
                  className="mt-[35px] font-sen text-md font-bold bg-transparent border-none outline-none font-inherit hover:cursor-pointer"
              >
                  <button
                    className={`absolute right-10 menu-button m-2 w-8 h-3 flex flex-col justify-between items-center md:hidden
                    ${ hideNavItemsVariant ? "h-3 important!" : "h-6 important!" }
                    `}
                    onClick={toggleMenu}
                  >
                    {/* Hamburger bars */}
                    <span
                      className={`bar block bg-white w-full h-[4px] transition-transform 
                        ${ NavOpen ? "rotate-45 translate-y-[4px]" : ""
                      }`}
                    />
                    <span
                      className={`bar block bg-white w-full h-[4px] transition-transform ${
                        NavOpen ? "-rotate-45 -translate-y-[4px]" : ""
                      }`}
                    />
                  </button>

                    <p className="hidden md:flex absolute right-10">close</p>            
              </motion.div>

              <motion.div variants={fadeInVariant} className="mt-10"> {/* Adjust margin top as needed */}
                <LanguageSwitch language={language} setLanguage={setLanguage} />
              </motion.div>

              <motion.ul variants={ulVariant} className="font-sen list-none mt-10 text-white">
                  {MOBILE_NAV_ITEMS.map((navItem) => (
                  <motion.li
                      key={navItem.id}
                      whileTap={{ scale: 0.95 }}
                      className="my-5 overflow-y-hidden select-none"
                  >
                      <motion.div
                      variants={liVariant}
                      className="text-[34px] text-center capitalize hover:italic cursor-pointer"
                      >
                      {navItem.navTitle}
                      </motion.div>
                  </motion.li>
                  ))}
              </motion.ul>

            </motion.div>
        </motion.nav>
        </nav>
    </div>
);
}

interface LanguageSwitchProps {  // Define the props interface
  language: string;
  setLanguage: (lang: string) => void; // Type the setLanguage function
}

// Language Switch Component (Reusable)
function LanguageSwitch({ language, setLanguage }: LanguageSwitchProps) { // Use the interface
  return (
    <div className="flex items-center">
      <span
        className={`cursor-pointer text-xs ${language === 'NO' ? 'font-bold' : ''}`}
        onClick={() => setLanguage('NO')}
      >
        NO
      </span>
      <span className="mx-1 text-xs">|</span>
      <span
        className={`cursor-pointer text-xs ${language === 'EN' ? 'font-bold' : ''}`}
        onClick={() => setLanguage('EN')}
      >
        EN
      </span>
    </div>
  );
}
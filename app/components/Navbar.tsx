"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const MOBILE_NAV_ITEMS = [
  { id: 0, navTitle: "home" },
  { id: 1, navTitle: "showreel" },
  { id: 2, navTitle: "services" },
  { id: 3, navTitle: "about" },
  { id: 4, navTitle: "contact" }
];

const DUCK_IMG = "https://images.pexels.com/photos/1837168/pexels-photo-1837168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

interface MobileNavItem {
  id: number;
  navTitle: string;
}

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Animation variants
  const hideNavItemsVariant = {
    opened: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
    closed: { opacity: 1, y: "0%", transition: { delay: 1.1, duration: 0.5, ease: "easeInOut" } }
  };

  const mobileMenuVariant = {
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
            animate={mobileNavOpen ? "opened" : "closed"}
            className="flex justify-between p-[35px_45px]"
        >
            {/* Logo Container */}
            <div className="overflow-y-hidden">
            <motion.h1 variants={hideNavItemsVariant} className="font-sen text-lg grid grid-flow-col">
              blog
            </motion.h1>
            </div>

            {/* Menu Trigger */}
            <div className="overflow-y-hidden">
            <motion.div
                variants={hideNavItemsVariant}
                onClick={() => setMobileNavOpen(true)}
                className="font-sen text-md font-bold cursor-pointer hover:opacity-75"
            >
                Menu
            </motion.div>
            </div>

            {/* Mobile Menu */}
            <motion.div
            variants={mobileMenuVariant}
            className="fixed top-0 left-0 h-screen w-full flex flex-col items-center bg-black z-50"
            >
            <motion.button
                variants={fadeInVariant}
                onClick={() => setMobileNavOpen(false)}
                className="self-end mr-[45px] mt-[35px] font-sen text-md font-bold text-white bg-transparent border-none outline-none font-inherit hover:cursor-pointer"
            >
                Close
            </motion.button>

            <motion.ul variants={ulVariant} className="list-none mt-10 text-white">
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

            <motion.div
                variants={fadeInVariant}
                className="mt-20 flex"
            >
                <h5 className="font-normal first:mr-10">+47 99 59 61 70</h5>
                <h5 className="font-normal">@Aster</h5>
            </motion.div>
            </motion.div>
        </motion.nav>
        </nav>
    </div>
);
}
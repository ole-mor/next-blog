"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Greetings from "./Greetings"

interface JournalEntry {
id: string;
title: string;
description: string;
category: string;
image: string;
link: string;
date: string;
}

interface Category {
id: string;
name: string;
description: string;
}

const categories: Category[] = [
{
    id: 'research',
    name: 'Research',
    description: 'User research, market analysis, and insights'
},
{
    id: 'design',
    name: 'Design',
    description: 'UI/UX design processes and decisions'
},
{
    id: 'coding',
    name: 'Development',
    description: 'Technical implementation and coding solutions'
},
{
    id: 'user-stories',
    name: 'User Stories',
    description: 'Real user experiences and feedback'
}
];

const journalEntries: JournalEntry[] = [
{
    id: 'intro-ux',
    title: 'Introduction to UX Design',
    description: 'Exploring the fundamentals of user experience design',
    category: 'design',
    image: '/images/gallery/image2.png',
    link: '/content/intro-ux-blog',
    date: '2025-01-28'
},
{
    id: 'my-nextjs-workflow',
    title: 'My Next.js Workflow',
    description: 'Streamlining the development process with Next.js',
    category: 'coding',
    image: '/images/gallery/image5.png',
    link: '/content/my-nextjs-workflow',
    date: '2025-02-8'
},
{
    id: 'deploying-sites',
    title: 'Deploying Static Sites',
    description: 'A guide to deploying static sites with ease',
    category: 'coding',
    image: '/images/gallery/image10.png',
    link: '/content/deploying-sites',
    date: '2025-02-10'
},
{
    id: 'multimodal-interaction',
    title: 'Multimodal Interaction',
    description: 'Exploring the world of multimodal user interfaces',
    category: 'research',
    image: '/images/gallery/image9.png',
    link: '/content/multimodal-interaction',
    date: '2025-02-15'
}
];

const CategoryButton = ({ 
isActive, 
onClick, 
children 
}: { 
isActive: boolean; 
onClick: () => void; 
children: React.ReactNode 
}) => (
<motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
>
    <button
    onClick={onClick}
    className={`w-full text-left px-4 py-2 transition-colors ${
        isActive ? 'bg-black text-white' : 'hover:bg-gray-100'
    }`}
    >
    {children}
    </button>
</motion.div>
);

export default function UXJournal() {
const [activeCategory, setActiveCategory] = useState<string>('all');

const filteredEntries = activeCategory === 'all' 
    ? journalEntries 
    : journalEntries.filter(entry => entry.category === activeCategory);

const formattedDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    });
};

return (
    <div className="min-h-screen flex flex-col font-sen">
    {/* Header */}
    <motion.header 
        className="w-full bg-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
        <div className="max-w-[93vw] mx-auto px-4 py-12">
        <motion.div 
            className="h-0.5 w-full bg-black mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <Greetings />
        <p className="text-xl text-gray-600 max-w-3xl">
            This is a collection of insights, experiences, and learnings from in regards to UX and frontend.
            The goal is to explore the intersection of research, design, and development.
        </p>
        <motion.div 
            className="h-0.5 w-full bg-black mt-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        />
        </div>
    </motion.header>

    {/* Content */}
    <div className="flex-1 bg-white">
        <div className="max-w-[93vw] mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <motion.aside 
            className="md:w-64 flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            >
            <div className="sticky top-24">
                <nav className="space-y-6">
                <motion.ul className="space-y-2 text-sm">
                    <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    >
                    <CategoryButton
                        isActive={activeCategory === 'all'}
                        onClick={() => setActiveCategory('all')}
                    >
                        All Entries
                    </CategoryButton>
                    </motion.li>
                    {categories.map((category, index) => (
                    <motion.li
                        key={category.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (index + 1) }}
                    >
                        <CategoryButton
                        isActive={activeCategory === category.id}
                        onClick={() => setActiveCategory(category.id)}
                        >
                        {category.name}
                        </CategoryButton>
                    </motion.li>
                    ))}
                </motion.ul>
                </nav>
            </div>
            </motion.aside>

            {/* Main content */}
            <AnimatePresence mode="wait">
            <motion.main
                key={activeCategory}
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="space-y-16">
                {filteredEntries.length > 0 && (
                    <motion.section className="space-y-10">
                    {/* Featured entry */}
                    <motion.article
                        key={filteredEntries[0].id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="group"
                    >
                        <Link href={filteredEntries[0].link} className="block">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/2 relative aspect-video mb-4 overflow-hidden">
                            <Image
                                src={filteredEntries[0].image}
                                alt={filteredEntries[0].title}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                            </div>
                            <div className="md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600">
                                {filteredEntries[0].title}
                            </h3>
                            <p className="text-gray-600">{filteredEntries[0].description}</p>
                            <time className="text-sm text-gray-500 mt-2 block">
                                {formattedDate(filteredEntries[0].date)}
                            </time>
                            </div>
                        </div>
                        </Link>
                    </motion.article>

                    {/* Grid entries */}
                    {filteredEntries.length > 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredEntries.slice(1).map((entry, index) => (
                            <motion.article
                            key={entry.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (index + 1) * 0.1 }}
                            className="group"
                            >
                            <Link href={entry.link} className="block">
                                <div className="relative aspect-video mb-4 overflow-hidden">
                                <Image
                                    src={entry.image}
                                    alt={entry.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600">
                                {entry.title}
                                </h3>
                                <p className="text-gray-600">{entry.description}</p>
                                <time className="text-sm text-gray-500 mt-2 block">
                                {formattedDate(entry.date)}
                                </time>
                            </Link>
                            </motion.article>
                        ))}
                        </div>
                    )}
                    </motion.section>
                )}
                </div>
            </motion.main>
            </AnimatePresence>
        </div>
        </div>
    </div>
    </div>
);
}
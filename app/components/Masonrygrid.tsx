// /app/components/Masonrygrid.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

interface ImageItem {
  src: string;
  alt: string;
  link: string;
}

interface MasonryGalleryProps {
  images?: ImageItem[][];
}

export default function MasonryGallery({ 
    images = [
    [
        { src: "/images/gallery/image.png", alt: "Intro", link: "/content/intro-ux-blog" },
        { src: "/images/gallery/image9.png", alt: "Learning Framer Motion", link: "/content/multimodal-interaction" },
    ],
    [
      { src: "/images/gallery/image2.png", alt: "Gallery image 4", link: "/" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", alt: "Gallery image 5", link: "/" },
      { src: "/images/gallery/image5.png", alt: "Gallery image 6", link: "/content/my-nextjs-workflow" },
    ],
    [
      { src: "/images/gallery/image3.png", alt: "Gallery image 7", link: "/" },
      { src: "/images/gallery/image7.png", alt: "Gallery image 8", link: "/" },
      { src: "/images/gallery/image8.png", alt: "Gallery image 9", link: "/" },
    ],
    [
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", alt: "Gallery image 10", link: "/" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", alt: "Gallery image 11", link: "/" },
      { src: "/images/gallery/image6.jpg", alt: "Gallery image 12", link: "/" },
    ],
  ] 
}: MasonryGalleryProps) {
  const MotionLink = motion(Link);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex justify-center w-full mb-5">
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:w-[800px]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {images.map((column, columnIndex) => (
          <motion.div 
            key={`column-${columnIndex}`} 
            className="grid gap-4"
            variants={columnVariants}
          >
            {column.map((image, imageIndex) => (
              <motion.div 
                key={`image-${columnIndex}-${imageIndex}`}
                variants={imageVariants}
                whileHover="hover"
                className="relative h-auto w-full aspect-auto"
              >
                <MotionLink href={image.link}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg"
                    height={100}
                    width={200}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </MotionLink>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
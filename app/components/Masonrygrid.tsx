// /app/components/Masonrygrid.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, MotionStyle, TargetAndTransition } from "framer-motion"; // Import MotionStyle and TargetAndTransition

interface Transition {
  duration?: number;
  ease?: string;
  // ... other transition properties
}

interface AnimationProps {
  scale?: number;
  opacity?: number;
  x?: number;
  y?: number;
  rotate?: number;
  // ... other animatable properties
  transition?: Transition;
}

class ImageItem {
  src: string;
  alt: string;
  link: string;
  initialStyle: MotionStyle; // Use MotionStyle
  whileHover: TargetAndTransition; // Use TargetAndTransition

  constructor(
    src: string,
    alt: string,
    link: string,
    initialStyle: AnimationProps = {}, // Still use AnimationProps for constructor
    whileHover: AnimationProps = {} // Still use AnimationProps for constructor
  ) {
    this.src = src;
    this.alt = alt;
    this.link = link;

    // Convert AnimationProps to MotionStyle for initialStyle
    this.initialStyle = { ...initialStyle } as MotionStyle; // Type assertion

    // Convert AnimationProps to TargetAndTransition for whileHover
    this.whileHover = { ...whileHover } as TargetAndTransition; // Type assertion
  }
}


interface MasonryGalleryProps {
  images?: ImageItem[][];
}

export default function MasonryGallery({
  images = [
    [
      new ImageItem("/images/gallery/image.png", "Intro", "/content/intro-ux-blog", { scale: 1, opacity: 1, x: 0 }, { scale: 1.1, opacity: 0.8, x: 10, transition: { duration: 0.2, ease: "easeOut" } }),
      new ImageItem("/images/gallery/image9.png", "Learning Framer Motion", "/content/multimodal-interaction", { scale: 1, opacity: 1 }, { scale: 1.05, opacity: 0.9, transition: { duration: 0.3, ease: "easeInOut" } }),
    ],
    [
      new ImageItem("/images/gallery/image2.png", "Gallery image 4", "/", { scale: 0.3, opacity: 0.9 }, { opacity: 1, scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }), // Different styles
      new ImageItem("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", "Gallery image 5", "/", { scale: 0.9, opacity: 0.8 }, { scale: 1, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } }), // Different styles
      new ImageItem("/images/gallery/image5.png", "Gallery image 6", "/content/my-nextjs-workflow", { opacity: 0.7 }, { opacity: 1, scale: 1.1, transition: { duration: 0.2, ease: "easeOut" } }), // Example with different styles
    ],
    [
      new ImageItem("/images/gallery/image3.png", "Gallery image 7", "/", { scale: 1.0, opacity: 0.5 }, { scale: 0.5, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }), // Different styles
      new ImageItem("/images/gallery/image7.png", "Gallery image 8", "/", { x: -20, opacity: 0 }, { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }), // Different styles
      new ImageItem("/images/gallery/image8.png", "Gallery image 9", "/", { scale: 0.8 }, { scale: 1, transition: { duration: 0.2, ease: "easeOut" } }), // Different styles
    ],
    [
      new ImageItem("/images/gallery/image10.png", "Gallery image 10", "/content/deploying-sites", { y: 20, opacity: 0 }, { y: 0, opacity: 1, transition: { duration: 0.5, ease: "backOut" } }), // Different styles
      new ImageItem("https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", "Gallery image 11", "/", { rotate: 45, opacity: 0.7 }, { rotate: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } }), // Different styles
      new ImageItem("/images/gallery/image6.jpg", "Gallery image 12", "/", { scale: 1.1, opacity: 0.3 }, { scale: 1, opacity: 1, transition: { duration: 0.2, ease: "easeOut" } }), // Different styles
    ],
  ],
}: MasonryGalleryProps) {
  const MotionLink = motion(Link);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
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
                style={image.initialStyle}
                whileHover={image.whileHover}
                className="relative h-auto w-full aspect-auto"
              >
                <MotionLink href={image.link}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className=""
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
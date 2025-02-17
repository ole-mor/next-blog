import React from 'react';
import Image from 'next/image';

interface ImageItem {
  src: string;
  alt: string;
}

interface MasonryGalleryProps {
  images?: ImageItem[][];
}

export default function MasonryGallery({ 
  images = [
    [
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", alt: "Gallery image 1" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", alt: "Gallery image 2" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg", alt: "Gallery image 3" },
    ],
    [
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", alt: "Gallery image 4" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", alt: "Gallery image 5" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", alt: "Gallery image 6" },
    ],
    [
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", alt: "Gallery image 7" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", alt: "Gallery image 8" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", alt: "Gallery image 9" },
    ],
    [
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", alt: "Gallery image 10" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", alt: "Gallery image 11" },
      { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg", alt: "Gallery image 12" },
    ],
  ] 
}: MasonryGalleryProps) {
  return (
    <div className="flex justify-center w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:w-[800px]">
        {images.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="grid gap-4">
            {column.map((image, imageIndex) => (
                <div key={`image-${columnIndex}-${imageIndex}`}>
                <div className="relative h-auto w-full aspect-auto">
                    <Image
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg"
                    height={100}
                    width={200}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                    />
                </div>
                </div>
            ))}
            </div>
        ))}
        </div>
    </div>
  );
}
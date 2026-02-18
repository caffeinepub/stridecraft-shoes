import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Use provided images or fallback
  const displayImages = images.length > 0 ? images : ['/assets/generated/shoe-01.dim_1024x1024.png'];

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg border border-border bg-muted/30">
        <img
          src={displayImages[selectedImage]}
          alt={`${productName} - View ${selectedImage + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
      
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                selectedImage === index
                  ? 'border-accent'
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <img
                src={image}
                alt={`${productName} - Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

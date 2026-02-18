import { useParams, useNavigate } from '@tanstack/react-router';
import { useProductQuery } from '../hooks/queries/useProductQuery';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft } from 'lucide-react';
import ProductGallery from '../components/product/ProductGallery';
import SizeSelector from '../components/product/SizeSelector';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ProductDetailsPage() {
  const { productId } = useParams({ from: '/product/$productId' });
  const navigate = useNavigate();
  const { data: product, isLoading, error } = useProductQuery(productId);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    toast.success('Added to cart!', {
      description: `${product?.name} - Size ${selectedSize}`,
    });
  };

  if (isLoading) {
    return (
      <div className="container py-16">
        <div className="flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-accent" />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild className="mt-6" variant="outline">
            <button onClick={() => navigate({ to: '/shop' })}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </button>
          </Button>
        </div>
      </div>
    );
  }

  const price = Number(product.price);

  return (
    <div className="container py-8 md:py-12">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate({ to: '/shop' })}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Shop
      </Button>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <ProductGallery images={product.images} productName={product.name} />

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-accent">{product.category}</p>
            <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold">${price.toFixed(2)}</p>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Select Size</h3>
            <SizeSelector
              sizes={product.sizes.map(Number)}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
            />
          </div>

          <div className="border-t border-border pt-6">
            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent/90"
              onClick={handleAddToCart}
              disabled={!product.available}
            >
              {product.available ? 'Add to Cart' : 'Out of Stock'}
            </Button>
            {!product.available && (
              <p className="mt-2 text-center text-sm text-muted-foreground">
                This product is currently unavailable
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '../../backend';

interface ProductGridProps {
  products: Product[];
  onProductClick: (productId: string) => void;
}

export default function ProductGrid({ products, onProductClick }: ProductGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const price = Number(product.price);
        const imagePath = product.images[0] || '/assets/generated/shoe-01.dim_1024x1024.png';

        return (
          <Card
            key={product.id}
            className="group overflow-hidden transition-shadow hover:shadow-medium"
          >
            <div className="aspect-square overflow-hidden bg-muted/30">
              <img
                src={imagePath}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <p className="text-xs font-medium text-accent">{product.category}</p>
              <h3 className="mt-1 font-semibold">{product.name}</h3>
              <p className="mt-2 text-lg font-semibold">${price.toFixed(2)}</p>
              <Button
                className="mt-4 w-full"
                variant="outline"
                onClick={() => onProductClick(product.id)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

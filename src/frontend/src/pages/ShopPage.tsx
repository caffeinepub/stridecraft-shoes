import { useState, useMemo } from 'react';
import { useNavigate } from '@tanstack/react-router';
import ProductGrid from '../components/shop/ProductGrid';
import ShopFilters from '../components/shop/ShopFilters';
import { useProductsQuery } from '../hooks/queries/useProductsQuery';
import { Loader2 } from 'lucide-react';

export default function ShopPage() {
  const navigate = useNavigate();
  const { data: products, isLoading, error } = useProductsQuery();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');

  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];

    let filtered = products.filter((product) => {
      // Search filter (case-insensitive)
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Price range filter (convert bigint to number)
      const price = Number(product.price);
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort by price
    if (sortOrder !== 'none') {
      filtered = [...filtered].sort((a, b) => {
        const priceA = Number(a.price);
        const priceB = Number(b.price);
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
      });
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, priceRange, sortOrder]);

  const categories = useMemo(() => {
    if (!products) return [];
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    return uniqueCategories;
  }, [products]);

  const handleProductClick = (productId: string) => {
    navigate({ to: '/product/$productId', params: { productId } });
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

  if (error) {
    return (
      <div className="container py-16">
        <div className="text-center">
          <p className="text-destructive">Failed to load products. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Shop</h1>
        <p className="mt-2 text-muted-foreground">
          Discover our complete collection of premium footwear
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside>
          <ShopFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
          />
        </aside>

        <div>
          {filteredAndSortedProducts.length === 0 ? (
            <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed border-border">
              <div className="text-center">
                <p className="text-lg font-medium">No products found</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try adjusting your filters or search query
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-4 text-sm text-muted-foreground">
                Showing {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'product' : 'products'}
              </div>
              <ProductGrid products={filteredAndSortedProducts} onProductClick={handleProductClick} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

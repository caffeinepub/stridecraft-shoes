import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Leaf, Truck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/assets/generated/paper-texture.dim_1600x1600.png)' }}
        />
        <div className="container relative py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Step Into Excellence
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Discover premium footwear crafted with precision, designed for comfort, and built to last. Every step tells a story.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/shop">
                    Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/hero-banner.dim_1920x900.png"
                alt="Premium StrideCraft Shoes"
                className="rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="border-y border-border/40 bg-muted/30 py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-accent/10 p-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Handcrafted with the finest materials for unmatched durability and comfort.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-accent/10 p-4">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Sustainable</h3>
              <p className="text-sm text-muted-foreground">
                Committed to eco-friendly practices and responsible sourcing.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-accent/10 p-4">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Quick and reliable shipping to get your shoes to you faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection Teaser */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Collection
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our carefully curated selection of premium footwear
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-shadow hover:shadow-medium">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`/assets/generated/shoe-0${i}.dim_1024x1024.png`}
                    alt={`Featured shoe ${i}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Premium Collection</h3>
                  <p className="text-sm text-muted-foreground">Discover more</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/shop">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

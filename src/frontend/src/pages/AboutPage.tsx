import ValuesTimeline from '../components/about/ValuesTimeline';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-border/40 bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Our Story
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              StrideCraft was born from a simple belief: footwear should be more than functional—it should be exceptional. Every pair we create is a testament to our commitment to quality, sustainability, and timeless design.
            </p>
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="font-serif text-3xl font-bold tracking-tight">
                The Art of Craft
              </h2>
              <p className="text-muted-foreground">
                Each StrideCraft shoe is meticulously handcrafted by skilled artisans who have honed their craft over decades. We blend traditional techniques with modern innovation to create footwear that stands the test of time.
              </p>
              <p className="text-muted-foreground">
                From the initial sketch to the final stitch, every step of our process is guided by an unwavering attention to detail. We don't just make shoes—we create wearable art.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/shoe-04.dim_1024x1024.png"
                alt="Craftsmanship"
                className="rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="border-y border-border/40 bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 relative lg:order-1">
              <img
                src="/assets/generated/shoe-05.dim_1024x1024.png"
                alt="Premium Materials"
                className="rounded-lg shadow-medium"
              />
            </div>
            <div className="order-1 flex flex-col justify-center space-y-6 lg:order-2">
              <h2 className="font-serif text-3xl font-bold tracking-tight">
                Premium Materials
              </h2>
              <p className="text-muted-foreground">
                We source only the finest materials from around the world. Our leathers are carefully selected for their durability and natural beauty, while our textiles are chosen for their comfort and breathability.
              </p>
              <p className="text-muted-foreground">
                Every material that goes into a StrideCraft shoe is rigorously tested to ensure it meets our exacting standards. We believe that quality materials are the foundation of exceptional footwear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="font-serif text-3xl font-bold tracking-tight">
                Sustainable Future
              </h2>
              <p className="text-muted-foreground">
                We're committed to minimizing our environmental impact. From responsible sourcing to eco-friendly production methods, sustainability is woven into every aspect of our business.
              </p>
              <p className="text-muted-foreground">
                Our goal is to create shoes that not only look good and feel great but also contribute to a healthier planet. We're constantly innovating to find new ways to reduce waste and improve our environmental footprint.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/shoe-06.dim_1024x1024.png"
                alt="Sustainability"
                className="rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Timeline */}
      <section className="border-t border-border/40 bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <ValuesTimeline />
        </div>
      </section>
    </div>
  );
}

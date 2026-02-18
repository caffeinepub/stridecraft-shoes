import { Award, Heart, Leaf, Users } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We never compromise on quality. Every shoe is crafted to the highest standards.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for footwear drives us to create products that inspire and delight.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We are committed to protecting our planet for future generations.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in building lasting relationships with our customers and partners.',
  },
];

export default function ValuesTimeline() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {values.map((value, index) => {
        const Icon = value.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Icon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
            <p className="text-sm text-muted-foreground">{value.description}</p>
          </div>
        );
      })}
    </div>
  );
}

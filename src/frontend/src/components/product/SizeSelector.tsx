import { Button } from '@/components/ui/button';

interface SizeSelectorProps {
  sizes: number[];
  selectedSize: number | null;
  onSizeSelect: (size: number) => void;
}

export default function SizeSelector({ sizes, selectedSize, onSizeSelect }: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <Button
          key={size}
          variant={selectedSize === size ? 'default' : 'outline'}
          className={selectedSize === size ? 'bg-accent hover:bg-accent/90' : ''}
          onClick={() => onSizeSelect(size)}
        >
          {size}
        </Button>
      ))}
    </div>
  );
}

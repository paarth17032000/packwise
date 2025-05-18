import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Currency } from 'lucide-react';
import CurrencyConverter from '@/components/CurrencyConvertor';

const FloatingActionButton = () => {
  const [isConverterOpen, setIsConverterOpen] = useState(false);

  return (
    <>
      <Button 
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-(--brand) hover:bg-(--brand-dark) button-hover transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        onClick={() => setIsConverterOpen(true)}
      >
        <Currency className="h-6 w-6" />
      </Button>
      
      <CurrencyConverter 
        isOpen={isConverterOpen} 
        onClose={() => setIsConverterOpen(false)} 
      />
    </>
  );
};

export default FloatingActionButton;
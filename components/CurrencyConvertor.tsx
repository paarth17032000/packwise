import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dailog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { countries } from '@/data/mockData';
import { useTrip } from '@/context/TripContext';
import { ArrowRight, Currency } from 'lucide-react';

interface CurrencyConverterProps {
  isOpen: boolean;
  onClose: () => void;
}

const CurrencyConverter = ({ isOpen, onClose }: CurrencyConverterProps) => {
  const { selectedCountry } = useTrip();
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>(selectedCountry?.currency.code || 'EUR');
  const [result, setResult] = useState<string>('');

  const currencyOptions = [
    { code: 'USD', name: 'US Dollar', symbol: '$', rate: 1 },
    ...countries.map(c => c.currency).filter((value, index, self) => 
      index === self.findIndex(c => c.code === value.code)
    )
  ];

  useEffect(() => {
    if (selectedCountry) {
      setToCurrency(selectedCountry.currency.code);
    }
  }, [selectedCountry]);

  useEffect(() => {
    convertCurrency();
  }, [amount, fromCurrency, toCurrency]);

  const convertCurrency = () => {
    const inputAmount = parseFloat(amount) || 0;
    
    const fromRate = currencyOptions.find(c => c.code === fromCurrency)?.rate || 1;
    const toRate = currencyOptions.find(c => c.code === toCurrency)?.rate || 1;
    
    const convertedAmount = (inputAmount / fromRate) * toRate;
    const fromSymbol = currencyOptions.find(c => c.code === fromCurrency)?.symbol || '$';
    const toSymbol = currencyOptions.find(c => c.code === toCurrency)?.symbol || '€';
    
    setResult(`${fromSymbol}${inputAmount} = ${toSymbol}${convertedAmount.toFixed(2)}`);
  };

  const handleSwapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md animate-scale-in bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold flex items-center justify-center gap-2">
            <Currency className="h-6 w-6 text-(--brand)" />
            Currency Converter
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-4 space-y-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount</label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full mt-2"
              />
            </div>
            
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">From</label>
                <Select value={fromCurrency} onValueChange={setFromCurrency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {currencyOptions.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.symbol} {currency.code} - {currency.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleSwapCurrencies}
                className="mt-6 cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">To</label>
                <Select value={toCurrency} onValueChange={setToCurrency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {currencyOptions.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.symbol} {currency.code} - {currency.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center border border-(--input)">
              <p className="text-sm text-gray-500">Conversion Result</p>
              <p className="text-xl font-semibold text-gray-800">{result}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CurrencyConverter;
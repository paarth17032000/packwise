
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dailog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { countries, Country } from '@/data/mockData';

interface CountryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (country: Country) => void;
}

const CountryModal = ({ isOpen, onClose, onSelect }: CountryModalProps) => {
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  
  useEffect(() => {
    if (search) {
      const filtered = countries.filter(country => 
        country.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countries);
    }
  }, [search]);

  const handleSelect = (country: Country) => {
    onSelect(country);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold text-gray-800">Select your destination</DialogTitle>
        </DialogHeader>
        <div className="p-0 sm:p-4 space-y-6">
          <Input
            placeholder="Search countries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
          <div className="grid grid-cols-2 gap-4 max-h-[400px] overflow-y-auto">
            {filteredCountries.map((country) => (
              <Button
                key={country.id}
                variant="outline"
                className="flex items-center justify-start gap-2 p-3 h-auto cursor-pointer card-hover transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]"
                onClick={() => handleSelect(country)}
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="text-sm font-medium">{country.name}</span>
              </Button>
            ))}
            <div className='col-span-2 text-sm italic text-(--muted-foreground)'>*Currently we are serving only these countries!</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CountryModal;
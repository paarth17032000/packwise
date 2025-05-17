
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dailog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { countries, Country } from '@/data/mockData';
import { useTrip } from '@/context/TripContext';
import { useToast } from '@/hooks/use-toast';

interface CountryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (country: Country) => void;
}

const CountryModal = ({ isOpen, onClose, onSelect }: CountryModalProps) => {
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const { toast } = useToast();
  
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
    toast({
      title: "Country Selected",
      description: `You've selected ${country.name} for your trip.`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold text-gray-800">Select your destination</DialogTitle>
        </DialogHeader>
        <div className="p-4 space-y-6">
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
                className="flex items-center justify-start gap-2 p-3 h-auto card-hover transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]"
                onClick={() => handleSelect(country)}
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="text-sm font-medium">{country.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CountryModal;
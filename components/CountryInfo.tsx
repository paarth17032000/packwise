
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { useTrip } from '@/context/TripContext';
import { Clock, MapPin, Currency } from 'lucide-react';

const CountryInfo = () => {
  const { selectedCountry } = useTrip();
  const [currentTime, setCurrentTime] = useState<string>('');
  
  useEffect(() => {
    if (!selectedCountry) return;
    
    // Update time immediately
    updateTime();
    
    // Update time every minute
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [selectedCountry]);
  
  const updateTime = () => {
    if (!selectedCountry) return;
    
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: selectedCountry.timezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      
      setCurrentTime(formatter.format(new Date()));
    } catch (error) {
      setCurrentTime('Time unavailable');
      console.error('Error formatting time:', error);
    }
  };
  
  if (!selectedCountry) return null;
  
  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{selectedCountry.flag}</span>
          <h1 className="text-3xl font-bold text-gray-800">{selectedCountry.name}</h1>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="h-5 w-5 text-(--brand)" />
          <span>{currentTime}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="p-4 bg-white shadow-sm">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-(--brand) mt-1" />
            <div>
              <h3 className="font-medium text-gray-800">Location</h3>
              <p className="text-gray-600 text-sm">Timezone: {selectedCountry.timezone}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-white shadow-sm">
          <div className="flex items-start gap-3">
            <Currency className="h-5 w-5 text-(--brand) mt-1" />
            <div>
              <h3 className="font-medium text-gray-800">Currency</h3>
              <p className="text-gray-600 text-sm">
                {selectedCountry.currency.name} ({selectedCountry.currency.code})
              </p>
              <p className="text-gray-600 text-sm">
                Symbol: {selectedCountry.currency.symbol}
              </p>
              <p className="text-sm mt-1 text-black">
                <span className="text-(--brand) font-medium">Exchange rate: </span>
                1 USD = {selectedCountry.currency.rate} {selectedCountry.currency.code}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CountryInfo;
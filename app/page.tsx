"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTrip } from '@/context/TripContext';
import { Country } from '@/data/mockData';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCountry } = useTrip();
  const router = useRouter()

  const handleCountrySelect = (country: Country) => {
    // setSelectedCountry(country);
    router.push('/trip');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6 animate-slide-up">
        <div className="w-full max-w-md text-center space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#7e69ab] to-[#9b87f5] bg-clip-text text-transparent">
              Packwise
            </h1>
            <p className="text-xl text-gray-600">Smart Travel Prep Assistant</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-6">
              Planning a trip? Let us help you prepare with personalized packing lists and currency conversion.
            </p>
            
            <Button 
              className="w-full py-6 text-lg bg-[#9b87f5] text-white cursor-pointer hover:bg-[#7e69ab] button-hover transition-transform duration-200 hover:scale-105 active:scale-95"
              onClick={() => setIsModalOpen(true)}
            >
              Plan a Trip <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-500">
            Save time and travel worry-free with our smart checklist and currency tools.
          </p>
        </div>
      </div>
      
      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Packwise. All rights reserved.
      </footer>
    </div>
  );
};

export default Page;
'use client'
import React from 'react'
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { useTrip } from '@/context/TripContext';
import CountryInfo from '@/components/CountryInfo';
import ChecklistSection from '@/components/ChecklistSection';
import FloatingActionButton from '@/components/FloatingActionButton';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Trip() {
  const { selectedCountry } = useTrip();
      const router = useRouter();
      
      // If no country is selected, redirect to home
      useEffect(() => {
        if (!selectedCountry) {
          router.push('/');
        }
      }, [selectedCountry]);
      
      if (!selectedCountry) {
        return null; // Will redirect in useEffect
      }

  return (
    

      
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Button
                variant="link"
                className="text-xl font-semibold text-(--brand)"
                onClick={() => router.push('/')}
              >
                Packwise
              </Button>
              
              <Button 
                variant="outline"
                className="button-hover transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                onClick={() => router.push('/')}
              >
                New Trip <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </header>
          
          <main className="container mx-auto px-4 py-6">
            <CountryInfo />
            <ChecklistSection />
          </main>
          
          <FloatingActionButton />
        </div>
  )
}

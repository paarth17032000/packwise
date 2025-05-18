'use client'
import React, { useState } from 'react'
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { useTrip } from '@/context/TripContext';
import CountryInfo from '@/components/CountryInfo';
import ChecklistSection from '@/components/ChecklistSection';
import FloatingActionButton from '@/components/FloatingActionButton';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import TripPageSkeleton from '@/components/TripPageSkeleton';

export default function Trip() {
  const [loading, setLoading] = useState<boolean>(true)
  const { selectedCountry } = useTrip();
  const router = useRouter();


  useEffect(() => {     
    if (!selectedCountry && !localStorage.getItem('selectedCountryId')) {
      router.push('/');
      return;
    }
    
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [selectedCountry, router]);
  
  if (loading) {
    return <TripPageSkeleton />;
  }

  if(loading) return <TripPageSkeleton />
  return (
    <div className="min-h-[calc(100vh-72px)] bg-gray-50">
      
      <main className="container mx-auto px-4 py-6">
        <CountryInfo />
        <ChecklistSection />
      </main>
      
      <FloatingActionButton />
    </div>
  )
}

'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Country, ChecklistItem, defaultChecklist, getCountryById } from '../data/mockData';

interface TripContextType {
  selectedCountry: Country | null;
  checklist: ChecklistItem[];
  setSelectedCountry: (country: Country | null) => void;
  toggleChecklistItem: (id: string) => void;
  addChecklistItem: (text: string, category: 'shopping' | 'utils' | 'cold' | 'necessary') => void;
  deleteChecklistItem: (id: string) => void;
}

// Interface to store checklists by country ID
interface CountryChecklists {
  [countryId: string]: ChecklistItem[];
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export function TripProvider({ children }: { children: React.ReactNode }) {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [checklist, setChecklist] = useState<ChecklistItem[]>(defaultChecklist);
  const [countryChecklists, setCountryChecklists] = useState<CountryChecklists>({});

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedCountryId = localStorage.getItem('selectedCountryId');
    const savedCountryChecklists = localStorage.getItem('countryChecklists');

    if (savedCountryId) {
      const country = getCountryById(savedCountryId);
      if (country) {
        setSelectedCountry(country);
        
        // Load country-specific checklist if it exists
        if (savedCountryChecklists) {
          const parsedChecklists = JSON.parse(savedCountryChecklists);
          setCountryChecklists(parsedChecklists);
          
          // Set the current checklist to the one for this country, or use default
          setChecklist(parsedChecklists[savedCountryId] || defaultChecklist);
        }
      }
    }
  }, []);

  // Update checklist whenever country changes
  useEffect(() => {
    if (selectedCountry) {
      // If we have a checklist for this country, use it; otherwise use default
      if (countryChecklists[selectedCountry.id]) {
        setChecklist(countryChecklists[selectedCountry.id]);
      } else {
        setChecklist(defaultChecklist);
      }
    }
  }, [selectedCountry, countryChecklists]);

  // Save data to localStorage when it changes
  useEffect(() => {
    if (selectedCountry) {
      localStorage.setItem('selectedCountryId', selectedCountry.id);
      
      // Update the checklist for the current country
      const updatedChecklists = {
        ...countryChecklists,
        [selectedCountry.id]: checklist
      };
      
      setCountryChecklists(updatedChecklists);
      localStorage.setItem('countryChecklists', JSON.stringify(updatedChecklists));
    }
  }, [selectedCountry, checklist]);

  // Function to handle country selection and its checklist
  const handleSelectCountry = (country: Country | null) => {
    if (country) {
      setSelectedCountry(country);
      
      // If we already have a checklist for this country, use it; otherwise use default
      if (countryChecklists[country.id]) {
        setChecklist(countryChecklists[country.id]);
      } else {
        setChecklist(defaultChecklist);
      }
    } else {
      setSelectedCountry(null);
    }
  };

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => 
      prev.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const addChecklistItem = (text: string, category: 'shopping' | 'utils' | 'cold' | 'necessary') => {
    const newItem: ChecklistItem = {
      id: `custom-${Date.now()}`,
      text,
      checked: false,
      category
    };
    setChecklist(prev => [...prev, newItem]);
  };

  const deleteChecklistItem = (id: string) => {
    setChecklist(prev => prev.filter(item => item.id !== id));
  };

  return (
    <TripContext.Provider value={{ 
      selectedCountry, 
      checklist, 
      setSelectedCountry: handleSelectCountry,
      toggleChecklistItem,
      addChecklistItem,
      deleteChecklistItem
    }}>
      {children}
    </TripContext.Provider>
  );
}

export function useTrip() {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error('useTrip must be used within a TripProvider');
  }
  return context;
}

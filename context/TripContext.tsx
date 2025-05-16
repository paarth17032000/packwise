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

const TripContext = createContext<TripContextType | undefined>(undefined);

export function TripProvider({ children }: { children: React.ReactNode }) {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [checklist, setChecklist] = useState<ChecklistItem[]>(defaultChecklist);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedCountryId = localStorage.getItem('selectedCountryId');
    const savedChecklist = localStorage.getItem('checklist');

    if (savedCountryId) {
      const country = getCountryById(savedCountryId);
      if (country) setSelectedCountry(country);
    }

    if (savedChecklist) {
      setChecklist(JSON.parse(savedChecklist));
    }
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    if (selectedCountry) {
      localStorage.setItem('selectedCountryId', selectedCountry.id);
    }
    localStorage.setItem('checklist', JSON.stringify(checklist));
  }, [selectedCountry, checklist]);

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
      setSelectedCountry,
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
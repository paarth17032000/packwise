export interface Country {
    id: string;
    name: string;
    flag: string;
    currency: {
      code: string;
      name: string;
      symbol: string;
      rate: number; // Rate compared to USD (1 USD = X local currency)
    };
    timezone: string;
  }
  
  export interface ChecklistItem {
    id: string;
    text: string;
    checked: boolean;
    category: 'shopping' | 'utils' | 'cold' | 'necessary';
  }
  
  export const countries: Country[] = [
    {
      id: 'jp',
      name: 'Japan',
      flag: '🇯🇵',
      currency: {
        code: 'JPY',
        name: 'Japanese Yen',
        symbol: '¥',
        rate: 150.10
      },
      timezone: 'Asia/Tokyo'
    },
    {
      id: 'fr',
      name: 'France',
      flag: '🇫🇷',
      currency: {
        code: 'EUR',
        name: 'Euro',
        symbol: '€',
        rate: 0.92
      },
      timezone: 'Europe/Paris'
    },
    {
      id: 'uk',
      name: 'UK',
      flag: '🇬🇧',
      currency: {
        code: 'GBP',
        name: 'British Pound',
        symbol: '£',
        rate: 0.79
      },
      timezone: 'Europe/London'
    },
    {
      id: 'au',
      name: 'Australia',
      flag: '🇦🇺',
      currency: {
        code: 'AUD',
        name: 'Australian Dollar',
        symbol: '$',
        rate: 1.52
      },
      timezone: 'Australia/Sydney'
    },
    {
      id: 'ca',
      name: 'Canada',
      flag: '🇨🇦',
      currency: {
        code: 'CAD',
        name: 'Canadian Dollar',
        symbol: '$',
        rate: 1.37
      },
      timezone: 'America/Toronto'
    },
    {
      id: 'sg',
      name: 'Singapore',
      flag: '🇸🇬',
      currency: {
        code: 'SGD',
        name: 'Singapore Dollar',
        symbol: 'S$',
        rate: 1.34
      },
      timezone: 'Asia/Singapore'
    },
    {
      id: 'de',
      name: 'Germany',
      flag: '🇩🇪',
      currency: {
        code: 'EUR',
        name: 'Euro',
        symbol: '€',
        rate: 0.92
      },
      timezone: 'Europe/Berlin'
    },
    {
      id: 'in',
      name: 'India',
      flag: '🇮🇳',
      currency: {
        code: 'INR',
        name: 'Indian Rupee',
        symbol: '₹',
        rate: 83.12
      },
      timezone: 'Asia/Kolkata'
    }
  ];
  
  export const defaultChecklist: ChecklistItem[] = [
    // Shopping category
    { id: 's1', text: 'Power adapter', checked: false, category: 'shopping' },
    { id: 's2', text: 'Travel size toiletries', checked: false, category: 'shopping' },
    { id: 's3', text: 'Comfortable shoes', checked: false, category: 'shopping' },
    { id: 's4', text: 'Neck pillow', checked: false, category: 'shopping' },
    
    // Utils category
    { id: 'u1', text: 'Passport', checked: false, category: 'utils' },
    { id: 'u2', text: 'Travel insurance', checked: false, category: 'utils' },
    { id: 'u3', text: 'Hotel reservation', checked: false, category: 'utils' },
    { id: 'u4', text: 'Flight tickets', checked: false, category: 'utils' },
    { id: 'u5', text: 'Local currency', checked: false, category: 'utils' },
    
    // Cold category
    { id: 'c1', text: 'Winter jacket', checked: false, category: 'cold' },
    { id: 'c2', text: 'Gloves', checked: false, category: 'cold' },
    { id: 'c3', text: 'Scarf', checked: false, category: 'cold' },
    { id: 'c4', text: 'Thermal underwear', checked: false, category: 'cold' },
    
    // Necessary category
    { id: 'n1', text: 'Phone charger', checked: false, category: 'necessary' },
    { id: 'n2', text: 'Medications', checked: false, category: 'necessary' },
    { id: 'n3', text: 'Wallet', checked: false, category: 'necessary' },
    { id: 'n4', text: 'Sunglasses', checked: false, category: 'necessary' },
    { id: 'n5', text: 'Water bottle', checked: false, category: 'necessary' }
  ];
  
  export const getCurrency = (currencyCode: string) => {
    const country = countries.find(c => c.currency.code === currencyCode);
    return country ? country.currency : null;
  };
  
  export const getCountryById = (id: string) => {
    return countries.find(c => c.id === id) || null;
  };
  
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ChecklistItem } from '@/data/mockData';
import { useTrip } from '@/context/TripContext';
import { Plus, Minus, ShoppingBag, Utensils, Snowflake, ListCheck } from 'lucide-react';

interface CategoryProps {
  title: string;
  icon: React.ReactNode;
  items: ChecklistItem[];
  onToggle: (id: string) => void;
  onAdd: (text: string, category: 'shopping' | 'utils' | 'cold' | 'necessary') => void;
  onDelete: (id: string) => void;
}

const Category = ({ title, icon, items, onToggle, onAdd, onDelete }: CategoryProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [newItem, setNewItem] = useState('');
  const categoryMap: Record<string, 'shopping' | 'utils' | 'cold' | 'necessary'> = {
    'Shopping': 'shopping',
    'Utilities': 'utils',
    'Cold Weather': 'cold',
    'Essentials': 'necessary'
  };

  const handleAdd = () => {
    if (newItem.trim()) {
      onAdd(newItem, categoryMap[title]);
      setNewItem('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 animate-fade-in" >
      <button 
        className="flex items-center justify-between w-full cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2 text-gray-800">
          {icon}
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className="bg-(--brand-light) text-(--brand-dark) text-xs font-semibold px-2 py-0.5 rounded-full">
            {items.filter(item => item.checked).length}/{items.length}
          </span>
        </div>
        <span>{isExpanded ? '▼' : '►'}</span>
      </button>
      
      {isExpanded && (
        <div className="mt-3 space-y-2 animate-slide-down">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <Checkbox 
                  id={item.id}
                  checked={item.checked}
                  onCheckedChange={() => onToggle(item.id)}
                  className="checkbox-custom cursor-pointer h-5 w-5 rounded-md border-2 border-gray-300 bg-white transition-colors
                    focus:outline-none focus:ring-2 focus:ring-(--brand) focus:ring-offset-2
                    checked:bg-(--brand) checked:text-white"
                />
                <label 
                  htmlFor={item.id}
                  className={`text-sm transition-all ${item.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}
                >
                  {item.text}
                </label>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 cursor-pointer"
                onClick={() => onDelete(item.id)}
              >
                <Minus className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          <div className="flex gap-2 mt-3">
            <Input
              placeholder="Add new item"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="flex-1"
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            />
            <Button onClick={handleAdd} className="button-hover transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer">
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const ChecklistSection = () => {
  const { checklist, toggleChecklistItem, addChecklistItem, deleteChecklistItem } = useTrip();
  
  const shoppingItems = checklist.filter(item => item.category === 'shopping');
  const utilsItems = checklist.filter(item => item.category === 'utils');
  const coldItems = checklist.filter(item => item.category === 'cold');
  const necessaryItems = checklist.filter(item => item.category === 'necessary');
  
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <ListCheck className="h-6 w-6 text-(--brand)" />
        Packing Checklist
      </h2>
      
      <div className="grid gap-4">
        <Category 
          title="Shopping" 
          icon={<ShoppingBag className="h-5 w-5 text-(--brand)" />} 
          items={shoppingItems}
          onToggle={toggleChecklistItem}
          onAdd={addChecklistItem}
          onDelete={deleteChecklistItem}
        />
        
        <Category 
          title="Utilities" 
          icon={<Utensils className="h-5 w-5 text-(--brand)" />} 
          items={utilsItems}
          onToggle={toggleChecklistItem}
          onAdd={addChecklistItem}
          onDelete={deleteChecklistItem}
        />
        
        <Category 
          title="Cold Weather" 
          icon={<Snowflake className="h-5 w-5 text-(--brand)" />} 
          items={coldItems}
          onToggle={toggleChecklistItem}
          onAdd={addChecklistItem}
          onDelete={deleteChecklistItem}
        />
        
        <Category 
          title="Essentials" 
          icon={<ListCheck className="h-5 w-5 text-(--brand)" />} 
          items={necessaryItems}
          onToggle={toggleChecklistItem}
          onAdd={addChecklistItem}
          onDelete={deleteChecklistItem}
        />
      </div>
    </div>
  );
};

export default ChecklistSection;
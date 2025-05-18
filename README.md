# Packwise - Travel Checklist App

Packwise is a responsive web application that helps travelers manage country-specific packing checklists and see currency conversions.

## Ideas used from codecircuit idealist

  - Packing checklist with item categories
  - Currency converter with fake values

## How to Run the Project

1. Clone the repository
   ```bash
   git clone https://github.com/paarth17032000/packwise
   cd packwise
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Application Flow

1. **Homepage**: Users select a destination country from the available options
2. **Trip Page**: Users can:
   - View country information (flag, currency, timezone)
   - Use the currency converter to plan expenses
   - Manage their packing checklist with categorized items
   - Add, check off, or delete items from their checklist

## Key Features

- **Country-Specific Checklists**: Each country maintains its own unique checklist, allowing users to have different packing lists for different destinations
- **Categorized Items**: Checklist items are organized into four categories:
  - Shopping
  - Utilities
  - Cold Weather
  - Essentials
- **Persistent Storage**: All user data is saved in localStorage for a seamless experience between sessions
- **Currency Converter**: Built-in tool to convert between USD and local currency

## Technical Implementation

- **Mock Data**: The application uses mock data for countries and default checklist items
- **Local Storage**: User selections and checklists are saved to browser localStorage
- **Country-Specific Storage**: Implemented a system where each country ID maps to its own unique checklist

## Tech Stack

- **React**: UI library for building the component-based interface
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For responsive styling
- **Radix UI**: Component library for consistent design
- **Lucide React**: For icons

## Project Structure

- `/components/`: UI components
- `/app/`: Page components (Index, TripPage)
- `/contexts/`: React contexts for state management
- `/data/`: Mock data for countries and default checklists

## Future Enhancements

- Fetching all dynamic country details and currency conversions using API
- Backend integration for user accounts and handling checklist
- Public/private checklist sharing
- Weather integration for destination cities
- Budget Tracker
- Travel gallery / moodboard

'use client';
import { createContext, useState } from 'react';

export const DataContext = createContext<any | null>(null);

export default function Context({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <DataContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </DataContext.Provider>
  );
}
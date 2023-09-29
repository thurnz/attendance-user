'use client';
import { createContext, useState, useEffect, useContext } from 'react';
import _ from 'underscore';

export const DataContext = createContext<any | null>(null);

export default function Context({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = _.debounce(() => {
      setIsMobile(window.innerWidth < window.innerHeight || window.innerWidth < 800);
    }, 500);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DataContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </DataContext.Provider>
  );
}
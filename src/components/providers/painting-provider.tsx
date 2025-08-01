'use client';

import { TPainting } from '@/types/types';
import { createContext, ReactNode, useContext, useState } from 'react';

type PaintingContextType = {
  paintingsPromise: Promise<TPainting[]>;
  pause: boolean;
  setPause: (value: boolean) => void;
};

const PaintingsContext = createContext<PaintingContextType | null>(null);

export function usePaintingContext() {
  const context = useContext(PaintingsContext);
  if (!context) throw new Error('usePaintingContext must be used within a PaintingsContextProvider');
  return context;
}

export function PaintingsProvider({
  children,
  paintingsPromise,
}: {
  children: ReactNode;
  paintingsPromise: Promise<TPainting[]>;
}) {
  const [pause, setPause] = useState(false);

  return (
    <PaintingsContext.Provider value={{ paintingsPromise: paintingsPromise, pause, setPause }}>
      {children}
    </PaintingsContext.Provider>
  );
}

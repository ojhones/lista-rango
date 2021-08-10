import { ReactNode } from 'react';

import { RestaurantsProvider } from './restaurants';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <RestaurantsProvider>{children}</RestaurantsProvider>;
}

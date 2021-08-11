import {
  Dispatch,
  useState,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

import { Restaurant } from '~/interfaces/Restaurant';

interface SearchRestaurantsProps {
  value: string;
}

interface RestaurantsContextData {
  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[];
  setRestaurants: Dispatch<SetStateAction<Restaurant[]>>;
  searchRestaurants(data: SearchRestaurantsProps): void;
}

const RestaurantsContext = createContext({} as RestaurantsContextData);

const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState<Restaurant[]>(restaurants);

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  function searchRestaurants({ value }: SearchRestaurantsProps) {
    const filtered = restaurants.filter(restaurant => {
      if (restaurant.name.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }

      return false;
    });

    setFilteredRestaurants(filtered);
  }

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        searchRestaurants,
        filteredRestaurants,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

function useRestaurants() {
  const context = useContext(RestaurantsContext);

  if (!context) {
    throw new Error('RestaurantsContext must exist to use search');
  }

  return context;
}

export { RestaurantsProvider, useRestaurants };

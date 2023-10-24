import { useContext, createContext } from "react";

export const FavouriteContext = createContext({
  booknameid: 0,
});

export const FavouriteProvider = FavouriteContext.Provider;

export default function useFavourite() {
  return useContext(FavouriteContext);
}

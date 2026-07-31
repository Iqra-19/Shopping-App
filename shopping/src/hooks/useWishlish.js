import { useContext } from "react"
import { WishlistContext } from "../context/WishlistContext"

export function useWishlish() {
  
  const context = useContext(WishlistContext);

  if (!context) {
        throw new Error(
            "useWishlist must be used within WishlistProvider"
        );
    }
  
  return context;
}



/* 

insted of difrect return ---> return useContext(WishlistContext);

*/
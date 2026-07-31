import { useContext } from "react"
import { CartContext } from "../context/CartContext";

export function useCart() {
    const context = useContext(CartContext);

    if(!context){
        throw new Error(
            "useWishlist must be used within WishlistProvider"
        );
    }
  
    return context
}

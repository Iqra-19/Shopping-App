import { createContext, useState } from "react";

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (product) => {
    
        setWishlist( (prevWishlist) => {
            
        const existingProduct = prevWishlist.some(
            (item) => item.id === product.id
            );

            if(existingProduct){
            return prevWishlist.filter(
                (item) => item.id !== product.id
            );
            }

            return[
                ...prevWishlist,
                product,
            ]
        } );
    };
    
    const value = { wishlist, toggleWishlist }

    return (
        <WishlistContext.Provider
            value = {value}
        >
            {children}
        </WishlistContext.Provider>
    )
}
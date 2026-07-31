import { createContext, useState } from "react";

export const WishlistContext = createContext();

export default function WishlistProvider( {children} ) {

    const [wishlist, setWishlist] = useState([]);
    return (
        <WishlistContext.Provider
            value={ { wishlist, setWishlist } }
        >
            {children}
        </WishlistContext.Provider>
    )
}
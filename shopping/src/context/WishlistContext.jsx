import { createContext, useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { getWishlist, addToWishlist, removeFromWishlist } from "../services/wishlistServices";

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {

    const {user} = useAuth();
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {

        if (!user) {
            setWishlist([]);
            return;
        }

        const loadWishlist = async () => {
            try {
                const data = await getWishlist(user.uid);
                setWishlist(data);
            } catch (error) {
                console.error("Failed to load wishlist:", error);
            }
        };

        loadWishlist();

    }, [user]);    

    // Toggle wishlist
    const toggleWishlist = async (product) => {

        if (!user) {
            console.error("User must be logged in to use wishlist");
            return;
        }

        const existingProduct = wishlist.some(
            (item) => item.id === product.id
        );

        try {

            if (existingProduct) {

                await removeFromWishlist(user.uid, product.id);

                setWishlist((prevWishlist) =>
                    prevWishlist.filter(
                        (item) => item.id !== product.id
                    )
                );

            } else {

                await addToWishlist(user.uid, product);

                const wishlistProduct = {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail
                };

                setWishlist((prevWishlist) => [
                    ...prevWishlist,
                    wishlistProduct
                ]);
            }

        } catch (error) {
            console.error("Failed to update wishlist:", error);
        }
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
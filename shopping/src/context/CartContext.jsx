import { createContext, useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { getCart, addToCart as addToCartFirestore, updateCartQuantity, removeFromCart } from "../services/cartServices";

export const CartContext = createContext();

export default function CartProvider( {children} ){
    
    const {user} = useAuth();
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (!user) {
            setCart([]);
            return;
        }

        const loadCart = async () => {
            try {
                const data = await getCart(user.uid);
                setCart(data);
            } catch (error) {
                console.error("Failed to load cart:", error);
            }
        };

        loadCart();

    }, [user]);

    const addToCart = async (product) => {

        if (!user) {
            console.error("User must be logged in to use cart");
            return;
        }

        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        try {

            if (existingProduct) {
                console.log("Product already exists in cart");
                return;
            }

            await addToCartFirestore(user.uid, product);

            const cartProduct = {
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                quantity: 1
            };

            setCart((prevCart) => [
                ...prevCart,
                cartProduct
            ]);

        } catch (error) {
            console.error("Failed to add product to cart:", error);
        }
    };    

    const increaseQuantity = async (id) => {

        if (!user) {
            return;
        }

        const product = cart.find(
            (item) => item.id === id
        );

        if (!product) {
            return;
        }

        const newQuantity = product.quantity + 1;

        try {

            await updateCartQuantity(
                user.uid,
                id,
                newQuantity
            );

            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: newQuantity
                        }
                        : item
                )
            );

        } catch (error) {
            console.error(
                "Failed to increase quantity:",
                error
            );
        }
    };

    const decreaseQuantity = async (id) => {

        if (!user) {
            return;
        }

        const product = cart.find(
            (item) => item.id === id
        );

        if (!product) {
            return;
        }

        if (product.quantity <= 1) {
            return;
        }

        const newQuantity = product.quantity - 1;

        try {

            await updateCartQuantity(
                user.uid,
                id,
                newQuantity
            );

            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: newQuantity
                        }
                        : item
                )
            );

        } catch (error) {
            console.error(
                "Failed to decrease quantity:",
                error
            );
        }
    };

    const removeItem = async (id) => {

        if (!user) {
            return;
        }

        try {

            await removeFromCart(user.uid, id);

            setCart((prevCart) =>
                prevCart.filter(
                    (item) => item.id !== id
                )
            );

        } catch (error) {
            console.error(
                "Failed to remove item:",
                error
            );
        }
    };

    const value = { cart, addToCart, increaseQuantity, decreaseQuantity, removeItem }

    return(
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    )
}
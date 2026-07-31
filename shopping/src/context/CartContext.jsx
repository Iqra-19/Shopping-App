import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider( {children} ){
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
            setCart((prevCart) => {

                const existingProduct = prevCart.find(
                    (item) => item.id === product.id
                );

                if (existingProduct) {
                    return prevCart.map((item) =>
                        item.id === product.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                            }
                            : item
                    );
                }

                return [
                    ...prevCart,
                    {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        thumbnail: product.thumbnail,
                        quantity: 1,
                    },
                ];
            });
    };

    const increaseQuantity = (id) => {
        setCart( (prevCart) => 
        prevCart.map( (item) => 
            item.id === id 
            ? {
                ...item, 
                quantity : item.quantity +1
            }
            : item
        )
        )
    };

    const decreaseQuantity = (id) => {
        setCart ( (prevCart) =>
        prevCart.map( (item) => 
            item.id ===id 
            ? {
                ...item, 
                quantity : 
                item.quantity > 1
                    ? item.quantity - 1
                    : 1
            }
            : item
        )
        );
    };

    const removeItem = (id) => {
        setCart( (prevCart) =>
        prevCart.filter ( (item) => item.id !== id )
        );
    };

    const value = { cart, addToCart, addToCart, increaseQuantity, decreaseQuantity, removeItem }

    return(
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    )
}
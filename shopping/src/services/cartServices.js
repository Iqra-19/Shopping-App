import { collection, getDocs, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const cartCollection = (userId) => {
    return collection(db, "users", userId, "cart");
};

export const getCart = async (userId) => {
    const snapshot = await getDocs(
        cartCollection(userId)
    );

    return snapshot.docs.map((document) => {
        const data = document.data();

        return {
            id: data.productId,
            title: data.title,
            price: data.price,
            thumbnail: data.thumbnail,
            quantity: data.quantity
        };
    });
};

export const addToCart = async (userId, product) => {
    const productRef = doc(
        db,
        "users",
        userId,
        "cart",
        String(product.id)
    );

    await setDoc(productRef, {
        productId: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1
    });
};

export const updateCartQuantity = async (userId, productId, quantity) => {
    const productRef = doc(
        db,
        "users",
        userId,
        "cart",
        String(productId)
    );

    await updateDoc(productRef, {
        quantity: quantity
    });

    console.log("Firestore update completed");
};

export const removeFromCart = async (userId, productId) => {
    const productRef = doc(
        db,
        "users",
        userId,
        "cart",
        String(productId)
    );

    await deleteDoc(productRef);
};
import { collection, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const wishlistCollection = (userId) => {
    return collection(db, "users", userId, "wishlist");
}

// get Wishlist
export const getWishlist = async (userId) => {
    const snapshot = await getDocs(
        wishlistCollection(userId)
    );

    return snapshot.docs.map((document) => {
        const data = document.data();

        return {
            id: data.productId,
            title: data.title,
            price: data.price,
            thumbnail: data.thumbnail
        };
    });
}

// Add Wishlist
export const addToWishlist = async (userId, product) => {
    const productRef = doc(
        db,
        "users",
        userId,
        "wishlist",
        String(product.id)
    );

    await setDoc(productRef, {
        productId: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail
    });
};

// Remove
export const removeFromWishlist = async (userId, productId) => {
    const productRef = doc(
        db,
        "users",
        userId,
        "wishlist",
        String(productId)
    );

    await deleteDoc(productRef);
};


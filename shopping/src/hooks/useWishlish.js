import { useContext } from "react"
import { WishlistContext } from "../context/WishlistContext"

export function useWishlish() {
  return useContext(WishlistContext);
}

import { db } from "../firebase/firebase"
import { collection } from "firebase/firestore"

function FireStoreTest() {
  
    const handleTest = () => {
        const userCollection = collection(db, "users");  // Give reference to the "users" collection
        console.log("Users Collection:", userCollection);
    }
  
    return (
    <>
        <h2>Test</h2>
        <button onClick={handleTest}> Test </button> 
    </>
  )
}

export default FireStoreTest
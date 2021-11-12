import React, { useState } from "react";
import initializeFirebaseApp from "../Pages/Login/Firebase/Firebase.init";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

initializeFirebaseApp();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");



    //  Signup with Email and password
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in
            const user =result.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    // Login with email and password
const logInWithEmail = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert(" Log in succesfull")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

    // signout

const logOut = () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
        });
}

    return {
        logInWithEmail,
        handleUserRegister,
        logOut,user

    };
};

export default useFirebase;

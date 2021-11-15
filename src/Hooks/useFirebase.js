import React, { useEffect, useState } from "react";
import initializeFirebaseApp from "../Pages/Login/Firebase/Firebase.init";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";


initializeFirebaseApp();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    //  Signup with Email and password
    const handleUserRegister = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError("");
                history.replace("/");
                // Signed in

                // const user = result.user;
                setUser(userCredential.user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    // Login with email and password
    const logInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const destination = location?.state?.from || '/';
                // history.replace(destination);
                setError("");
                // Signed in
                const user = userCredential.user;
                // alert(" Log in succesfull");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };
    // Monitoring Authentication change
    useEffect(() => {
        const auth=getAuth()
     const unsb= onAuthStateChanged(auth,(user)=>{
         if(user){
             setUser(user)
         }else(setUser({}))
     })
     return ()=>unsb
    },[]);

    // signout

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        
        }

    return {
        logInWithEmail,
        handleUserRegister,
        logOut,
        user,
        isLoading,
    };
};

export default useFirebase;

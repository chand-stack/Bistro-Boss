import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import usePublicAxios from '../useAxios/usePublicAxios'

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const axios = usePublicAxios()

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unsubsCribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                const userInfo = {email: currentUser?.email}
              axios.post("/jwt",userInfo)
              .then(res => {
                if(res?.data?.token){
                    localStorage.setItem("access-token",res?.data?.token)
                }
              })
            }else{
                 localStorage.removeItem("access-token")
            }
        })
        return () => {
            return unsubsCribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
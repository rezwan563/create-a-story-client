import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);
const gooleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, gooleProvider)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            return unsubscribe
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        emailLogin,
        profileUpdate,
        googleLogin,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
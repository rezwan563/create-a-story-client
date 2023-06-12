import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import axios from 'axios';

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
            // get and set token
            if(currentUser){
                axios.post('https://assignment-12-capture-a-story-server.vercel.app/jwt', {email: currentUser.email})
                .then(data =>{
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            
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
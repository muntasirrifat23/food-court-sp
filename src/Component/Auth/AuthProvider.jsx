import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});    

    //Create 
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Sign In
    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Sign Out 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log(currentUser);
            setUser(currentUser);
        });
        return()=>{
            unSubscribe();
        }
    }, [])

    //
    const logOut= ()=>{
        return signOut(auth);
    }

    const authInfo = { user, createUser, signIn, logOut  }
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>

    );
};

export default AuthProvider;
AuthProvider.PropTypes = {
    children: PropTypes.node
}
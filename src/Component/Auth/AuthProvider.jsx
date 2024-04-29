import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

    const authInfo = { user, createUser, signIn }
    
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
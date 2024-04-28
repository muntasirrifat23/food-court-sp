import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../../firebase.init";
import { FaBeer } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { useState } from "react";



const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [googleUser, setGoogleUser] = useState(null)

    //Google Sign In
    const handleSign = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setGoogleUser(user)
                console.log(user);
            })
            .catch((error) => {
                console.log('error happen', error.message);
            })
    }

    //Google Sign Out
    const googleOut = () => {
        signOut(auth)
            .then(result => {
                setGoogleUser(null);
            })
            .catch((error) => {
                console.log('error happen', error.message);
            })
    }
    return (
        <div>
            {googleUser &&
                <p className="text-lg text-red-500">User: {googleUser.displayName}</p>
            }

            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold mx-auto p-4">Login now!</h1>

                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                                {
                                    googleUser ?
                                        <button className="btn btn-warning mt-3 rounded-full" onClick={googleOut}>Sign Out</button> :
                                        <button onClick={handleSign} className="mx-auto mt-5 border-2 border-orange-700	rounded-full p-2 bg-orange-"> <FaGoogle className="text-orange-700"></FaGoogle></button>  //user ? logout : sign in
                                }

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
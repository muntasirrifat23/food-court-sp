import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const auth = getAuth(app);
    const [userError, setUserError] = useState('');
    const [show, setShow] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setUserError('');

        if (password.length < 6) {
            setUserError("Password should be at least 6 character");
            return;
        }
        //Email-password auth
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
                setUserError(error.message);
            })
        console.log("submit");
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <h1 className="text-5xl font-bold mx-auto p-4">Registration</h1>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <p className="flex space-y-2">
                                    <input type={show ? "text" : "password"} name="password" placeholder="password" className="input input-bordered mr-4" required />
                                    <span onClick={() => setShow(!show)} >
                                    <p className="text-2xl">
                                        {
                                            show ? <FaEyeSlash /> :  <FaRegEye /> 
                                        }
                                        </p>
                                        
                                    </span>
                                </p>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success text-white font-bold">Register</button>

                            </div>
                            <p className="text-red-600">
                                {
                                    userError && <> {userError}</>
                                }
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
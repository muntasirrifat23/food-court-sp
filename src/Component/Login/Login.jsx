import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase.init";



const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleSign= () =>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const user= result.user;
            console.log(user);
        })
        .catch((error)=>{
            console.log('error happen', error.message);
        })
    }
    return (
        <div>
            <button onClick={handleSign}>Login Here</button>
        </div>
    );
};

export default Login;
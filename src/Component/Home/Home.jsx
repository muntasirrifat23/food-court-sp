import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            <>{user.displayName}</>
            home
        </div>
    );
};

export default Home;
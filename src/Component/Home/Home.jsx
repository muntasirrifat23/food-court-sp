import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import LeftPage from "../../Pages/LeftPage/LeftPage";
import MiddlePage from "../../Pages/MiddlePage/MiddlePage";
import RightPage from "../../Pages/RightPage/RightPage";

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            <>{user.displayName}</>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                <div>
                    <LeftPage> </LeftPage>
                </div>

                <div className="col-span-2">
                    <MiddlePage></MiddlePage>
                </div>

                <div>
                    <RightPage></RightPage>
                </div>
            </div>
        </div>
    );
};

export default Home;
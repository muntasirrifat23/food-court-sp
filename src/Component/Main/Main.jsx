import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div className="m-6">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
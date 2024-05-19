import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import LeftPage from "../../Pages/LeftPage/LeftPage";
import RightPage from "../../Pages/RightPage/RightPage";

import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Home = () => {
    const user = useContext(AuthContext);
    // const [food, setFoods] = useState([]);
    const [dataLength, setDataLength] = useState(6);

    const foods= useLoaderData();

    // useEffect(() => {
    //     fetch('../../../public/items.json')
    //         .then(res => res.json())
    //         .then(data => setFoods(data))
    // }, []);
    return (
        <div>
            <>{user.displayName}</>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                <div>
                    <LeftPage> </LeftPage>
                </div>

                <div className="col-span-2 m-4">

                    {/* Middle Page */}
                <div className='grid lg:grid-cols-2 gap-4'>
                    {
                        foods.slice(0,dataLength).map(food => <Card
                            key={food.id}
                            food={food}
                        >
                        </Card>)
                    }
                </div>
                <button className="btn btn-warning mt-6 font-bold mx-auto justify-center card" onClick={()=>setDataLength()}>Show All</button>
                </div>

                <div>
                    <RightPage></RightPage>
                </div>
            </div>
        </div>
    );
};

export default Home;
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const MiddlePage = () => {
    const [foods, setFoods] = useState([]);
    const [dataLength, setDataLength] = useState(6);

    useEffect(() => {
        fetch('../../../public/items.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className="m-4">
            {/* {foods.length} */}
            {/* <p className="text-3xl font-bold text-blue-800 mx-auto text-center">All Foods</p> */}

                
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
    );
};

export default MiddlePage;
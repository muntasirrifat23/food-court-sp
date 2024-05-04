import { useEffect, useState } from "react";

const LeftPage = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('../../../public/items.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    }, [])
    return (
        <div className="m-4">
            {/* Food Items */}
            <section>
            <p className="text-2xl font-bold text-blue-800 mx-auto text-center">Food Items</p>
            <div> 
               {/* <p> {items.length}</p>  */}
               {
                items.map(item=><p key={item.id}
                    className="block font-semibold text-xl mt-2 bg-blue-300 p-2 rounded-xl"
                > {item.id}. {item.name}</p>)
               }

            </div>
            </section>

            <section>
                
            </section>
            
        </div>
    );
};

export default LeftPage;
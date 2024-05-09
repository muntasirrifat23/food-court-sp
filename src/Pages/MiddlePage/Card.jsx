import { FaArrowRight } from "react-icons/fa";
import "./Card.css"
const Card = ({ food }) => {
    const { name, price, short_details, image, origin } = food;
    // const {name, price, short_details,long_details, rating,origin,image} =food;
    return (
        <div className="">
            <div className="card card-compact shadow-xl bg-purple-300">
                <figure><img src={image} alt="Food" className="rounded-xl p-4 card-image"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-red-600 mx-auto text-2xl">{name}</h2>
                    <p className="font-bold">{short_details}</p>
                    <div className="flex mt-2 font-semibold">
                        <p>Price: {price}$</p>
                        <p>Origin: {origin}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Details<FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
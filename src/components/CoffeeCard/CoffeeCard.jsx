import { useParams } from "react-router-dom";

const CoffeeCard = () => {
    const {cat} =useParams();
    return (
        <div>
            <h2>{cat.length}</h2>
        </div>
    );
};

export default CoffeeCard;
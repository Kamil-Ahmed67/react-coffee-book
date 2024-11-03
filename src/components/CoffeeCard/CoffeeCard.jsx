import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const data = useLoaderData();
    const { cat } = useParams();
    const [coffees, setCoffees] = useState([]); // Correct use of useState

    useEffect(() => {
       if(cat){
        const filteredByCategory = data.filter(
            coffee => coffee.category === cat
        );
        setCoffees(filteredByCategory);
       }
       else{
        setCoffees(data.slice(0,6));
       }
    }, [cat, data]);
    const navigate=useNavigate();

    return (
       <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
        <button onClick={()=>navigate('/coffees')}
         className="btn bg-yellow-500">View All</button>
       </div>
    );
};

export default CoffeeCard;

import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import Heading from "../components/Heading/Heading";

const Home = () => {
    const categories=useLoaderData();
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Headings */}
            <Heading
                title={'Browse Coffees by Category'}
                subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'}>
            </Heading>
            {/* Categories tab section */}
            <Categories categories={categories}></Categories>
            {/* Nested Components */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
import {NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Categories = ({ categories }) => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                {
                    // eslint-disable-next-line react/prop-types
                    categories.map(category => (
                        <NavLink
                         key={category.category}
                          to={`/category/${category.category}`} 
                          role="tab" className={({isActive})=>`tab text-2xl font-thin ${isActive?'tab-active':''}`}>
                            {category.category}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;
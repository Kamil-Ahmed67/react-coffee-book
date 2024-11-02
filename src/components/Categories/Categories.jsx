import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                {
                    categories.map(category => (
                        <Link
                         key={category.category}
                          to={`/category/${category.category}`} 
                          role="tLinkb" className="tab">
                            {category.category}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;
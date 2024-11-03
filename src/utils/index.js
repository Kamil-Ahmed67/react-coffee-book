import toast from "react-hot-toast";

//get all coffees from local storage
const getAllFavorite = () => {
    const all = localStorage.getItem('favorites');
    if (all) {
        const favorites = JSON.parse(all);
        return favorites;
    }
    else {
        return [];
    }
}
//add a coffee to local storage
const addFavorite = coffee => {
    //get all previously saved coffee data
    const favorites = getAllFavorite();
    const isExist=favorites.find(item=>item.id==coffee.id)
    if(isExist) return toast.error('Items Already Exist')
    favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Coffee Successfully Added')
}

//remove coffee from local storage

export { addFavorite, getAllFavorite }
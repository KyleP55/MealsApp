import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
});

function FavoritesContextProvider({ children }) {
    const [favIds, setFavIds] = useState([]);

    function addFavorite(id) {
        setFavIds((oldIds) => [...oldIds, id]);
    }

    function removeFavorite(id) {
        setFavIds((oldIds) => oldIds.filter(favIds => favIds !== id));
    }

    const value = {
        ids: favIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;
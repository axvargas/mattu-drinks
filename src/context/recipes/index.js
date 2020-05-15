import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState({
        ingredient: '',
        category: ''
    });
    const [consultFlag, setConsultFlag] = useState(false);

    useEffect(() => {
        if (consultFlag) {
            const getRecipesAPI = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.ingredient}&c=${search.category}`;
                const response = await axios.get(url);
                setRecipes(response.data.drinks);
                setConsultFlag(false);
            }
            getRecipesAPI();
        }
        // eslint-disable-next-line
    }, [search]);
    return (
        <RecipesContext.Provider
            value={{
                setSearch,
                setConsultFlag,
                recipes,
                search
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
}
export default RecipesProvider;
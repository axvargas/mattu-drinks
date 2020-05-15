import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();


const ModalProvider = (props) => {
    const [recipe, setRecipe] = useState({});
    const [idRecipe, setIdRecipe] = useState(null);
    useEffect(() => {
        const getRecipeAPI = async () => {
            if (!idRecipe) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
            const response = await axios.get(url);
            setRecipe(response.data.drinks[0]);
        }
        getRecipeAPI();
    }, [idRecipe]);
    return (
        <ModalContext.Provider
            value={{
                recipe,
                setIdRecipe,
                setRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;

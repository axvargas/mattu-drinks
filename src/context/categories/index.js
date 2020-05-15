import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// Create the context

export const CategoriesContext = createContext();


// Provider where the fuunctions and states are

const CategoriesProvider = (props) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategoriesAPI = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const response = await axios(url);
            console.log("Looking for categories")
            setCategories(response.data.drinks);
        }
        getCategoriesAPI();
    }, []);
    return (
        <CategoriesContext.Provider
            //What is going to be available while passing it
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}
export default CategoriesProvider;
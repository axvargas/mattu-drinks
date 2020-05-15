import React, { useContext } from 'react';

import {
    Grid,
} from '@material-ui/core';

import Drink from '../drink';

// Context
import { RecipesContext } from '../../context/recipes';

// import useStyles from './style';
const ImagesList = () => {
    // const classes = useStyles();

    //Uso el contexto
    const { recipes } = useContext(RecipesContext);

    return (

        < React.Fragment >

            <Grid container justify="center" spacing={1}>
                {recipes.length > 0 &&

                    recipes.map((drink, i) => (

                        <Drink drink={drink} key={drink.idDrink} />


                    ))

                }
            </Grid>
        </React.Fragment >

    );
}
export default ImagesList;
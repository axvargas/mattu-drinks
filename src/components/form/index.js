import React, { useState, useContext } from 'react';
import { Typography, Button, Grid, IconButton, InputAdornment, Input, InputLabel, FormControl, FormHelperText } from '@material-ui/core';



import useSelect from '../../hooks/useSelect';
import useStyles from './style'

import { ThemeProvider } from '@material-ui/styles';
import ClearIcon from '@material-ui/icons/Clear';

import theme from '../../theme';

//Context
import { CategoriesContext } from '../../context/categories';
import { RecipesContext } from '../../context/recipes';

const Form = () => {
    const classes = useStyles();

    //Uso el contexto
    const { categories } = useContext(CategoriesContext);
    const { setSearch, setConsultFlag } = useContext(RecipesContext);

    // State
    const [ingredient, setIngredient] = useState('');
    const [errorIngredient, setErrorIngredient] = useState(false);
    const [helperIngredient, setHelperIngredient] = useState('Ex. Vodka, Rum, Wine');
    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');

    // Hook
    const [category, SelectCategory] = useSelect('Category', null, categories);

    const handleSubmit = (event) => {
        event.preventDefault();
        let numberOfErrors = 0;
        if (!ingredient.trim()) {
            numberOfErrors++;
            setErrorIngredient(true)
            setHelperIngredient('Type the name of an ingredient')
        }
        if (category === null) {
            numberOfErrors++;
            setError(true)
            setHelper('Select a category')
        }
        if (numberOfErrors > 0) {
            console.log("Stopped...")
            return;
        }

        setSearch({
            ingredient,
            category: category.strCategory
        });
        setConsultFlag(true);
        console.log('Submiting');

    }
    const handleChangeIngredient = (event) => {
        setIngredient(event.target.value);
        setErrorIngredient(false);
        setHelperIngredient('Ex. Vodka, Rum, Wine')
    }
    const handleClear = (event) => {
        event.preventDefault();
        setHelperIngredient('Ex. Vodka, Rum, Wine')
    }
    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
                <Grid container justify="center" direction="row" alignItems="flex-start" spacing={3} className={classes.grid}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h5" className={classes.typo}>Find the news you want by category</Typography>
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <FormControl className={classes.textField}>
                            <InputLabel htmlFor="standard-adornment-password">Ingredient</InputLabel>
                            <Input
                                id="standard-basic"
                                label="Ingredient"
                                className={classes.textField}
                                value={ingredient}
                                onChange={handleChangeIngredient}
                                error={errorIngredient}
                                autoComplete='off'

                                endAdornment={
                                    <InputAdornment position="end">

                                        <IconButton

                                            aria-label="clear"
                                            onClick={handleClear}
                                        >
                                            <ClearIcon fontSize="small" />
                                        </IconButton>

                                    </InputAdornment>
                                }
                            />
                            <FormHelperText error={errorIngredient}>{helperIngredient}</FormHelperText>
                        </FormControl>

                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <SelectCategory error={error} helper={helper} setError={setError} setHelper={setHelper} />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Button
                            className={classes.btn}
                            type="submit"
                            variant="contained"
                        >
                            <Typography variant="h6" className={classes.typoBtn}>Find drinks</Typography>
                        </Button>
                    </Grid>
                </Grid>



            </form>
        </ThemeProvider>
    );
}

export default Form;

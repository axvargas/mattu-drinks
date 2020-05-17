import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery,
    Typography
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';
import useStyles from './style';

export default function ResponsiveDialog({ open, handleClose, recipe }) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const classes = useStyles();

    const showIngredients = () => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (recipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={i}>
                        <Typography variant="subtitle1" className={classes.typo}>{recipe[`strIngredient${i}`]}  {recipe[`strMeasure${i}`]}</Typography>
                    </li>)
            }
        }
        return ingredients;
    }

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                
            >
                <DialogTitle id="responsive-dialog-title">{recipe.strDrink}</DialogTitle>
                <DialogContent className={classes.dial}>

                    <Typography variant="h6" className={classes.typo}>Instructions</Typography>
                    <DialogContentText>
                        {recipe.strInstructions}
                    </DialogContentText>
                    <img src={recipe.strDrinkThumb} alt={recipe.strDrink} className={classes.img} />
                    <br />
                    <Typography variant="h6" className={classes.typo}>Ingredients</Typography>
                    <ul>
                        {

                            showIngredients()
                        }
                    </ul>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} color="secondary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
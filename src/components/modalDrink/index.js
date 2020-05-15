import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Typography, Paper, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '450px',
        [theme.breakpoints.down('sm')]: {
            width: '400px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '350px',
        },
    },
    img: {
        height: '280px',
        width: '320px',
    },
    typo: {
        fontFamily: "'Lato', sans-serif",

    }
}));

const TransitionsModal = ({ open, handleClose, recipe }) => {
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
        console.log(ingredients);
        return ingredients;
    }

    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Paper className={classes.paper}>
                        <Container>
                            <Typography variant="h5" className={classes.typo}>{recipe.strDrink}</Typography>
                            <br />
                            <Typography variant="h6" className={classes.typo}>Instructions</Typography>
                            <Typography variant="subtitle1" component="p" className={classes.typo}>{recipe.strInstructions}</Typography>
                            <br />
                            <img src={recipe.strDrinkThumb} alt={recipe.strDrink} className={classes.img} />
                            <br />
                            <Typography variant="h6" className={classes.typo}>Ingredients</Typography>
                            <ul>
                                {
                                    showIngredients()
                                }
                            </ul>
                        </Container>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
}

export default TransitionsModal;
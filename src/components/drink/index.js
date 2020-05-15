import React, { Fragment, useContext, useState } from 'react';

import {
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    Grid,
    Typography,

} from '@material-ui/core';


import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import TransitionsModal from '../modalDrink';
// Context
import { ModalContext } from '../../context/modal';


import useStyles from './style';
const Drink = ({ drink }) => {
    const classes = useStyles();
    //States
    const [open, setOpen] = useState(false);


    //useContext
    const { recipe, setIdRecipe, setRecipe } = useContext(ModalContext);

    const { strDrink, strDrinkThumb, idDrink } = drink;

    const handleOpen = () => {
        setIdRecipe(idDrink);
        setOpen(true);
    };

    const handleClose = () => {
        setIdRecipe(null);
        setRecipe({});
        setOpen(false);
    };
    return (

        <Fragment>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}  >
                <GridList cellHeight={300} className={classes.gridList} cols={1}>

                    <GridListTile cols={1} rows={1} >
                        <img src={strDrinkThumb} alt={strDrink} height="300" />
                        <GridListTileBar
                            title={<Typography className={classes.typo}>{strDrink}</Typography>}

                            actionIcon={
                                // <Link
                                //     href={image.largeImageURL}
                                //     target="_blank"
                                //     rel="noopener noreferrer"
                                // >
                                <IconButton aria-label={`goto recipe`} className={classes.icon} onClick={handleOpen}>
                                    <OpenInBrowserIcon />
                                </IconButton>
                                // </Link>
                            }

                        />
                    </GridListTile>
                </GridList>
            </Grid>
            {open &&
                <TransitionsModal open={open} handleClose={handleClose} recipe={recipe} />
            }

        </Fragment>

    );
}
export default Drink;
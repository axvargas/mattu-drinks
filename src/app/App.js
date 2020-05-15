import React from 'react';

import {
	createMuiTheme,
	responsiveFontSizes,
	MuiThemeProvider,
	Container,
	Fab,



} from '@material-ui/core';


import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';



import useStyles from './style';
import Footer from '../components/footer';
import Header from '../components/header';
import ScrollTop from '../components/scrollTop';
import Form from '../components/form';
import ListOfRecipes from '../components/listOfRecipes';

//Provider
import CategoriesProvider from '../context/categories';
import RecipesProvider from '../context/recipes';
import ModalProvider from '../context/modal';

const App = () => {

	const classes = useStyles();
	let theme = createMuiTheme();
	theme = responsiveFontSizes(theme);


	return (
		<MuiThemeProvider theme={theme}>
			<CategoriesProvider>
				<RecipesProvider>
					<ModalProvider>
						<Header title="MattuDrinks" />
						<Container className={classes.contain}>
							<Form />
							<ListOfRecipes />
						</Container>

						<Footer />
						<ScrollTop>
							<Fab className={classes.fab} size="small" aria-label="scroll back to top">
								<KeyboardArrowUpIcon />
							</Fab>
						</ScrollTop>
					</ModalProvider>
				</RecipesProvider>
			</CategoriesProvider>
		</MuiThemeProvider>
	);
}


export default App;
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    grid:{
        marginBottom: '0.5rem'
    },
    typo: {
        fontFamily: "'Lato', sans-serif",
        textAlign: 'center',
        color: 'black',
        marginTop: '15px',
    },

    searcher: {
        marginTop: '2rem',
        marginBottom: '2rem',
        textAlign: 'left'
    },
    btn: {
        width: '100%',
        backgroundColor: '#ec3a49',
        color: 'white',
        borderRadius: '0px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#ec3a49',
            boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.75), 0px 2px 2px 0px rgba(0,0,0,0.50), 0px 1px 5px 0px rgba(0,0,0,0.40)',
        },
    },
    typoBtn: {
        fontFamily: "'Lato', sans-serif",
        textAlign: 'center',
    },
    textField:{
        width: '100%'
    }
}));
export default useStyles;
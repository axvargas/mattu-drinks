import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',

    },
    typo: {
        color: 'black',
        fontWeight: '700',
        marginBottom: '50px',
        marginTop: '80px',

    },
    paper: {
        textAlign: 'center',
        backgroundColor: '#0277bd',
        borderRadius: '0px',
        width: '100%',
        color: 'white',
        minHeight: '48px'
    },

    fab: {
        backgroundColor: '#EB6864',
        '&:hover': {
            backgroundColor: 'grey'
        }
    },
    contain: {
        marginTop: '0.5rem',
        marginBottom: '0.9rem'
    }
}));
export default useStyles;
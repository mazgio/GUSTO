import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse',
        },
    },

    appBarSearch: {
        borderRadius: 4,
        marginTop: '1rem',
        marginBottom: '1rem',
        display: 'flex',
        padding: '18px',
        flexDirection: 'vertical',
    },
    pagination: {
        borderRadius: 4,
        margin: '1rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fae6b1'
    },
    gridContainer: {
        marginRight: '20rem',
        marginTop: '40px',
        marginBottom: '40px',
    },


    searchButton: {
        marginTop: '20px',

    },


}));
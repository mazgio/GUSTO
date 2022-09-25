import { makeStyles } from '@material-ui/core/styles'; //import not as default import but ad a named import with {}
import { deepPurple } from '@material-ui/core/colors';

//arrow function will return an Object
export default makeStyles((theme) => ({
    container: {
        margin: '0'
    },
    mainContainer: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',

    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    [theme.breakpoints.down('sm')]: {
        appBar: {
            padding: '10px 20px',
        },
        heading: {
            display: 'none',
        },
        userName: {
            display: 'none',
        },
        image: {
            marginLeft: '5px',
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '160px',
        },
    },

    actionDiv: {
        textAlign: 'center',
    },
}));
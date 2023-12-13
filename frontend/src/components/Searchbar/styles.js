import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({


    searchIcon: {
        color: '#ffa101',
        cursor: 'pointer'
    },
    text: {
        color: '#fff',
    },

    [theme.breakpoints.down('xs')]: {
        containerSearch: {
            width: '55%',
        },
    },

}));

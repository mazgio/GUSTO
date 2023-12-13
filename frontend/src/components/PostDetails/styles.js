import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        backgroundColor: ' #fae6b1;',

        borderRadius: '20px',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '300px',
        marginTop: '50px',

        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            width: '250px',

        },
    },
    card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
            marginBottom: '8rem',
        },
    },
    section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 1,
        marginTop: "3rem"

    },
    imageSection: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,


        },
    },
    imageSectionImage: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            width: '100%',

        },

    },
    recommendedPosts: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    loadingPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        height: '39vh',
    },
    commentsOuterContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '300px',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column-reverse',
        },
    },
    commentsInnerContainer: {
        height: '200px',
        overflowY: 'auto',
        marginRight: '30px',
    },
}));
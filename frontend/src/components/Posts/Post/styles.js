import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        border: '3px solid white',
        height: '100%',
        position: 'relative',
        backgroundColor: '#FAE6B1',
    },
    overlay: {
        position: 'absolute',
        top: '7px',
        left: '7px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '7px',
        right: '-2px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        padding: '0 16px',
        color: '#31525B'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
    },
});
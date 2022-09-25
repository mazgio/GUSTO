import React, { useState, useEffect, useRef } from 'react';
//Import all the components that i use in use in this file from MUI/core
import { Container, AppBar, Grow, Grid, Paper, Divider, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';//dispatch our actions
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import ChipInput from 'material-ui-chip-input';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import { useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles'; //import useStyles
import { getPostsBySearch } from './actions/posts.js';
import Pagination from './components/Pagination.jsx';
import { useSearchParams } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffa101',
            contrastText: '#31525b',
        },
    }
});

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ContainerSearch = () => {
    const classes = useStyles();  //use styles inside the code through classes
    const query = useQuery();
    const page = query.get('page') || 1;
    //const searchQuery = query.get('searchQuery');
    const { search: searchLocation } = useLocation();
    const [currentId, setCurrentId] = useState(0); //useState will be null if we don´t have any id selected
    const dispatch = useDispatch(); //use as an Hook , dispatch in every new component the action that we want to use

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        console.log("getting Post");
        console.log("searchParams", searchParams.get("searchQuery"));
        if (!searchParams.get("searchQuery")) {
            console.log("loading post");
            setTimeout(() => {
                dispatch(getPosts(page)); //dispatch actions inside useEffect, in our case getPosts()
            }, 200);
        }
    }, [currentId, page, dispatch]); //change the current id in the app, is going to dispatch to get post action, every change we get new post

    useEffect(() => {
        console.log("search changes");
        dispatch(getPostsBySearch({ search: searchParams.get("searchQuery"), tags: tags.join(',') }));
    }, [searchLocation]);

    const searchPost = () => {
        if (search.trim() || tags) {
            //dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            navigate(`/posts?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            navigate('/');
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    };

    const handleAddChip = (tag) => setTags([...tags, tag]);

    const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

    const sForm = useRef();


    return (
        <Container style={{ marginTop: '2rem' }} maxWidth="xl">

            <Grow in>
                <ThemeProvider theme={theme}>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={2} className={classes.gridContainer}>
                            <Grid item xs={12} sm={6} md={9}>
                                <Posts sForm={sForm} setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid style={{ paddingLeft: '1rem' }} item xs={12} sm={6} md={3}> {/*xs: extra small devices(fullWidth), sm:small devices, md:medium devices*/}

                                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                                    <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Products" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
                                    <ChipInput
                                        style={{ margin: '10px 0' }}
                                        value={tags}
                                        onAdd={(chip) => handleAddChip(chip)}
                                        onDelete={(chip) => handleDeleteChip(chip)}
                                        label="Search Tags"
                                        variant="outlined"
                                    />

                                    <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                                </AppBar>

                                <Form sForm={sForm} currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                        <Divider style={{ margin: "20px 0" }} />

                        <Paper className={classes.pagination} elevation={6}>
                            <Pagination page={page} />
                        </Paper>
                    </Container>
                </ThemeProvider >
            </Grow>
        </Container>
    );
};

export default ContainerSearch;
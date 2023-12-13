import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPostsBySearch } from '../../actions/posts';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import useStyles from './styles';
import { collapseClasses } from "@mui/material";



const theme = createTheme({
    primary: {
        main: '#fff',

    },
});


const SearchBar = () => {

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const searchPost = () => {
        if (search.trim() || tags) {
            console.log("search", search);
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            navigate(`/posts?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
            console.log("navigate", navigate);
        } else {
            navigate('/');
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    };

    return (

        <div className={classes.containerSearch}>
            <ThemeProvider theme={theme}>
                <TextField
                    className={classes.text}
                    label=""
                    onChange={(e) => setSearch(e.target.value)}

                    InputProps={{

                        endAdornment: (
                            <InputAdornment type="text" onKeyDown={handleKeyPress}>
                                <SearchIcon className={classes.searchIcon} onClick={searchPost} />
                            </InputAdornment>
                        )
                    }}
                />
            </ThemeProvider>
        </div >
    );








};




export default SearchBar;
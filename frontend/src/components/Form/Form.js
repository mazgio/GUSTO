import React, { useState, useEffect, useContext } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64'; //import FileBase as a component
import { useNavigate } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';
import { AuthContext } from "../../context/AuthProvider.js";

//to customize the palette from MUI
const theme = createTheme({
    palette: {
        primary: {
            main: '#ffa101',
            contrastText: '#31525b',
        },
        secondary: {
            main: '#43c3fcb3',
            contrastText: '#31525b',
        }
    }
});
// GET THE CURRENT ID

const Form = ({ currentId, setCurrentId, sForm }, ref) => {
    const [postData, setPostData] = useState({ title: '', message: '', tags: [], selectedFile: '' });
    //to fetch not all the post (data) from redux but only the data for the updated post
    const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    //const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    const clear = () => {
        setCurrentId(0);
        setPostData({ title: '', message: '', tags: [], selectedFile: '' });
    };
    //to populate the values of the form when we edit a post
    useEffect(() => {
        if (!post?.title) clear();
        if (post) setPostData(post);
    }, [post]); //Dependency array

    const handleSubmit = async (e) => {
        e.preventDefault(); //no to get the refresh in the browser

        if (currentId === 0) {
            dispatch(createPost({ ...postData, name: currentUser.companyName }, navigate)); //we want to dispatch the action here
            clear();
        } else {
            dispatch(updatePost(currentId, { ...postData, name: currentUser.companyName }));
            clear(); //clear the input 
        }
        // window.location.reload();
    };

    if (currentUser._id === null) {
        return (
            <Paper className={classes.paper} elevation={6}>
                <Typography variant="h6" align="center">
                    Please Sign In to visit product pages, like and comment on others´ memories.
                </Typography>
            </Paper>

        );
    }

    const handleAddChip = (tag) => {
        setPostData({ ...postData, tags: [...postData.tags, tag] });
    };

    const handleDeleteChip = (chipToDelete) => {
        setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
    };

    return (

        currentUser.userType !== "customerUsers" ? (<Paper className={classes.paper} elevation={6}>
            <form ref={sForm} autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${post?.title}"` : 'Add a Product'}</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField style={{ padding: '10px 0' }} name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <div style={{ padding: '5px 0', width: '94%' }}>
                    <ChipInput
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        fullWidth
                        value={postData.tags}
                        onAdd={(chip) => handleAddChip(chip)}
                        onDelete={(chip) => handleDeleteChip(chip)}
                    />
                </div>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <ThemeProvider theme={theme}>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </ThemeProvider >
            </form>
        </Paper>) : (<></>)



    );
};

export default React.forwardRef(Form);
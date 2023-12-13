import React, { useState, useContext } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { likePost, deletePost } from '../../../actions/posts.js';
import useStyles from './styles';
import { AuthContext } from "../../../context/AuthProvider.js";

//destructure Post
const Post = ({ post, setCurrentId, sForm }, ref) => {
    //const user = JSON.parse(localStorage.getItem('login'));
    const [likes, setLikes] = useState(post?.likes);
    const dispatch = useDispatch(); //initialize the dispatch to the delete action
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    const classes = useStyles();

    const userId = currentUser._id;
    const hasLikedPost = post.likes?.find((like) => like === userId);

    const handleLike = async () => {
        dispatch(likePost(post._id));

        if (hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== userId));
        } else {
            setLikes([...post.likes, userId]);
        }
    };

    const Likes = () => {
        if (likes && likes.length > 0) {
            return likes.find((like) => like === userId)
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    const openPost = (e) => {
        //  dispatch(getPost(post._id, navigate));

        navigate(`/posts/${post._id}`);
    };

    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
                onClick={openPost}
                style={{ backgroundColor: '#FAE6B1 ' }}
            >
                <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.name}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                {(currentUser.result?._id === post?.creator) && (
                    <div className={classes.overlay2} name="edit">
                        <Button
                            onClick={(e) => {
                                sForm.current.scrollIntoView({ behavior: "smooth" });
                                e.stopPropagation();
                                console.log("something");
                                setCurrentId(post._id);
                            }}
                            style={{ color: 'white' }}
                            size="small"
                        >
                            <MoreHorizIcon fontSize="medium" />
                        </Button>
                    </div>
                )}
                <div className={classes.details}>
                    <Typography style={{ marginLeft: '10px', color: '#31525B' }} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography style={{ color: '#31525B' }} className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 10).join(' ')}... <b style={{ color: 'black' }}>read more</b></Typography>
                </CardContent>
            </ButtonBase>
            <CardActions style={{ padding: '4px', backgroundColor: '#FAE6B1' }} className={classes.cardActions}>
                <Button style={{ padding: '4px', color: '#31525B ' }} size="medium" color="primary" disabled={userId === null} onClick={handleLike}>
                    <Likes />
                </Button>

                {(currentUser.result === post?.creator) && (
                    currentUser.userType !== "customerUsers" && currentUser._id != null ?
                        (<Button size="small" color="secondary" disabled={userId === null} onClick={() => dispatch(deletePost(post._id))}>
                            <DeleteIcon fontSize="small" /> &nbsp; Delete
                        </Button>) : (<></>)
                )}
            </CardActions>
        </Card >
    );
};

export default React.forwardRef(Post);
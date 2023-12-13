import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { commentPost } from "../../actions/posts.js";
import useStyles from "./styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffa101",
      contrastText: "#31525b",
    },
  },
});

const CommentSection = ({ post }) => {
  const user = JSON.parse(sessionStorage.getItem("login"));
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const classes = useStyles();
  const commentsRef = useRef();

  console.log(user);

  const handleComment = async () => {
    const newComments = await dispatch(
      commentPost(`${user?.username}: ${comment}`, post._id)
    );
    setComment("");
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(": ")[0]}</strong>
              {c.split(":")[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
        <ThemeProvider theme={theme}>
          <div style={{ width: "70%" }}>
            <Typography gutterBottom variant="h6">
              Write a comment
            </Typography>
            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <br />
            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={user._id === null}
              color="primary"
              variant="contained"
              onClick={handleComment}
            >
              Comment
            </Button>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default CommentSection;

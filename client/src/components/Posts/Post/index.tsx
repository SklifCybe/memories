import { FC, ReactElement } from 'react';
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography } from '@mui/material';
import moment from 'moment';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LikeIcon from '@mui/icons-material/ThumbUpOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHorizOutlined';

import { PostType } from '../../../store/posts/types';
import { useActions } from '../../../hooks/useAction';

import { useStyles } from './styles';

type PostProps = {
  post: PostType;
  setSelectedPost: (post: PostType) => void;
};

export const Post: FC<PostProps> = ({ post, setSelectedPost }): ReactElement => {
  const classes = useStyles();
  const { deletePost, likePost } = useActions();

  const handleDelete = () => {
    if (window.confirm(`Will you want to delete post ${post.title}?`) && post._id) {
      deletePost(post._id);
    }
  };

  const handleLike = () => {
    if (post._id) {
      likePost(post._id);
    }
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.picture}
        image={post.selectedFile}
        alt={`${post.title} picture`}
      />
      <CardContent>
        <div className={classes.overTitle}>
          <Typography gutterBottom variant="body2" color="text.secondary" component="div">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <IconButton size="small" color="primary" onClick={() => setSelectedPost(post)}>
            <MoreHorizIcon />
          </IconButton>
        </div>
        <Typography gutterBottom variant="body2" color="text.secondary" component="div">
          {moment(post.createdAt).fromNow()}
        </Typography>
        <div className={classes.title}>
          <Typography gutterBottom variant="h5" component="div">
            {post.creator}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
        </div>
        <Typography variant="body1">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <div className={classes.btnAction}>
          <IconButton size="small" color="primary" onClick={handleLike}>
            <LikeIcon />
          </IconButton>
          <Typography variant="body2" color="primary">
            Like {post.likeCount}
          </Typography>
        </div>
        <div className={classes.btnAction}>
          <IconButton size="small" color="primary" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
          <Typography variant="body2" color="primary">
            Delete
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
};

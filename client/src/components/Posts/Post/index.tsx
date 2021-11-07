import { FC, ReactElement } from 'react';
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography } from '@mui/material';
import {
  DeleteOutlineOutlined as DeleteIcon,
  ThumbUpOutlined as LikeIcon,
  MoreHorizOutlined as MoreHorizIcon,
} from '@mui/icons-material';
import moment from 'moment';

import { PostType } from '../../../store/posts/types';
import { useStyles } from './styles';

type PostProps = {
  post: PostType;
};

export const Post: FC<PostProps> = ({ post }): ReactElement => {
  const classes = useStyles();

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
          <IconButton size="small" color="primary">
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
          <IconButton size="small" color="primary">
            <LikeIcon />
          </IconButton>
          <Typography variant="body2" color="primary">
            Like {post.likeCount}
          </Typography>
        </div>
        <div className={classes.btnAction}>
          <IconButton size="small" color="primary">
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

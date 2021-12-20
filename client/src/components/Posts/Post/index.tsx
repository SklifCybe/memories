import { FC, ReactElement } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import moment from 'moment';
import LikeIcon from '@mui/icons-material/ThumbUpOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHorizOutlined';

import { PostType } from '../../../store/posts/types';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { DeleteModal } from '../../DeleteModal';

import { useStyles } from './styles';

type PostProps = {
  post: PostType;
  setSelectedPost: (post: PostType) => void;
};

const Post: FC<PostProps> = ({ post, setSelectedPost }): ReactElement => {
  const classes = useStyles();
  const { deletePost, likePost } = useActions();
  const userid = useTypedSelector(({ auth }) => auth.user?.id);

  const handleDelete = () => {
    if (post.id) {
      deletePost(post.id);
    }
  };

  const handleLike = () => {
    if (post.id) {
      likePost(post.id);
    }
  };

  return (
    <Card className={classes.card}>
      <div className={classes.overPicture}>
        <Typography
          color="#fff"
          className={classes.creatorField}
          gutterBottom
          variant="h5"
          component="div">
          {post.name}
        </Typography>
        <Typography
          color="#fff"
          className={classes.createdAtField}
          gutterBottom
          variant="body2"
          component="div">
          {moment(post.createdAt).fromNow()}
        </Typography>
        {userid === post.creator && (
          <div className={classes.horizBlockIcon}>
            <IconButton
              className={classes.horizIcon}
              size="small"
              onClick={() => setSelectedPost(post)}>
              <MoreHorizIcon />
            </IconButton>
          </div>
        )}
        <CardMedia
          component="img"
          className={classes.picture}
          image={post.selectedFile}
          alt={`${post.title} picture`}
          width="100%"
        />
      </div>
      <CardContent>
        <div className={classes.overTitle}>
          <Typography gutterBottom variant="body2" color="text.secondary" component="div">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <div className={classes.title}>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
        </div>
        <Typography variant="body1" color="text.secondary">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button size="small" color="primary" onClick={handleLike} disabled={post.isLikeDisabled}>
          <LikeIcon />
          &nbsp;Like {post?.likes?.length}&nbsp;
        </Button>
        {userid === post.creator && (
          <DeleteModal handleDelete={handleDelete} postTitle={post.title} />
        )}
      </CardActions>
    </Card>
  );
};

export { Post };

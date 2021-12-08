import React, { FC, ReactElement } from 'react';
import { Typography, Container, TextField, Button, Paper } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PostType } from '../../store/posts/types';

import { useStyles } from './styles';

type Values = {
  title: string;
  message: string;
  tags: string;
  pictureMsg: string;
};

const initialValues: Values = {
  title: '',
  message: '',
  tags: '',
  pictureMsg: '',
};

const validationSchema = yup.object({
  title: yup
    .string()
    .required('Title field is required')
    .max(30, 'Maximum number of characters is 30'),
  message: yup
    .string()
    .required('Message field is required')
    .max(200, 'Maximum number of characters is 200'),
  tags: yup
    .string()
    .required('Tags field is required')
    .max(200, 'Maximum number of characters is 200'),
  pictureMsg: yup.string().required('Picture is required'),
});

type FormProps = {
  setSelectedPost: (post: PostType | null) => void;
  selectedPost: PostType | null;
};

const Form: FC<FormProps> = ({ selectedPost, setSelectedPost }): ReactElement => {
  const classes = useStyles();
  const { createPost, updatePost } = useActions();
  const { user } = useTypedSelector((state) => state.auth);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: Values) => {
      let newPost = null;
      if (picture) {
        newPost = {
          title: values.title,
          message: values.message,
          tags: values.tags.replaceAll(',', ' ').split(' '),
          selectedFile: picture.toString(),
          name: user?.fullName ?? '',
        };
        createPost(newPost);
      } else {
        newPost = {
          title: values.title,
          message: values.message,
          tags: values.tags.replaceAll(',', '').split(' '),
          name: user?.fullName ?? '',
        };
        if (selectedPost && selectedPost._id) {
          updatePost(selectedPost._id, newPost);
        }
      }

      handleClear();
    },
  });
  const [picture, setPicture] = React.useState<ArrayBuffer | string | null>(null);
  const [pictureName, setPictureName] = React.useState('');

  const handlePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setPictureName(file.name);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPicture(reader.result);
      };

      event.target.value = '';
      formik.values.pictureMsg = '1';
    }
  };

  const handleClear = () => {
    formik.resetForm();
    setPicture(null);
    setSelectedPost(null);
  };

  React.useEffect(() => {
    if (selectedPost) {
      formik.setValues({
        title: selectedPost.title,
        message: selectedPost.message,
        tags: selectedPost.tags.join(' '),
        pictureMsg: '1',
      });
    }

    // i don't want to push formik in this array,
    // because this useEffect go to inifitiy loop

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPost]);

  if (!user) {
    return (
      <Paper className={classes.signInText}>
        <Container>
          <Typography>Please Sign In to create your memories and likes other's memories</Typography>
        </Container>
      </Paper>
    );
  }

  return (
    <Paper>
      <Container>
        <Typography className={classes.title} variant="h6">
          {selectedPost ? 'Changing' : 'Creating'} a memories
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.field}
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            label="Title"
            fullWidth
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            className={classes.field}
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            label="Message"
            fullWidth
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <TextField
            className={classes.field}
            name="tags"
            value={formik.values.tags}
            onChange={formik.handleChange}
            label="Tags"
            fullWidth
            error={formik.touched.tags && Boolean(formik.errors.tags)}
            helperText={formik.touched.tags && formik.errors.tags}
          />
          <Button className={classes.btnField} variant="outlined" component="label" fullWidth>
            Select a File
            <input
              type="file"
              name="picture"
              accept=".png, .jpg, .jpeg"
              onChange={handlePicture}
              hidden
            />
          </Button>
          {picture ? (
            <Typography className={classes.field} variant="body2">
              {pictureName}
            </Typography>
          ) : (
            <Typography className={classes.field} variant="body2" color="red">
              {formik.touched.pictureMsg && formik.errors.pictureMsg}
            </Typography>
          )}
          <Button
            className={classes.btnField}
            type="submit"
            variant="contained"
            color="info"
            fullWidth>
            Submit
          </Button>
          <Button
            className={classes.btnField}
            onClick={handleClear}
            variant="contained"
            color="error"
            fullWidth>
            Clear
          </Button>
        </form>
      </Container>
    </Paper>
  );
};

export { Form };

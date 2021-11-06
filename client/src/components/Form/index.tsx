import React, { FC, ReactElement } from 'react';
import { Typography, Container, TextField, Button, Paper } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { useStyles } from './styles';

type Values = {
  creator: string;
  title: string;
  message: string;
  tags: string;
  pictureMsg: string;
};

const initialValues: Values = {
  creator: '',
  title: '',
  message: '',
  tags: '',
  pictureMsg: '',
};

const validationSchema = yup.object({
  creator: yup
    .string()
    .required('Cretor field is required')
    .min(2, 'Minimum number of characters is 2')
    .max(20, 'Maximum number of characters is 20'),
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

export const Form: FC = (): ReactElement => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: Values) => {
      if (picture) {
        console.log('Was submit');
        handleClear();
      }
    },
  });
  const [picture, setPicture] = React.useState<File | null>(null);

  const handlePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    if (event.target.files) {
      setPicture(event.target.files[0]);
      event.target.value = '';
      formik.values.pictureMsg = '1';
    }
  };

  const handleClear = () => {
    formik.resetForm();
    setPicture(null);
  };

  return (
    <Paper>
      <Container>
        <Typography className={classes.title} variant="h6">
          Creating a memories
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.field}
            name="creator"
            value={formik.values.creator}
            onChange={formik.handleChange}
            label="Creator"
            fullWidth
            error={formik.touched.creator && Boolean(formik.errors.creator)}
            helperText={formik.touched.creator && formik.errors.creator}
          />
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
            multiline
            rows="4"
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
            <input type="file" name="picture" onChange={handlePicture} hidden />
          </Button>
          {picture ? (
            <Typography className={classes.field} variant="body2">
              {picture.name}
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

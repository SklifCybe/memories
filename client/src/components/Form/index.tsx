import React, { FC, ReactElement } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';

import { useStyles } from './styles';

type Values = {
  creator: string;
  title: string;
  message: string;
  tags: string;
};

const initialValues: Values = {
  creator: '',
  title: '',
  message: '',
  tags: '',
};

export const Form: FC = (): ReactElement => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues,
    onSubmit: (values: Values) => {
      if (values && picture) {
        console.log(values);
        console.log(picture);
      }
    },
  });
  const [picture, setPicture] = React.useState<File | null>(null);

  const handlePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPicture(event.target.files[0]);
    }
  };

  return (
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
        />
        <TextField
          className={classes.field}
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          label="Title"
          fullWidth
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
        />
        <TextField
          className={classes.field}
          name="tags"
          value={formik.values.tags}
          onChange={formik.handleChange}
          label="Tags"
          fullWidth
        />
        <Button className={classes.btnField} variant="outlined" component="label" fullWidth>
          Select a File
          <input type="file" name="picture" onChange={handlePicture} hidden />
        </Button>
        <Button
          className={classes.btnField}
          type="submit"
          variant="contained"
          color="info"
          fullWidth>
          Submit
        </Button>
        <Button className={classes.btnField} variant="contained" color="error" fullWidth>
          Clear
        </Button>
      </form>
    </Container>
  );
};

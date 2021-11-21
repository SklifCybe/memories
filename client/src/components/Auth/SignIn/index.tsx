import { FC, ReactElement } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useStyles } from '../styles';

type SignInProps = {
  switchMode: () => void;
};

const SignIn: FC<SignInProps> = ({ switchMode }): ReactElement => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Enter a valid email')
        .max(40, 'Email should be of maximum 40 characters length')
        .required('Email is required'),
      password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .max(32, 'Password should be of maximum 32 characters length')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Typography variant="h6">Sign In</Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          name="email"
          label="Email"
          type="email"
          fullWidth
          margin="dense"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          fullWidth
          margin="dense"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button className={classes.submitButton} variant="outlined" type="submit">
          Sign In
        </Button>
      </form>
      <Typography className={classes.linkToggle} variant="body2" onClick={switchMode}>
        Don't have an account? Sign Up
      </Typography>
    </>
  );
};

export { SignIn };

import { FC, ReactElement } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useStyles } from '../styles';

type SignUpProps = {
  switchMode: () => void;
};

const SignUp: FC<SignUpProps> = ({ switchMode }): ReactElement => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
      firstName: '',
      lastName: '',
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
      repeatPassword: yup
        .string()
        .min(8, 'Repeat password should be of minimum 8 characters length')
        .max(32, 'Repeat password should be of maximum 32 characters length')
        .required('Repeat password is required'),
      firstName: yup
        .string()
        .min(2, 'First name should be of minimum 8 characters length')
        .max(32, 'First name should be of maximum 32 characters length')
        .required('First name is required'),
      lastName: yup
        .string()
        .min(2, 'Last name should be of minimum 8 characters length')
        .max(32, 'Last name should be of maximum 32 characters length')
        .required('Lsst name is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Typography variant="h6">Sign In</Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              label="First Name"
              type="text"
              fullWidth
              margin="dense"
              required
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              label="Last Name"
              type="text"
              fullWidth
              margin="dense"
              required
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
        </Grid>
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
        <TextField
          name="repeatPassword"
          label="Repeat Password"
          type="password"
          fullWidth
          margin="dense"
          required
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
          helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
        />
        <Button className={classes.submitButton} variant="outlined" type="submit">
          Sign Up
        </Button>
      </form>
      <Typography className={classes.linkToggle} variant="body2" onClick={switchMode}>
        Already have an account? Sign in
      </Typography>
    </>
  );
};

export { SignUp };

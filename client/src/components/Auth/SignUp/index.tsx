import { FC, ReactElement } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { signUpSchema } from '../validationSchemas';
import { SignUpForm } from '../../../store/auth/types';
import { useActions } from '../../../hooks/useAction';

import { useStyles } from '../styles';

type SignUpProps = {
  switchMode: () => void;
};

const initialValues: SignUpForm = {
  email: '',
  password: '',
  repeatPassword: '',
  firstName: '',
  lastName: '',
};

const SignUp: FC<SignUpProps> = ({ switchMode }): ReactElement => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { signup } = useActions();
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      signup(values);
      navigate('/');
    },
  });

  return (
    <>
      <Typography variant="h6">Sign Up</Typography>
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
          type="text"
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
          type="text"
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

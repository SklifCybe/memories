import { FC, ReactElement } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import GoogleIcon from '@mui/icons-material/Google';

import { signInSchema } from '../validationSchemas';
import { useActions } from '../../../hooks/useAction';

import { useStyles } from '../styles';

type SignInProps = {
  switchMode: () => void;
};

const initialValues = {
  email: '',
  password: '',
};

const SignIn: FC<SignInProps> = ({ switchMode }): ReactElement => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { authAC } = useActions();

  const successGoogleLogin = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const { profileObj, tokenId: token } = res as GoogleLoginResponse;
    const { name: fullName, imageUrl: avatar } = profileObj;

    authAC({ fullName, avatar, token });
  };

  const failGoogleLogin = () => {
    console.error('Bad login. Try again.');
  };

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
        <GoogleLogin
          clientId="372984908748-eeij54jgr78i3g8o4tfb1ct0aa99ra0p.apps.googleusercontent.com"
          onSuccess={successGoogleLogin}
          onFailure={failGoogleLogin}
          cookiePolicy="single_host_origin"
          render={(renderProps) => (
            <Button
              className={classes.googleBtn}
              type="submit"
              fullWidth
              variant="contained"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              startIcon={<GoogleIcon />}>
              Google Sign In
            </Button>
          )}
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

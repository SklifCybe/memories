import React, { FC, ReactElement } from 'react';
import { Container, Paper, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

import { useStyles } from './styles';

const Auth: FC = (): ReactElement => {
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = React.useState(false);
  const switchMode = () => {
    setIsSignUp((prevSignUp) => !prevSignUp);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.content}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {isSignUp ? <SignUp switchMode={switchMode} /> : <SignIn switchMode={switchMode} />}
      </Paper>
    </Container>
  );
};

export { Auth };

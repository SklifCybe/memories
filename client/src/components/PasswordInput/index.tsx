import { FC, ReactElement, useState, ChangeEvent } from 'react';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
  FormHelperText,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type PasswordProps = {
  value: string;
  handleChange: (e: ChangeEvent) => void;
  touchedPassword: boolean | undefined;
  passwordErrors: string | undefined;
}

const PasswordInput: FC<PasswordProps> = ({value, handleChange, touchedPassword, passwordErrors}): ReactElement => {
  const [isShowPassword, setIsShowPassword] = useState(true);
  
  return (
    <FormControl variant="outlined" fullWidth margin="dense" required>
      <InputLabel htmlFor="outlined-adornment-password">
        {touchedPassword && passwordErrors ? (
          <span style={{ color: 'red' }}>Password</span>
        ) : (
          'Password'
        )}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={isShowPassword ? 'password' : 'text'}
        value={value}
        onChange={handleChange}
        error={touchedPassword && Boolean(passwordErrors)}
        name="password"
        label="Password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setIsShowPassword((prev) => !prev)}>
              {isShowPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText sx={{ color: 'red' }}>
        {touchedPassword && passwordErrors}
      </FormHelperText>
    </FormControl>
  );
};

export { PasswordInput };

import * as yup from 'yup';

const totalFields = {
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
};

const signInSchema = yup.object(totalFields);

const signUpSchema = yup.object({
  ...totalFields,
  repeatPassword: yup
    .string()
    .min(8, 'Repeat password should be of minimum 8 characters length')
    .max(32, 'Repeat password should be of maximum 32 characters length')
    .required('Repeat password is required'),
  firstName: yup
    .string()
    .min(2, 'First name should be of minimum 2 characters length')
    .max(32, 'First name should be of maximum 32 characters length')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(2, 'Last name should be of minimum 2 characters length')
    .max(32, 'Last name should be of maximum 32 characters length')
    .required('Lsst name is required'),
});

export { signUpSchema, signInSchema };

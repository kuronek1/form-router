import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email( 'Email is invalid' ).required('Enter email'),
    password: yup.string().matches(/(?=.*?[A-Z])(?=.*?[A-z])(?=.*?[0-9])/).min(8, 'Short password. Min length 8 symbols').max(32, 'Long password. Max length 32 symbols').required('Enter password'),
})

export const registrationSchema = yup.object().shape({
    firstName: yup.string().required('Enter your First Name'),
    lastName: yup.string().required('Enter your Last Name'),
    displayName: yup.string().required('Enter your Display Name'),
    email: yup.string().email( 'Email is invalid' ).required('Enter email'),
    password: yup.string().matches(/(?=.*?[A-Z])(?=.*?[A-z])(?=.*?[0-9])/, "Password must contain 8 Characters, One Uppercase, One Lowercase, One Number ").min(8, 'Short password. Min length 8 symbols').max(32, 'Long password. Max length 32 symbols').required('Enter password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must be confirmed').required('Confirm password'),
    role: yup.string().required("A radio option is required"),
    agreeTerms:yup.boolean().oneOf([true],'Apply Terms of Service'),



})

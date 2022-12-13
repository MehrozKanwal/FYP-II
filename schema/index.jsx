import * as Yup from 'yup';

export const signupSchema = Yup.object({
    fullName: Yup.string().min(3).max(25).required("Please Enter your name"),
    email: Yup.string().email().required(" Enter your valid email"),
    phone: Yup.string().min(11).max(12).required("Enter your valid Number"),
    password:  Yup.string().min(4).max(8).required("Enter your valid password"),
    confirmPassword:  Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match"),

})
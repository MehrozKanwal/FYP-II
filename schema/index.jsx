import * as Yup from 'yup';
 const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
export const signupSchema = Yup.object({
    fullName: Yup.string().min(3).max(25).required("Please Enter your name"),
    email: Yup.string().email().required(" Enter your valid email"),
    phone: Yup.string().min(11).max(12).required("Enter your valid Number"),
    password:  Yup.string().min(4).max(10).matches(passwordRule, {message: "Create a Strong Password"}).required("Enter your valid password"),
    confirmPassword:  Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match"),
    department: Yup.string().oneOf(["wool", "cloth"]).required("Select Your department"),

})
export const loginSchema = Yup.object({
    email: Yup.string().email().required("Required Field"),
    password:  Yup.string().min(4).max(8).required("Enter your valid password"),

})
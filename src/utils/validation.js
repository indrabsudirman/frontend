import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().required("Name is required!")
    .matches(/^[a-zA-Z ]*$/, "Only alphabet and space are allowed.")
    .min(5, "Name must between 5 - 25 characters")
    .max(25, "Name must between 5 - 25 characters"),
  email: Yup.string().required("Email is required!")
    .email("Please provided a valid email!"),
  phoneNumber: Yup.number().required("Phone Number is required!")
    .min(10, "Phone Number must between 10 - 13 digits.")
    .max(13, "Phone Number must between 10 - 13 digits."),
  password: Yup.string().required("Password is required!"),
  confirmPassword: Yup.string().required("Confirm Password is required!"),
});

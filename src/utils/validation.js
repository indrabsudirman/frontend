import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .required("Name is required!")
    .matches(/^[a-zA-Z ]*$/, "Only alphabet and space are allowed.")
    .min(5, "Name must between 5 - 25 characters")
    .max(25, "Name must between 5 - 25 characters"),
  email: Yup.string()
    .required("Email is required!")
    .email("Please provided a valid email!"),
  phoneNumber: Yup.string()
    .required("Phone Number is required!")
    .matches(/^[0-9]*$/, "Only number between 0 - 9 are allowed.")
    .min(10, "Phone Number must between 10 - 13 digits.")
    .max(13, "Phone Number must between 10 - 13 digits."),
  password: Yup.string()
    .required("Password is required!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{10,}$/,
      "Password must contain atleast 10 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character."
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{10,}$/,
      "Password must contain atleast 10 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character."
    )
    .oneOf(
      [Yup.ref("password"), null],
      "Password and Confirm Password didn't match!"
    ),
});

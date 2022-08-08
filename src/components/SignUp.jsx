import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as yup from "yup";

const SignUp = () => {
  const validate = yup.object({
    firstName: yup
      .string()
      .max(15, "Must by 15 characters or less")
      .required("Required"),
    lastName: yup
      .string()
      .max(20, "Must by 20 characters or less")
      .required("Required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Password confirmation is required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {(formik) => (
        <div>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <div className="buttons">
              <button className="btn-primary" type="submit">
                Register
              </button>
              <button className="btn-secondary" type="reset">
                Reset
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;

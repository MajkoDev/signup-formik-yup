import { Formik, Form } from "formik";
import TextField from "./TextField";

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
    >
      {(formik) => (
        <div>
          <Form>
          <TextField label="First Name" name="firstName" type="text" />
          <TextField label="Last Name" name="lastName" type="text" />
          <TextField label="Email" name="email" type="email" />
          <TextField label="Password" name="password" type="password" />
          <TextField label="Confirm Password" name="confirmPassword" type="password" />
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SignUp
import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import NavBar from "../NavBar";

const Register = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email address is required")
      .email("Enter a valid email address"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
  });
  return (
    <div className="todo_container">
      <NavBar />
      <div className="todoBody">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            isSubmitting,
          }) => (
            <form>
              <div>
                <h1>Sign up</h1>
                <p>Fill in your details</p>
              </div>
              <div>
                <label>First Name</label>
                <input type="text" placeholder="First Name" name="first_name" />
                <p>{touched.first_name && errors.first_name}</p>
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" name="last_name" />
                <p>{touched.last_name && errors.last_name}</p>
              </div>
              <div>
                <label>Email</label>
                <input type="password" name="password" />
                <p>{touched.password && errors.password}</p>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Register;

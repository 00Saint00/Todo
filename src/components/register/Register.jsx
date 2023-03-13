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
    confirmPassword: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email address is required")
      .email("Enter a valid email address"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    password: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requites a number"),
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
                <input
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{touched.first_name && errors.first_name}</p>
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{touched.last_name && errors.last_name}</p>
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{touched.email && errors.email}</p>
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  value={values.password}
                  name="password"
                  placeholder="********"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.password && errors.password}</span>
              </div>
              <div>
                <label> Confirm password</label>
                <input
                  type="password"
                  value={values.confirmPassword}
                  name="password"
                  placeholder="********"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.password && errors.password}</span>
              </div>
              <button>Create Account</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Register;

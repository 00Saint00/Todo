import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import NavBar from "../NavBar";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate;
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email address is required")
      .email("Enter a valid email address"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    password: yup.string(),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password does not match"),
  });
  return (
    <div className="todo_container">
      <NavBar />
      <div className="tody">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);

            var config = {
              method: "post",

              url: "https://authentication-paul1.onrender.com/register",
              headers: {
                "Content-Type": "application/json",
              },
              data: values,
            };

            axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                toast.success("Registered Successfully");
                localStorage.setItem("token", response.data.token);
                navigate("/");
              })
              .catch(function (error) {
                console.log(error.response.data);
                toast.error(error.response.data);
              });
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
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <h1>Sign up</h1>
                <p>Fill in your details</p>
              </div>
              <div className="texts">
                {/* <label>First Name</label> */}
                <input
                  label="First Name"
                  type="text"
                  // placeholder="First Name"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.first_name && errors.first_name}</span>
              </div>
              <div className="texts">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.last_name && errors.last_name}</span>
              </div>
              <div className="texts">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.email && errors.email}</span>
              </div>
              <div className="texts">
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
              <div className="texts">
                <label> Confirm password</label>
                <input
                  type="password"
                  value={values.confirm}
                  name="confirm"
                  placeholder="********"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>{touched.confirm && errors.confirm}</span>
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const Login = ({ status, errors, touched }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
    <>
      <h1>Login Form</h1>
      <Form>
        <div>
          <label>Username: </label>
          <Field
            className="inputField"
            name="username"
            type="text"
            placeholder="User Name"
          />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        </div>
        <div>
          <label>Password: </label>
          <Field
            className="inputField"
            name="password"
            type="password"
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

const FormikLoginFOrm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
      users: ["users"]
    };
  },

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("http://localhost:5000/api/register ", {
        username: values.username,
        password: values.password
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err.response));

    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6)
      .required("Password is required")
  })
})(Login);

export default FormikLoginFOrm;

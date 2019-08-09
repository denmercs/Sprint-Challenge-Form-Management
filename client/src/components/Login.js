import React, { useState, useEffect } from "react";
import LoginCard from "./LoginCard";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const LoginForm = ({ errors, touched }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(res => setUsers(res.data));
  }, []);

  return (
    <div className="user-form">
      <h1>Form</h1>
      <Form>
        <Field type="text" name="username" placeholder="username" />
        {touched.username && errors.username && (
          <p className="error">{errors.email}</p>
        )}
        <Field type="password" name="password" placeholder="password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">SignUp</button>
        <div className="cardContainter">
          {users.map(user => (
            <LoginCard
              key={user.name}
              name={user.name}
              course={user.course}
              technique={user.technique}
            />
          ))}
        </div>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropstoValues(values) {
    return {
      username: values.username || "",
      password: values.password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("nope"),
    password: Yup.string().required("nope")
  }),

  handleSubmit(values) {
    axios
      .post("http://localhost:5000/api/register/", values)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
})(LoginForm);

export default FormikLoginForm;

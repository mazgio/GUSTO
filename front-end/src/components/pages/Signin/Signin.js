import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import { Icon } from "react-icons-kit";
import { eyeDisabled } from "react-icons-kit/ionicons/eyeDisabled";
import { eye } from "react-icons-kit/ionicons/eye";

const Signin = (props) => {
  const initialValues = { username: "", password: "" };

  /* Start Password visibility */
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeDisabled);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeDisabled);
      setType("password");
    }
  };
  /* End Password visibility */

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    // create login data
    const loginData = {
      username: formValues.username,
      password: formValues.password,
    };

    // define the POST request
    const settings = {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log("Server URL:", process.env.REACT_APP_SERVER_URL);
    console.log("Fetch Settings:", settings);

    try {
      // make a POST request
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, settings);
      console.log('Inside handleSubmit 1');

      console.log("RESPONSE", response);

      if (!response.ok) {
        throw new Error(`Server returned ${response.status} - ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Expected JSON response from server');
      }

      const parsedRes = await response.json();
      console.log(parsedRes);

      const newUser = {
        _id: parsedRes.id,
        username: parsedRes.username,
        userType: parsedRes.userType,
        companyName: parsedRes.companyName,
        token: parsedRes.token,
      };

      props.setCurrentUser(newUser);

      setFormErrors(validate(formValues));
      setIsSubmit(true);
    } catch (err) {
      console.error(err.message);
      alert('Failed to sign in. Please check your credentials.');
      setFormValues(initialValues);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const navigate = useNavigate();

  return (
    <div className="signin-container">
      {Object.keys(formErrors).length === 0 && isSubmit ? navigate("/") : <></>}
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <hr />
        <div className="form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className="err">{formErrors.username}</p>
          <div className="field">
            <label>Password</label>
            <div className="pass-eye">
              <input
                type={type}
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              <span onClick={handleToggle} className="eye">
                <Icon icon={icon} />
              </span>
            </div>
          </div>
          <p className="err">{formErrors.password}</p>
          <button>Sign in</button>
          <p>
            Not registered?<span> </span>
            <Link className="sign-button" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;

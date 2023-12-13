import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import { eyeDisabled } from 'react-icons-kit/ionicons/eyeDisabled';
import { eye } from 'react-icons-kit/ionicons/eye';
import "./Signup.css";

const BusinessSignup = () => {
  const initialValues = {
    username: "",
    firstName: "",
    lastName: "",
    companyOwner: "",
    companyName: "",
    city: "",
    street: "",
    zipCode: "",
    businessTelephone: "",
    emailAddress: "",
    password: "",
  };


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

    // cate a new business user
    const newBusinessUser = {
      username: formValues.username,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      companyOwner: formValues.companyOwner,
      companyName: formValues.companyName,
      city: formValues.city,
      street: formValues.street,
      zipCode: formValues.zipCode,
      businessTelephone: formValues.businessTelephone,
      emailAddress: formValues.emailAddress,
      password: formValues.password,
    };
    // settings
    const settings = {
      method: "POST",
      body: JSON.stringify(newBusinessUser),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // POST REQUEST
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/registerBusiness",
      settings
    );
    const parsedRes = await response.json();

    try {
      if (response.ok) {
        //props.setCurrentUserId(parsedRes.id);
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const validate = (values) => {
    const errors = {};
    // const regex =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!values.companyOwner) {
      errors.companyOwner = "Owner name is required";
    }

    if (!values.companyName) {
      errors.companyName = "Company name is required";
    }

    if (!values.city) {
      errors.city = "required";
    }

    if (!values.street) {
      errors.street = "required";
    }

    if (!values.zipCode) {
      errors.zipCode = "required";
    }

    if (!values.businessTelephone) {
      errors.businessTelephone = "required";
    }
    if (!values.firstName) {
      errors.firstName = "First name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.emailAddress) {
      errors.emailAddress = "Email is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const navigate = useNavigate();

  return (
    <div className="signup-container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        navigate("/signin")
      ) : (
        <></>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <hr />
        <div className="form">
          <div className="field">
            <label>Company Owner</label>
            <input
              type="text"
              name="companyOwner"
              placeholder="Owner Name"
              value={formValues.companyOwner}
              onChange={handleChange}
            />
          </div>
          <p className="err">{formErrors.companyOwner}</p>
          <div className="field">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formValues.companyName}
              onChange={handleChange}
            />
          </div>
          <p className="err">{formErrors.companyName}</p>
          <div className="field">
            <div className="address">
              <div className="address-input">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formValues.city}
                  onChange={handleChange}
                />
                <p className="err">{formErrors.city}</p>
              </div>
              <div className="address-input">
                <label>Zip Code</label>
                <input
                  type="number"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formValues.zipCode}
                  onChange={handleChange}
                />
                <p className="err">{formErrors.zipCode}</p>
              </div>
              <div className="address-input">
                <label>Street</label>
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  value={formValues.street}
                  onChange={handleChange}
                />
                <p className="err">{formErrors.street}</p>
              </div>
              <div className="address-input">
                <label>Telephone</label>
                <input
                  type="number"
                  name="businessTelephone"
                  placeholder="Telephone"
                  value={formValues.businessTelephone}
                  onChange={handleChange}
                />
                <p className="err">{formErrors.businessTelephone}</p>
              </div>
            </div>
          </div>
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
          <div className="field">
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="Email"
              value={formValues.emailAddress}
              onChange={handleChange}
            />
          </div>
          <p className="err">{formErrors.emailAddress}</p>
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
              <span onClick={handleToggle} className="eye"><Icon icon={icon} /></span>
            </div>
          </div>
          <p className="err">{formErrors.password}</p>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default BusinessSignup;

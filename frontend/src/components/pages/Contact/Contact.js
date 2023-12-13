import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Signup/Signup.css";
import "./Contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = () => {
        emailjs.sendForm('service_bgisc2v', 'template_wsyd8l2', form.current, '7BkDWcpjWcsXmIKax')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const initialValues = { fullName: "", email: "", phone: "", message: "" };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);

    const handleChange = event => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        sendEmail();
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!values.fullName) {
            errors.fullName = "First name is required";
        }

        if (!values.email) {
            errors.email = "Email is required";
        }

        if (!values.message) {
            errors.message = "Write your message";
        }

        return errors;
    };

    const navigate = useNavigate();

    return (
        <div className="signup-container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (navigate("/signin")) : (<p></p>)}
            <form ref={form} onSubmit={handleSubmit}>
                <h1>Contact</h1>
                <hr />
                <div className="form">
                    <div className="field">
                        <label>Full Name</label>
                        <input type="text" name="fullName" placeholder="First Name" value={formValues.fullName} onChange={handleChange} />
                    </div>
                    <p className="err">{formErrors.fullName}</p>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
                    </div>
                    <p className="err">{formErrors.email}</p>
                    <div className="field">
                        <label>Telephone</label>
                        <input type="number" name="telephone" placeholder="Telephone" value={formValues.email} onChange={handleChange} />
                    </div>
                    <div className="field">
                        <label>Message</label>
                        <textarea className="message" type="text" name="message" placeholder="Write your message" value={formValues.message} onChange={handleChange} />
                    </div>
                    <p className="err">{formErrors.message}</p>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { registrationSchema } from "../../../Validation/UserValidation"
import {onSubmit} from "../";
import  styles from"./RegForm.module.sass"

const initialValues = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    radio: "",
    checkbox: false,
};


// КАК БЫТЬ С ПРОВЕРКОЙ ПАРОЛЯ КОТОРАЯ ЗАЛАЗИТ НА ВЕРХ
export default function RegistrationForm(props) {

    console.log(styles);
    return (
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={registrationSchema}
            >
            {(formikProps) => {
                return (
                    <Form className={styles.formFormik}>
                        <div className={styles.divInput}>
                            <Field className={styles.field} type="text" name="firstName"  placeholder="First Name"/>
                            <ErrorMessage component="div" name="firstName" className={styles.error}/>
                            <Field className={styles.field} type="text" name="lastName" placeholder="Last Name"/>
                            <ErrorMessage component="div" name="lastName" className={styles.error}/>
                        </div>
                        <div className={styles.divInput}>
                            <Field className={styles.field} type="text" name="displayName" placeholder="Display Name"/>
                            <ErrorMessage component="div" name="displayName" className={styles.error}/>
                            <Field className={styles.field} type="email" name="email" placeholder="Email"/>
                            <ErrorMessage component="div" name="email" className={styles.error}/>
                        </div>
                        <div className={styles.divInput}>
                            <Field className={styles.field} type="password" name="password" placeholder="Password"/>
                            <ErrorMessage component="div" name="password" className={styles.error}/>
                            <Field className={styles.field} type="password" name="confirmPassword" placeholder="Confirm Password"/>
                            <ErrorMessage component="div" name="confirmPassword" className={styles.error}/>
                        </div>
                        <div>
                            <div className={styles.checkbox}>
                                <Field id='radio' className={styles.field} type="radio" name="radio" value="Join as a Buyer"/>
                                <ErrorMessage component="div" name="radio" className={styles.error}/>
                                <label for="radio" className={styles.label}>
                                    <h4>Join As a Buyer</h4>
                                    <span>I am looking for a Name, Logo or Tagline for my business, brand or product.</span>
                                </label>
                            </div>
                            <div className={styles.checkbox}>
                                <Field id="radio" className={styles.field} type="radio" name="radio" value="Join As a Creative"/>
                                <label for="radio" className={styles.label}>
                                    <h4>Join As a Creative or Marketplace Seller</h4>
                                    <span>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</span>
                                </label>
                            </div>
                            <div className={styles.checkbox}>
                                <Field id="checkbox" className={styles.field} type="checkbox" name="checkbox" />
                                <ErrorMessage component="div" name="checkbox" className={styles.error}/>
                                <label htmlFor="checkbox">Allow Squadhelp to send marketing/promotional offers from time to time</label>
                            </div>
                        </div>

                        <button type="submit">Create Account</button>
                        <div>
                            <span>By clicking this button, you agree to our </span>
                            <a href="http://www.google.com">Terms of Service.</a>
                        </div>
                        <button>Sign up with Google</button>
                    </Form>
                );
            }}
        </Formik>
    );
}

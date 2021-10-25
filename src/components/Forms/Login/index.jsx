import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import {onSubmit} from "../";
import { loginSchema } from "../../../Validation/UserValidation"
import  styles from"./LogForm.module.sass"

const initialValues = {
    email: "",
    password: "",
    checkbox: false,
};


// Добавить проверки
export default function LoginForm(props) {
    return (
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={loginSchema}
            >
            {(formikProps) => {
                return (
                    <Form className={styles.formFormik}>
                        <div className={styles.divInput}>
                            <Field className={styles.field} type="email" name="email" placeholder="Email"/>
                            <ErrorMessage component="div" name="email" className={styles.error}/>
                        </div>
                        <div className={styles.divInput}>
                            <Field className={styles.field} type="password" name="password" placeholder="Password"/>
                            <ErrorMessage component="div" name="password" className={styles.error}/>
                        </div>
                        <div className={styles.checkbox}>
                            <label>
                                <Field className={styles.field} type="checkbox" name="checkbox" />
                                Remember me</label>
                            <a href="http://www.google.com">Forgot Password</a>
                        </div>

                        <button type="submit">Create Account</button>
                        <button>Sign up with Google</button>
                    </Form>
                );
            }}
        </Formik>
    );
}

import React from 'react'
import LoginForm from '../../components/Forms/Login'
import styles from "./LogPage.module.sass"

export default function LoginPage() {

    return (
        <div className={styles.page}>
            <header className={styles.header}>
            <a href="/"><img src="https://www.squadhelp.com/img/logo.png" alt="logo sqadhelp-copy"/></a>
                <a href="/registration">Signup</a>
            </header>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>LOGIN TO YOUR ACCOUNT</h1>
                </div>
                <LoginForm/>
            </div>

        </div>
        )
}
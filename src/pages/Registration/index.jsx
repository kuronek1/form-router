import React from 'react'
import RegistrationForm from '../../components/Forms/Registration'
import styles from "./RegPage.module.sass"

export default function RegistrationPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
            <a href="/"><img src="https://www.squadhelp.com/img/logo.png" alt="logo sqadhelp-copy"/></a>
                <a href="/login">Login</a>
            </header>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>CREATE AN ACCOUT</h1>
                    <h2>We always keep your name and email address private</h2>
                </div>
                <RegistrationForm/>
            </div>

        </div>
        )
}

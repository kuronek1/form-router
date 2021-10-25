import React from 'react'
import styles from './HomePage.module.sass'

export default function HomePage() {
    return (
        <div className={styles.HomePage}>

            <header className={styles.header}>
                <div className={styles.navbar}>
                    <a href="/registration">SignUp</a>
                    <a href="/"><img src="https://www.squadhelp.com/img/logo.png" alt="logo sqadhelp-copy"/></a>
                    <a href="/login">Login</a>
                </div>
            </header>
            <main className={styles.main}>
                Just Content
            </main>
        </div>
    )
}

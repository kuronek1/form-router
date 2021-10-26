import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.sass'

export default function HomePage() {
    return (
        <div className={styles.HomePage}>

            <header className={styles.header}>
                <div className={styles.navbar}>
                    <Link to="/registration">SignUp</Link>
                    <Link to="/"><img src="https://www.squadhelp.com/img/logo.png" alt="logo sqadhelp-copy"/></Link>
                    <Link to="/login">Login</Link>
                </div>
            </header>
            <main className={styles.main}>
                Just Content
            </main>
        </div>
    )
}

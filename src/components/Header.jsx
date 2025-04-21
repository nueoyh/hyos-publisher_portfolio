import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles}>
        <div className={styles.inner}>
            <h1 className={styles.logo}>
                <a href="#">
                    HOME
                    <span className="blind">효은 포트폴리오</span>
                </a>
            </h1>
            <nav>
                <ul className={styles.gnb}>
                    <li><a href="#web">Publishing</a></li>
                    <li><a href="#design">Design</a></li>
                    <li><a href="#profile">profile</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer className={styles} id='contact'>
        <div className="inner">
            <div>
              <h2>Contact</h2>
              <a href="mailto:hsilver1630@gmail.com">hsilver1630@gmail.com</a>
            </div>
            <p className={styles.copyright}>&copy; 2025. nueoyh. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Contact
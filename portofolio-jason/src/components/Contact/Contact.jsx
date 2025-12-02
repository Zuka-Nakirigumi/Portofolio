import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                <a href="mailto:jasonsetiawan2k3@gmail.com">jasonsetiawan2k3@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin" />
                <a href="https://www.linkedin.com/in/jason-setiawan-widjaja-go">linkedin.com/in/jason-setiawan-widjaja-go/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Email" />
                <a href="https://www.github.com/Zuka-Nakirigumi">https://www.github.com/Zuka-Nakirigumi</a>
            </li>
        </ul>
    </footer>
  )
}

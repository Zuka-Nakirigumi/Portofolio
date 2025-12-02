import React from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
            alt="About"
            className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/book.png")} alt="Book icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Education</h3>
                        <p> Petra Christian University, Infomatics (AI)</p>
                        <p> GPA : 3.88 / 4.00 </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/value.png")} alt="Value icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Principle</h3>
                        <p> I prioritize clean code, modular architecture, meaningful documentation, and testable code. I believe in solving problems with clarity and efficiency.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/goal.png")} alt="Goal icon" />
                    <div className={styles.aboutItemText}>
                        <h3>What I'm Learning Now</h3>
                        <p> Currently learning website development with React.js, computer vision traditional algorithms, and improved CNN architectures for computer vision tasks. </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

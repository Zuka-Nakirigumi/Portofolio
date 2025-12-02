import React from 'react'
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Jason Setiawan Widjaja Go</h1>
        <p className={styles.description}> Informatics student specializing in Artificial Intelligence. 
          Passionate about endless innovation in the tech industry through continuous learning. 
          Reach out if you'd like to learn more!</p>
        <a href="mailto:jasonsetiawan2k3@gmail.com" className={styles.contactBtn}> Contact Me</a>
    </div>
    <img src={getImageUrl("hero/Hero_Jason2.png")} alt="Hero image of Zuka" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
  </section>);
}

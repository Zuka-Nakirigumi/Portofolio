import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({project : {title,imageSrc,description,skills,github,source}}) => {
  return (
    <div className={styles.container}> 
        <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill,id) =>{ return <li key={id} className={styles.skill}> {skill}</li>})}
        </ul>
        <div className={styles.links}>
          {github ? (<a className={styles.link} href={github} target="_blank">GitHub</a>) 
          : (<span className={`${styles.link} ${styles.disabled}`}>GitHub</span>)}
          {source ? (<a className={styles.link} href={source} target="_blank">PDF</a>) 
          : (<span className={`${styles.link} ${styles.disabled}`}>PDF</span>)}
        </div>
    </div>
  )
}

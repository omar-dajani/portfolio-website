import React from 'react';
import styles from './project-card.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderClosed, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = (props) => {
    return (
        <div className={styles['project-card']}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <FontAwesomeIcon icon={faFolderClosed} size="2x" />
                </div>
                <div className={styles.right}>
                    <a href={props.externalLink} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon id={styles['external-link']} icon={faExternalLinkAlt} size="lg" />
                    </a>
                </div>
            </div>
            <div className={styles.body}>
                <p className={styles.title}>{props.title}</p>
                <p className="body-text">{props.description}</p>
            </div>
            <div className={styles['tech-stack']}>
                {props.myArray.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;
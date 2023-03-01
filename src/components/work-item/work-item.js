import React from 'react';
import styles from './work-item.module.css';

const WorkItem = (props) => {
    return (
        <div className={styles['experience-item']}>
            <div className={styles['title-row']}>
                <div className={styles.left}>
                    <div className={styles.line}></div>
                    <div className={styles.donut}></div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.right}>
                    <p>
                        {props.positionTitle} @ <a href={props.companyUrl} target="_blank" rel="noopener noreferrer">
                            {props.companyName}
                        </a>
                    </p>
                </div>
            </div>
            <div className={styles['content-row']}>
                <div className={styles.left}>
                    <div className={styles.line}></div>
                </div>
                <div className={props.lastChild ? "" : styles['right-p']}>
                    <p className={styles['experience-time-frame']}>{props.timeWorked}</p>
                    <ul className={styles['description-list']}>
                        {props.accomplishments.map((item, index) => (
                            <li key={index}>
                                <p className="body-text">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WorkItem;
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import pathfindingVisualizer from "../../media/pathfinding-visualizer.png";

import ProjectCard from '../project-card/project-card.js';
import styles from './projects.module.css';

function Projects() {
    return (
        <Container fluid id={styles['projects-container']}>
            <p className="section-title">03. PROJECTS</p>
            <p className="large-title">Things I've built</p>

            <div id={styles['featured-project']}>
                <div className={styles.left}>
                    <img id={styles['featured-project-screenshot']} src={pathfindingVisualizer} alt="featured project preview" />
                </div>
                <div className={styles.right}>
                    <div id={styles['featured-project-right-container']}>
                        <p id={styles['featured-project-text']}>Featured Project</p>
                        <p id={styles['featured-project-title']}>Pathfinding Visualizer</p>
                        <div id={styles['body-container']}>
                            <p id={styles['body-text']} className="body-text">A web application for visualizing different pathfinding algorithms. Add weights and walls to see how the algorithms work and compare them by taking a look at the path cost.</p>
                        </div>
                        <div id={styles['tech-stack']}>
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>HTML</p>
                            <p>CSS</p>
                        </div>
                        <div id={styles['external-links']}>
                            <FontAwesomeIcon id={styles['arrow-down']} size="2x" icon={faGithub} />
                        </div>
                    </div>
                </div>
            </div>

            <div id={styles['other-noteworthy-projects']}>
                <div className={styles['title-container']}>
                    <p className={styles.title}>Other Noteworthy Projects</p>
                    <p id={styles['view-the-archive']}>view the archive</p>
                </div>
                <div id={styles['project-cards-container']}>
                    <ProjectCard title="Personal Website" description="First iteration of my personal website built with React and hosted on my domain." myArray={['React', 'JavaScript']} externalLink="https://github.com/omar-dajani/portfolio-website"/>
                    <ProjectCard title="FIFA Prediction (WIP)" description="Using a Keras Sequential Model to predict a player's age based off their stats. Training data consists of FIFA datasets from 2016 - 2022." myArray={['Python', 'Machine Learning']} externalLink=""/>
                    <ProjectCard title="Brewery Reviews" description="A sleek web-based application that enables users to browse breweries using Open Brewery's API, providing a platform for leaving reviews that are stored in a database." myArray={['React', 'JavaScript', 'SQL', 'Firebase', 'Express.js']} externalLink="https://github.com/omardajanis/Brewery-Reviews"/>
                </div>
            </div>
        </Container>
    );
}

export default Projects;
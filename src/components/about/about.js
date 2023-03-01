import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

import styles from './about.module.css';
import headshot from "../../media/headshot.jpg";

function About() {
  return (
    <Container fluid id={styles['about-container']}>
      <p className='section-title'>01. ABOUT ME</p>
      <div className={styles['about-row']}>
        <div id={styles['about-split']}>
          <div id={styles['about-left-split']}>
            <p className="large-title" >Me talking about myself</p>

            <p id={styles['about-caption']}>A computer science undergraduate who loves to travel, ski and solve problems that are intrinsically fun to tackle.</p>
            <p className="body-text">I am a senior computer science (B.S.) undergraduate studying at the University of Colorado Boulder. Throughout my degree, I have gained a strong foundation in computer science principles and have recently been working extensively with the .NET framework as well as AWS during my current internship. In my spare time, I enjoy learning how to create iOS applications using Swift. I have also developed a strong passion for machine learning and am always looking for new ways to expand my knowledge in this field.</p>
            <p className="body-text" id={styles['ski-text']}>P.S. there's a link hiding somewhere that contains some cool ski/travel photos I have taken.</p>
            <div id={styles['social-icons']}>
              <a href="https://twitter.com/_omardajani" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className={styles['social-icon']} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/omardajani/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className={styles['social-icon']} size="lg" />
              </a>
              <a href="https://github.com/omar-dajani" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className={styles['social-icon']} size="xl" />
              </a>
            </div>
          </div>
          <div id={styles['about-right-split']}>
            <img id={styles['headshot']} src={headshot} width="275" height="275" alt="headshot" />
          </div>
        </div>
        <Button id={styles['get-in-touch-btn']} className="gold-btn">Get in touch</Button>
      </div>
    </Container>
  );
}

export default About;
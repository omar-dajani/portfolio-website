import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkiing } from '@fortawesome/free-solid-svg-icons'

import styles from './footer.module.css';

function Footer() {
  return (
    <Container fluid id={styles['footer-container']}>
      <p className="section-title">Designed & Built by Omar Dajani</p>
      <Link to="/ski" className="link">
        <FontAwesomeIcon id={styles['ski-icon']} icon={faSkiing} size="lg" />
      </Link>
    </Container>
  );
}

export default Footer;
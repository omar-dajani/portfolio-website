import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faCircleNodes, faClose, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import styles from './nav.module.css';

function NavigationBar({ onHomeClick, onExperienceClick, onProjectsClick }) {
  const [search, setSearch] = useState(false);

  const quickLinks = ['Home', 'Experience', 'Projects', 'Blog']

  return (
    <Navbar id={styles.nav} className={search ? styles['long-nav'] : ''} bg="light" expand="lg">
      {
        search &&
        <div id={styles['search-container-parent']}>
          <div id={styles['search-container']}>
            <div className={styles.left}>
              <FontAwesomeIcon id={styles['expanded-search-icon']} icon={faMagnifyingGlass} />
            </div>
            <div className={styles.right}>
              <div id={styles['search-input']}>
                <form action="">
                  <input type="text" id={styles['search-field']} name="fname" placeholder="Search omardajani.com" />
                </form>
              </div>
              <FontAwesomeIcon icon={faClose} onClick={() => { setSearch(false) }} />
            </div>

            <div id={[styles['search-suggestions']]}>
              <p id={styles['title']}>Quick links</p>
              {
                quickLinks.map(link => {
                  return <div className={[styles['quick-link-container']]}>
                    <FontAwesomeIcon size='xs' icon={faArrowRight} onClick={() => { setSearch(false) }} />
                    <p className="small-body-text">{link}</p>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      }
      {
        !search &&
        <>
          <Navbar.Brand id={styles.title} href="#">
            <FontAwesomeIcon icon={faCircleNodes} id={styles['title-icon']} spin />
            Omar Dajani
          </Navbar.Brand>
          <Navbar.Toggle id={styles['toggle-icon']} aria-controls="basic-navbar-nav">
            <FontAwesomeIcon id="nav-collapse-icon" icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="d-flex" id={styles['nav-item-links']}>
                <Nav.Link onClick={onHomeClick} className={styles['nav-item']} href="#"><Link className="link" to="/">Home</Link></Nav.Link>
                <Nav.Link onClick={onExperienceClick} className={styles['nav-item']} href="#">Experience</Nav.Link>
                <Nav.Link onClick={onProjectsClick} className={styles['nav-item']} href="#">Projects</Nav.Link>
                <Nav.Link className={styles['nav-item']} href="#">Blog</Nav.Link>
                <Nav.Link className={styles['nav-item']} href="https://omardajani.com/files/Omar_Dajani_Resume.pdf" target="_blank">Résumé</Nav.Link>
              </div>
              <div className="d-flex" id={styles['nav-item-icons']}>
                <Nav.Link className={styles['nav-item-icon']} href="#">
                  <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => { setSearch(true) }} />
                </Nav.Link>
                <Nav.Link className={styles['nav-item-icon']} href="#">
                  <FontAwesomeIcon icon={faBars} />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </>
      }
    </Navbar>
  );
}

export default NavigationBar;
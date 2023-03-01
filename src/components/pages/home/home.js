import React, { useRef, useState, useEffect } from 'react';
import NavigationBar from '../../nav/nav.js';
import About from '../../about/about.js';
import Work from '../../work/work.js';
import Projects from '../../projects/projects.js';
import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import styles from './home.module.css';

function Home() {
    const [shouldBounce, setShouldBounce] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShouldBounce(true);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        let timeoutId;

        if (shouldBounce) {
            timeoutId = setTimeout(() => {
                setShouldBounce(false);
            }, 2000);
        }

        return () => clearTimeout(timeoutId);
    }, [shouldBounce]);

    const sectionRefs = [
        useRef(null), // home
        useRef(null), // experience
        useRef(null), // projects
    ];

    function handleScrollToSection(ref) {
        const yOffset = -50; // Set the offset to -50 pixels
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    return (
        <>
            <div id={styles.parent}>
                <div id={styles['nav-bar']}>
                    <NavigationBar onHomeClick={() => handleScrollToSection(sectionRefs[0])} onExperienceClick={() => handleScrollToSection(sectionRefs[1])} onProjectsClick={() => handleScrollToSection(sectionRefs[2])} />
                </div>
                <div ref={sectionRefs[0]} id={styles.about}>
                    <About />
                </div>
                <div id={styles['view-experience']}>
                    <p id={styles['view-experience-text']}>view experience</p>
                    <FontAwesomeIcon id="arrow-down" size="lg" icon={faArrowDown} bounce={shouldBounce} />
                </div>
            </div>
            <div ref={sectionRefs[1]} id={styles.work}>
                <Work />
            </div>
            <div ref={sectionRefs[2]} id={styles.projects}>
                <Projects />
            </div>
        </>
    );
}

export default Home;
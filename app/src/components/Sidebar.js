import React from 'react';
import './styles/Sidebar.css';
import photo from '../assets/aric-new.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import resume from '../assets/Resume.pdf'

const Sidebar = () => {

    const openFile = () => {
        window.open(resume);
    };

    return (
        <div class="sidebar-container">
            <img class='aric-small' src={photo}/>
            <div class='group1'>
                <a onClick={openFile}><FontAwesomeIcon  icon={faPaperclip} class='icon-awesome' /></a>
                <a href="https://www.github.com/aricrepp"><FontAwesomeIcon  icon={faGithub} class='icon-awesome' /></a>
                <a href="https://www.linkedin.com/in/aric-repp/"><FontAwesomeIcon  icon={faLinkedin} class='icon-awesome' /></a>
            </div>
        </div>
    );
}

export default Sidebar;
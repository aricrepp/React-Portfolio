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
        <div className="sidebar-container">
            <img className='aric-small' alt='Aric' src={photo}></img>
            <div className='group1'>
                <a target='_blank' rel="noopener noreferrer" href='/#' onClick={openFile}><FontAwesomeIcon  icon={faPaperclip} className='icon-awesome' style={{width: '25px'}}/></a>
                <a target='_blank' rel="noopener noreferrer" href="https://www.github.com/aricrepp"><FontAwesomeIcon  icon={faGithub} className='icon-awesome' style={{width: '25px'}}/></a>
                <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/aric-repp/"><FontAwesomeIcon  icon={faLinkedin} className='icon-awesome' style={{width: '25px'}}/></a>
            </div>
        </div>
    );
}

export default Sidebar;
import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import './styles/NewHeader.css';

const NewHeader = () => {

    const [bgColor, setBgColor] = useState('dashboard-header')
    const [textColor, setTextColor] = useState('links-h')

    const scrollListener = e => {
        if (window.scrollY > 150){
            setBgColor('dashboard-header-bg')
            setTextColor('links-h-bg')
        } else {
            setBgColor('dashboard-header')
            setTextColor('links-h')
        }
    }
    
    useEffect((e) => {
        window.addEventListener('scroll', scrollListener)

        return () =>{
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return ( 
        <header className={bgColor} >
            <h2>Aric <br/>Repp</h2>
            <div className="header-links">
                <li className={textColor}><Link activeClass='active' to='home' spy={true} smooth={true}>Home</Link></li>
                <li className={textColor}><Link to='projects' spy={true} smooth={true}>Projects</Link></li>
                <li className={textColor}><Link to='repos' spy={true} smooth={true}>Repos</Link></li>
                <li className={textColor}><Link to='about' spy={true} smooth={true}>About</Link></li>
                <li className={textColor} style={{color: '#41b2d2'}}><Link to='contact' spy={true} smooth={true}>Contact</Link></li>
            </div>
        </header>
    );
}

export default NewHeader;
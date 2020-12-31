import React, {useState, useEffect} from 'react';
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
        <header class={bgColor} >
            <h2>Aric <br/>Repp</h2>
            <div class="header-links">
                <a class={textColor}>Home</a>
                <a class={textColor}>Projects</a>
                <a class={textColor}>Repos</a>
                <a class={textColor}>About</a>
                <a class={textColor} style={{color: '#41b2d2'}}>Contact</a>
            </div>
        </header>
    );
}

export default NewHeader;
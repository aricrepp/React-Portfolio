import React from 'react';
import './styles/NewAbout.css';

const skills = [
    'HTML5',
    'CSS3',
    'Javascript',
    'Agile Method',
    'LESS',
    'GIT',
    'Github',
    'MaterialUI',
    'React',
    'Redux',
    'Context',
    'Docker',
    'Jest',
    'Cypress',
    'SQLLite',
    'RESTful API',
    'Single Page Apps',
    'PostgreSQL',
    'NodeJS',
    'ExpressJS',
    'Python',
    'Algorithms',
    'Async JavaScript',
    'Authentication',
    'Unit Testing',
]  

const NewAbout = (props) => {
    return (
        <section id='about' className='about-wrapper'>
            <h3>>_About</h3>
            <section className='about-con'>
                <div className='about-content-con'>
                    <div className='about-content-h'><p> X</p><div></div><p>-</p></div>
                    <div className='about-content'>
                        <h4>- About Aric -</h4>
                        <br></br>
                        <p className='about-content-text'>
                            Beginning this software journey, I never knew how much life would
                            play an important role to becoming a well rounded developer. Being
                            born in Arizona, raised in the MidWest and having traveled as far as
                            Hong Kong, all of my journeys and experiences helped form who I am
                            today. And as of today, I'm a father to one little
                            boy, avid nerd for all things tech, and gamer when I have a spare
                            minute.
                        </p>
                        <p className='about-content-text'>
                            Now on the matter of Web Development, you might be asking "Why does
                            he want to be a Software Developer?". The short answer is because of
                            the Internet, the long answer starts back when I was a child. My era
                            grew up with all sorts of crazy technology that changed outrageously
                            fast. With all these outlets, I naturally began choosing those which
                            interested me the most. Each time I found myself going back to the
                            Internet to play a game, to read a forum, or to find some hidden or
                            unknown knowledge. I was beholden to what the Internet was. It was
                            the last wild west of the world and this intrigued me greatly.
                        </p>
                        <p className='about-content-text'>
                            I never lost site on my goal of becoming a developer. I continued to
                            learn in and outside of Lambda School, always pushing myself to know
                            more. This drive to be the best allowed me to jump into creating EQO
                            which is only the first of many I have begun creating. I can say
                            confidently that I am ready to prove myself and join a fantastic
                            company that is ready for an extremely dedicated and motivated
                            individual like myself.
                        </p>
                    </div>
                    
                </div>
                <div className='about-skills'>
                        <h4>SKILLS</h4>
                        <div className='about-skills-pills'>
                            {skills.map((item, index) => {
                                return <div key={index}>{item}</div>;
                            })}
                        </div>
                    </div>
            </section>
        </section>
    )
}

export default NewAbout;
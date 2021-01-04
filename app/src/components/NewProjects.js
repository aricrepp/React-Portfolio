import React from 'react';
import projData from './ProjectData';
import './styles/NewProjects.css';

const NewProjects = () => {
    return (
        <section id='projects' className='projects-wrapper'>
            <h3>>_Projects</h3>

            {projData.map((item, index) => {
                return (
                    <section className={item.id % 2 === 0 ? 'mention_con_reverse' : 'mention_con'} key={index}>
                        <div className="projects_title_con">
                            <img src={item.img} alt='project' className='projects-image' />
                            <div>
                                <a
                                    className='learn-a'
                                    href={item.website}
                                >
                                    <span className='learn-more'>Website</span>
                                </a>
                                {item.repo === '' ? null : <a
                                    className='learn-a'
                                    href={item.repo}
                                >
                                    <span className='learn-more'>Repo</span>
                                </a>}
                            </div>
                            
                        </div>
                        <div className='projects-content'>
                            <h5>{item.title}</h5>
                            <div className='projects-roles'>
                                <h6>Roles</h6>
                                <p>{item.roles}</p>
                            </div>
                            <p className='project-text grey'>
                                {item.desc}
                            </p>
                            
                            <div className='projects-skills'>
                                <h6>Stack</h6>
                                <div className='projects-skills-con'>
                                    {item.stack.map((item, index) => {
                                        return (
                                            <div className='projects-pill' key={index}>{item}</div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                )  
            })}
        </section>
    );
}

export default NewProjects;
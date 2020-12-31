import React from 'react';
import projData from './ProjectData';
import './styles/NewProjects.css';

const NewProjects = () => {
    return (
        <section class='projects-wrapper'>
            <h3>>_Projects</h3>

            {projData.map((item, index) => {
                return (
                    <section class={item.id % 2 == 0 ? 'mention_con_reverse' : 'mention_con'} key={index}>
                        <div class="projects_title_con">
                            <img src={item.img} class='projects-image' />
                            <div>
                                <a
                                    class='learn-a'
                                    href={item.website}
                                >
                                    <span class='learn-more'>Website</span>
                                </a>
                                {item.repo === '' ? null : <a
                                    class='learn-a'
                                    href={item.repo}
                                >
                                    <span class='learn-more'>Repo</span>
                                </a>}
                            </div>
                            
                        </div>
                        <div class='projects-content'>
                            <h6>{item.title}</h6>
                            <div class='projects-roles'>
                                <h7>Roles</h7>
                                <p>{item.roles}</p>
                            </div>
                            <p class='project-text grey'>
                                {item.desc}
                            </p>
                            
                            <div class='projects-skills'>
                                <h8>Stack</h8>
                                <div class='projects-skills-con'>
                                    {item.stack.map((item, index) => {
                                        return (
                                            <div class='projects-pill' key={index}>{item}</div>
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
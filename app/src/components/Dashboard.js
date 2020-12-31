import React from 'react';
import Sidebar from './Sidebar';
import NewHeader from './NewHeader';
import HeroText from './HeroText';
import NewProjects from './NewProjects';
import NewRepos from './NewRepos';
import NewAbout from './NewAbout';
import Contact from './Contact';
import './styles/Dashboard.css';


const Dashboard = (props) => {
    return (
        <section class='dashboard-wrapper'>
            <Sidebar />
            <NewHeader />
            <section class='dashboard-content'>
                <HeroText />
                <NewProjects />
                <NewAbout />
                <NewRepos repo={props.repo} isFetching={props.isFetching}/>
                <Contact />
            </section>
            
        </section>
    );
}

export default Dashboard;
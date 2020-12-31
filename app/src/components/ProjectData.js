import React from 'react';
import eqo from '../assets/eqo.gif';
import fitness from '../assets/fitness.gif';
import tandem from '../assets/Tandem.gif';
import upGrade from '../assets/upGrade.gif';

export default [
    {
        id: 1,
        title: 'Tandem Challenge',
        img: tandem,
        website: 'https://zen-kirch-055fb4.netlify.app/',
        repo: 'https://github.com/aricrepp/Tandem_Challenge',
        roles: 'Front End Developer, Primary Designer',
        desc: 'Tandem Challenge 2020 was a project challenge promoted by Tandem Software. My goal was to create an application that displays trivia questions with multiple choice answers over a 1 week sprint. With roughly 2 hours a day to work on it, I pulled together React Hooks methods and MaterialUI for my styling. To display my questions I used Open Trivia DB API.',
        stack: ['React', 'MaterialUI', 'API']
    },
    {
        id: 2,
        title: 'upGrade Tutors',
        img: upGrade,
        website: 'https://upgradetutors.netlify.app/',
        repo: 'https://github.com/School-In-The-Cloud-1-Sept-BW-PT/Back-End',
        roles: 'Back End Developer',
        desc: `Lead Back-end development over the course of 2 sprint weeks in collaboration with 3 front end developers to create upGrade Tutors. Managed routes, authorization, migrations, and Heroku deployment entirely. ${<><br></br><br></br></>} NOTE: Please use admin1@gmail.com and password to access the demo login`,
        stack: ['NodeJS', 'ExpressJS', 'PostgreSQL', 'Heroku']
    },
    {
        id: 3,
        title: 'Anywhere Fitness',
        img: fitness,
        website: 'https://musing-knuth-63bdac.netlify.app/login',
        repo: 'https://github.com/Build-Week-Anywhere-Fitness-PT-Danny/front-end',
        roles: 'Front End Developer, Primary Designer',
        desc: `AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs for Instructors and Clients alike. This was the first project at Lambda in which I was Lead Front End Developer. This required me to manage the other 3 front end members to deliver a working demo. ${<><br></br><br></br></>} NOTE: Please use the phrases instructor and password to access the demo login`,
        stack: ['React', 'Redux', 'MaterialUI']
    },
    {
        id: 4,
        title: 'EQO',
        img: eqo,
        website: 'http://www.eqomusic.com',
        repo: '',
        roles: 'Full Stack Developer, Primary Designer',
        desc: 'This passion project turned huge undertaking became a 3 member collaboration with colleagues of mine. EQOs purpose is to create peer to peer connections locally between fans, artists, and venues to capture the dynamic of locality and expand its broadcast.',
        stack: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL']
    },
]


import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import eqo from '../assets/new-favicon.png';
import fitness from '../assets/logo_size.jpg';
import tandem from '../assets/logo192.png';
import './css/Projects.css';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    padding: '20px 50px 0 50px',
  },
  projects: {
    color: 'grey',
    fontSize: '0.9rem',
    padding: '0.5rem',
    width: '60%',
    '@media (max-width: 500px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  image: {
    width: '200px',
    height: '200px',
    padding: '0 50px 0 50px',
    '@media (max-width: 500px)': {
      width: '150px',
      height: '150px',
    },
  },
  image2: {
    width: '260px',
    height: '120px',
    padding: '0 50px 0 50px',
    '@media (max-width: 500px)': {
      width: '200px',
      height: '100px',
    },
  },
  image3: {
    width: '120px',
    height: '120px',
    padding: '0 50px 0 50px',
    '@media (max-width: 500px)': {
      width: '200px',
      height: '100px',
    },
  },
  chipRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: '#73e9df',
    fontWeight: 'bold',
  },
  chipOld: {
    margin: theme.spacing(0.5),
    backgroundColor: '#E9737D',
    fontWeight: 'bold',
  },
  button: {
    margin: '15px',
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [oldChipData, setOldChipData] = useState([
    { key: 0, label: 'HTML5' },
    { key: 1, label: 'CSS3' },
    { key: 2, label: 'Javascipt' },
    { key: 3, label: 'PHP' },
    { key: 4, label: 'MySQL' },
  ]);
  const [newChipData, setNewChipData] = useState([
    { key: 0, label: 'React' },
    { key: 1, label: 'Redux' },
    { key: 2, label: 'Styled-Components' },
    { key: 3, label: 'NodeJS' },
    { key: 4, label: 'Express' },
    { key: 5, label: 'PostgreSQL' },
  ]);
  const [tandemData, settandemData] = useState([
    { key: 0, label: 'React' },
    { key: 1, label: 'MaterialUI' },
    { key: 2, label: 'Styled-Components' },
  ]);
  return (
    <div className="projects_con">
      <Card className="mention_con">
        <div className="projects_title_con">
          <h4>EQO</h4>
          <img src={eqo} className={classes.image} />
        </div>
        <CardContent className={classes.content}>
          <Typography className={classes.projects}>
            <b>Roles:</b> <i style={{ padding: '10px' }}>Front-end Developer</i>
            <i style={{ padding: '10px' }}>Primary Designer</i>
            <i style={{ padding: '10px' }}>Back-end Developer</i>
          </Typography>
          <Typography className={classes.projects}>
            This passion project turned huge undertaking became a 3 member
            collaboration with colleagues of mine. EQO's purpose is to create
            peer to peer connections locally between fans, artists, and venues
            to capture the dynamic of locality and expand its broadcast.
          </Typography>
          <Button
            className={classes.button}
            href="http://www.eqomusic.com"
            variant="contained"
            color="primary"
          >
            Website
          </Button>

          <div className={classes.chipRoot}>
            <h5>Old Stack:</h5>
            {oldChipData.map((data) => {
              let icon;
              return (
                <li key={data.key}>
                  <Chip
                    icon={icon}
                    label={data.label}
                    className={classes.chipOld}
                  />
                </li>
              );
            })}
          </div>
          <div className={classes.chipRoot}>
            <h5>New Stack:</h5>
            {newChipData.map((data) => {
              let icon;
              return (
                <li key={data.key}>
                  <Chip
                    icon={icon}
                    label={data.label}
                    className={classes.chip}
                  />
                </li>
              );
            })}
          </div>
        </CardContent>
      </Card>
      <hr></hr>
      <Card className="mention_con">
        <div className="projects_title_con">
          <h6>Tandem Challenge</h6>
          <img src={tandem} className={classes.image3} />
        </div>
        <CardContent className={classes.content}>
          <Typography className={classes.projects}>
            <b>Roles:</b> <i style={{ padding: '10px' }}>Front-end Developer</i>
            <i style={{ padding: '10px' }}>Primary Designer</i>
          </Typography>
          <Typography className={classes.projects}>
            Tandem Challenge 2020 was a job application project challenge
            promoted by Tandem Software. My goal was to create an application
            that displays trivia questions with multiple choice answers to
            select from. Use creative license in terms of how you want us to see
            this game. At minimum, the player can view the questsion(s), the
            answer choices, the correct answer upon submission, and their score.
            It could be a user interface (UI), command line tool, etc. Feel free
            to use whatever framework or language you are comfortable with.
          </Typography>
          <Button
            className={classes.button}
            href="https://zen-kirch-055fb4.netlify.app/"
            variant="contained"
            color="primary"
          >
            Website
          </Button>

          <div className={classes.chipRoot}>
            <h5>Stack:</h5>
            {tandemData.map((data) => {
              let icon;
              return (
                <li key={data.key}>
                  <Chip
                    icon={icon}
                    label={data.label}
                    className={classes.chip}
                  />
                </li>
              );
            })}
          </div>
        </CardContent>
      </Card>
      <hr></hr>
      <Card className="mention_con">
        <div className="projects_title_con">
          <h6>Anywhere Fitness</h6>
          <img src={fitness} className={classes.image2} />
        </div>
        <CardContent className={classes.content}>
          <Typography className={classes.projects}>
            <b>Roles:</b> <i style={{ padding: '10px' }}>Front-end Developer</i>
            <i style={{ padding: '10px' }}>Primary Designer</i>
          </Typography>
          <Typography className={classes.projects}>
            AnywhereFitness is the all-in-one solution to meet your
            “on-location” fitness class needs for Instructors and Clients alike.
            This was the first project at Lambda in which I was Lead Front End
            Developer. This required me to manage the other 3 front end members
            to deliver a working demo.
          </Typography>
          <Button
            className={classes.button}
            href="https://musing-knuth-63bdac.netlify.app/login"
            variant="contained"
            color="primary"
          >
            Website
          </Button>
          <Typography className={classes.projects}>
            <b>NOTE:</b> Please use the phrases <b>instructor</b> and{' '}
            <b>password</b> to access the demo login
          </Typography>
          <div className={classes.chipRoot}>
            <h5>Stack:</h5>
            {newChipData.map((data) => {
              let icon;
              return (
                <li key={data.key}>
                  <Chip
                    icon={icon}
                    label={data.label}
                    className={classes.chip}
                  />
                </li>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;

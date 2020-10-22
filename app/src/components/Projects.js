import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import eqo from '../assets/new-favicon.png';
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
    </div>
  );
};

export default Projects;

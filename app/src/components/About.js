import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import './css/About.css';

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
  },
  skills: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    width: '60%',
    padding: '15px',
  },
}));

const skills = [
  'HTML5',
  'CSS3',
  'Javascript',
  'Agile',
  'LESS',
  'GIT',
  'Github',
  'MaterialUI',
  'React',
  'Redux',
  'Jest',
  'Cypress',
  'SQLLite',
  'PostGreSQL',
  'Node',
  'ExpressJS',
  'Python',
];

const About = () => {
  const classes = useStyles();

  return (
    <div className="projects_con">
      <Card className="mention_con">
        <div className="about_title_con">
          <h4>Aric Repp</h4>
          <Typography className={classes.projects}>
            <i style={{ padding: '10px' }}>Front-end Developer</i>
            <i style={{ padding: '10px' }}>UI/UX Designer</i>
          </Typography>
        </div>
        <CardContent className={classes.content}>
          <Typography className={classes.projects}>Hello!</Typography>
        </CardContent>
        <div className={classes.skills}>
          {skills.map((e) => {
            return <Chip label={e} color={'primary'} />;
          })}
        </div>
      </Card>
    </div>
  );
};

export default About;

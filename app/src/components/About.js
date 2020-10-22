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
  skills_con: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  'Agile Method',
  'LESS',
  'GIT',
  'Github',
  'MaterialUI',
  'React',
  'Redux',
  'Jest',
  'Cypress',
  'SQLLite',
  'RESTful API',
  'Single Page Apps',
  'PostGreSQL',
  'Node',
  'ExpressJS',
  'Python',
  'Algorithms',
  'Async JavaScript',
  'Authentication',
  'Automated Unit Testing',
  'Big-O Notation',
  'Data Structures',
  'Debugging',
  'Deployment',
  'End-To-End Testing',
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
          <Typography className={classes.projects}>
            Beginning this software journey, I never knew how much life would
            play an important role to becoming a well rounded developer. Being
            born in Arizona, raised in the MidWest and having traveled as far as
            Hong Kong, all of my journeys and experiences helped form who I am
            today. And as of today, that man is a father currently to one little
            boy, avid nerd for all things tech, and gamer when I have a spare
            minute.
          </Typography>
          <Typography className={classes.projects}>
            Now on the matter of Web Development, you might be asking "Why does
            he want to be a Software Developer?". The short answer is because of
            the Internet, the long answer starts back when I was a child. My era
            grew up with all sorts of crazy technology that changed outrageously
            fast. With all these outlets, I naturally began choosing those which
            interested me the most. Each time I found myself going back to the
            Internet to play a game, to read a forum, or to find some hidden or
            unknown knowledge. I was beholden to what the Internet was. It was
            the last wild west of the world and this intrigued me greatly.
          </Typography>
          <Typography className={classes.projects}>
            I never lost site on my goal of becoming a developer. I continued to
            learn in and outside of Lambda School, always pushing myself to know
            more. This drive to be the best allowed me to jump into creating EQO
            which is only the first of many I have begun creating. I can say
            confidently that I am ready to prove myself and join a fantastic
            company that is ready for an extremely dedicated and motivated
            individual like myself.
          </Typography>
        </CardContent>
        <div className={classes.skills_con}>
          <h3>SKILLS</h3>
          <div className={classes.skills}>
            {skills.map((e) => {
              return <Chip label={e} color={'primary'} />;
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;

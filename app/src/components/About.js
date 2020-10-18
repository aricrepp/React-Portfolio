import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
}));

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
      </Card>
    </div>
  );
};

export default About;

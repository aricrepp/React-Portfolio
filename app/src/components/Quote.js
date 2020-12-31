import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './styles/Quote.css';

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '20px 50px 0 50px',
    '@media (max-width: 500px)': {
      padding: '30px 20px 0 20px',
    },
  },
  quote: {
    color: 'grey',
    fontSize: '0.9rem',
    padding: '0.2rem',
    '@media (max-width: 1100px)': {
      fontSize: '0.8rem',
    },
    '@media (max-width: 800px)': {
      fontSize: '0.8rem',
    },
    '@media (max-width: 500px)': {
      fontSize: '0.8rem',
    },
  },
  quote_title: {
    color: 'grey',
    fontSize: '1.1rem',
    padding: '0.2rem',
    '@media (max-width: 1100px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 800px)': {
      fontSize: '0.9rem',
    },
    '@media (max-width: 500px)': {
      fontSize: '0.9rem',
    },
  },
}));

const Quote = () => {
  const classes = useStyles();
  return (
    <div className="quote_span">
      <div className="quote_con">
        <div className="quote_inner">
          <h2>QUOTE</h2>
        </div>
        <Card className="mention_con">
          <CardContent className={classes.content}>
            <Typography className={classes.quote}>
              You got a dream... You gotta protect it. People can't do somethin'
              themselves, they wanna tell you you can't do it. If you want
              somethin', go get it. Period.
            </Typography>
            <Typography className={classes.quote_title}>
              <b>- The Pursuit of Happyness</b>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quote;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './css/Quote.css';

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '20px 50px 0 50px',
  },
  quote: {
    color: 'grey',
    fontSize: '0.9rem',
    padding: '0.5rem',
  },
}));

const Quote = () => {
  const classes = useStyles();
  return (
    <div className="quote_span">
      <div className="quote_con">
        <h2>QUOTE</h2>
        <Card className="mention_con">
          <CardContent className={classes.content}>
            <Typography className={classes.quote}>
              You got a dream... You gotta protect it. People can't do somethin'
              themselves, they wanna tell you you can't do it. If you want
              somethin', go get it. Period.
            </Typography>
            <Typography className="grey">
              <b>- The Pursuit of Happyness</b>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quote;

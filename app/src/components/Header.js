import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import photo from '../assets/aric-small.jpg';
import resume from '../assets/Resume.pdf';
import './css/Header.css';

const useStyles = makeStyles(() => ({
  avatar: {
    top: '10px',
    height: '120px',
    width: '120px',
    border: '8px solid #312f2f',
    // fontFamily: 'Courier New, monospace',
    // fontWeight: 600,
    // fontSize: '2.5em',
    // transform: 'rotate(-15deg)',
    // backgroundColor: '#E9737D',
    // color: '#312f2f',
    '@media (max-width: 500px)': {
      height: '80px',
      width: '80px',
    },
  },
}));

const LightTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'rgba(255,255,255,1)',
    color: 'rgba(0,0,0,0.9)',
    boxShadow: '0px 1px 3px 1px rgba(50,50,50,0.5)',
    fontSize: 18,
  },
}))(Tooltip);

const openFile = () => {
  window.open(resume);
};

const Header = (props) => {
  console.log(props);

  const classes = useStyles();
  return (
    <header className="_header">
      <div className="_header_content">
        <Avatar className={classes.avatar} alt="Aric" src={photo}></Avatar>
        <div className="_header_icons">
          <LightTooltip title="LinkedIn" aria-label="LinkedIn">
            <IconButton>
              <a
                href="https://www.linkedin.com/in/aric-repp/"
                style={{ width: '30px', height: '30px' }}
              >
                <LinkedInIcon
                  style={{ color: 'white', height: '30px', width: '30px' }}
                />
              </a>
            </IconButton>
          </LightTooltip>
          <LightTooltip title="Github" aria-label="Github">
            <IconButton>
              <a
                href="https://github.com/aricrepp"
                style={{ width: '30px', height: '30px' }}
              >
                <GitHubIcon
                  style={{ color: 'white', height: '30px', width: '30px' }}
                />
              </a>
            </IconButton>
          </LightTooltip>
          <LightTooltip title="Resume" aria-label="Resume">
            <IconButton>
              <a style={{ width: '30px', height: '30px' }} onClick={openFile}>
                <AttachFileIcon
                  style={{ color: 'white', height: '30px', width: '30px' }}
                />
              </a>
            </IconButton>
          </LightTooltip>
        </div>
      </div>
    </header>
  );
};

export default Header;

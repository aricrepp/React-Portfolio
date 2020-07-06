import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';

const useStyles = makeStyles(() => ({
  avatar: {
    top: '20px',
    height: '100px',
    width: '100px',
    border: '6px solid #312f2f',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <header className="_header">
      <div className="_header_content">
        <Avatar
          className={classes.avatar}
          alt="Aric"
          src="https://avatars0.githubusercontent.com/u/13386255?v=4"
        />
        <div className="_header_icons">
          <IconButton>
            <LinkedInIcon
              style={{ color: 'white', height: '30px', width: '30px' }}
            />
          </IconButton>
          <IconButton>
            <GitHubIcon
              style={{ color: 'white', height: '30px', width: '30px' }}
            />
          </IconButton>
          <IconButton>
            <AttachFileIcon
              style={{ color: 'white', height: '30px', width: '30px' }}
            />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;

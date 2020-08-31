import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {
  makeStyles,
  useTheme,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import './css/Tabs.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '60vw',
    flexGrow: 1,
    position: 'relative',
  },
}));

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#73e9df',
    },
  },
});

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [name, setName] = React.useState('REPOS');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleClick = (event, name) => {
    event.preventDefault();
    setName(name);
  };

  return (
    <div className="tabs_container">
      <h2>{name}</h2>
      <ThemeProvider theme={customTheme}>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab
                label="Repos"
                onClick={(e) => {
                  handleClick(e, 'REPOS');
                }}
                {...a11yProps(0)}
              />
              <Tab
                label="Projects"
                onClick={(e) => {
                  handleClick(e, 'PROJECTS');
                }}
                {...a11yProps(1)}
              />
              <Tab
                label="About"
                onClick={(e) => {
                  handleClick(e, 'ABOUT');
                }}
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              Repos
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Projects
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              About
            </TabPanel>
          </SwipeableViews>
        </div>
      </ThemeProvider>
    </div>
  );
}

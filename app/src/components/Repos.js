import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import LinkIcon from '@material-ui/icons/Link';
import './styles/Repos.css';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    padding: '20px 50px 0 50px',
  },
  title: {
    backgroundColor: '#312f2f',
    color: 'white',
  },
}));

const Repos = (props) => {
  const classes = useStyles();

  console.log(props);
  if (props.fetched) {
    return (
      <div className="repos_con">
        <div className="calender_con">
          <h3>
            <a href="https://github.com/aricrepp" className="github_link">
              @aricrepp
            </a>{' '}
            on Github!
          </h3>
          <GitHubCalendar
            username="aricrepp"
            fullYear={false}
            color="hsl(174,82%,48%)"
            fontSize={16}
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </div>
        <h3>List of Repos:</h3>
        <div className="repo_card_list_con">
          {props.repo.map((e, key) => {
            return (
              <div key="key" className="repo_card_con">
                <Card className="repo_card">
                  <CardHeader
                    title={e.name}
                    className={classes.title}
                    titleTypographyProps={{ variant: 'h7' }}
                  />
                  <CardContent className="repo_card_content">
                    <Typography>
                      {e.description
                        ? e.description
                        : 'No default description, check out the README in the repo!'}
                    </Typography>
                  </CardContent>

                  <footer className="repo_footer">
                    <a href={e.html_url} className="repo_link">
                      Repo <LinkIcon />
                    </a>
                  </footer>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="repos_con">
        <div className="calender_con">
          <h3>
            <a href="https://github.com/aricrepp" className="github_link">
              @aricrepp
            </a>{' '}
            on Github!
          </h3>
          <GitHubCalendar
            username="aricrepp"
            fullYear={false}
            color="hsl(174,82%,48%)"
            fontSize={16}
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </div>

        <div>
          <h3>Loading...</h3>
        </div>
      </div>
    );
  }
};

export default Repos;

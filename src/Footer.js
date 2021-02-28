import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    paddingTop: 50,
    paddingBottom: 50,
    width: '100%',
    backgroundColor: 'black',

    height: 70
  },
  footer: {
    borderTop: '1px solid black'
  },
  text: {
    color: 'white'
  },
  icon: {
    color: theme.palette.getContrastText('rgba(0, 0, 0, 1)'),
    width: 35,
    height: 35
  },
  iconContainer: {
    width: 300,
    margin: '0 auto'
  }
  
}));

export default function () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing = {0} className = {classes.footer}>
        <Grid item xs = {12}>
          <Grid container spacing = {0} className = {classes.iconContainer}>
            <Grid item xs = {4}>
              <a href = "https://www.linkedin.com/in/joecofong">
              <LinkedInIcon className = {classes.icon} href="https://www.linkedin.com/in/joecofong"/>
              </a>
            </Grid>
            <Grid item xs = {4}>
              <a href="https://github.com/joecof">
                <GitHubIcon className = {classes.icon}/>
              </a>
            </Grid>
            <Grid item xs = {4}>
              <a href="mailto:joecofg@gmail.com"> 
                <EmailIcon className = {classes.icon}/>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs = {12}>
          <p className = {classes.text}>© Joeco Fong - Full Stack Developer - All rights reserved. @2021.</p>
        </Grid>
      </Grid>
    </div>
  );
}

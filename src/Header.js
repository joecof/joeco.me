import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import headshot from './images/headshot.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    width: '100%',
    margin: '0 auto'
  },
  headshot: {
    borderRadius: '50%',
    width: 160,
    height: 160
  },
  icon: {
    display: 'flex',
    '-webkit-box-align': 'center',
    alignItems: 'center',
    '-webkit-box-pack': 'center',
    justifyContent: 'center',
    backgroundColor: '#b2e4ff',
    height: 180,
    width: 180,
    borderRadius: '42% 58% 37% 63% / 55% 40% 60% 45%',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 100,
    verticalAlign: 'middle',
  },
  headerText: {
    fontSize: 48
  },
  headerTextContainer: {
    marginLeft: 20
  }
}));

export default function () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing = {5}>
        <Grid align = 'right'>
        <div className = {classes.icon}>
          <img src = {headshot} className = {classes.headshot} alt = 'headshot'/>
        </div>
        </Grid>
        <Grid align = 'left' className = {classes.headerTextContainer}>
          <h1 className = {classes.headerText}> Hi, I'm Joe </h1>
          <p> I'm a software developer. I love learning and building things.  </p>
        </Grid>
      </Grid>
    </div>
  );
}

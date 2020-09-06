import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import Project from './Project'
import tempify from './images/tempify.png'
import operationRegen from './images/operation-regen.png'
import timely from './images/timely.png'
import weather from './images/weather.png'
import monitor from './images/monitor.png'
import resume from './images/resume.png'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    width: '100%',
    margin: '0 auto'
  },
  headerContainer: {
    marginBottom: 25
  },
  header: {
    fontSize: 48
  },
  icon: {
    display: 'flex',
    '-webkit-box-align': 'center',
    alignItems: 'center',
    '-webkit-box-pack': 'center',
    justifyContent: 'center',
    backgroundColor: '#B4EEB4',
    height: 180,
    width: 180,
    borderRadius: '42% 58% 37% 63% / 55% 40% 60% 45%',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 100,
    verticalAlign: 'middle',
    margin: 'auto',
  },

}));

export default function () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing = {1}>
        <Grid item xs = {12} className = {classes.headerContainer}>
          <h1 className = {classes.header}> Projects </h1>
          <p> Here are some of my latest project </p>
        </Grid>
        <Grid item xs = {12}>
          <Grid container spacing = {3}>
            <Grid item xs = {12} ssm = {12} md= {6}  lg = {4}>
              <Project 
                icon = {tempify}
                name = "Tempify"
                description = "A connected marketplace application for dental temping"
              />
            </Grid>
            <Grid item xs = {12} sm = {12} md = {6} lg = {4}>
              <Project
                icon = {operationRegen}
                name = "Operation Regen"
                description = "A 2D web-based game inspired by old school classic Mario games"
              />
            </Grid>
            <Grid item xs = {12} sm = {12} md = {6} lg = {4}>
              <Project
                icon = {timely}
                name = "Timely"
                description = "A project management and time tracking application"
              />
            </Grid>
            <Grid item xs = {12} sm = {12} md = {6} lg = {4}>
              <Project
                icon = {weather}
                name = "Weather App"
                description = "A weather application using Google maps API"
              />
            </Grid>
            <Grid item xs = {12} sm = {12} md = {6} lg = {4}>
              <Project
                icon = {monitor}
                name = "React Phaser Express"
                description = "A bare bones react-phaser-express starter stack to speed up development."
              />
            </Grid>
            <Grid item xs = {12} sm = {12} md = {6} lg = {4}>
              <Project
                icon = {resume}
                name = "Online Resume"
                description = "A React application to display my online resume."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

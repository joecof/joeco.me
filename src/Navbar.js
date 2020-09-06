import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Grid, Tabs, Tab, Avatar} from '@material-ui/core'
import icon from './images/icon.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3)
  },
  avatar: {
    color: theme.palette.getContrastText('rgba(0, 0, 0, 0.87)'),
    width: 50,
    height: 50
  },
  indicator: {
    backgroundColor: '#B4EEB4'
  }
}));

export default function () {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color = 'transparent' elevation = {0}>
        <Grid container spacing = {0}>
          <Grid item xs = {7} align = 'left'>
            <Avatar className = {classes.avatar} src = {icon}/>
          </Grid>
          <Grid item xs = {5} align = 'right'>
            <Tabs value={value} onChange={handleChange} classes={{ indicator: classes.indicator }}>
              <Tab label="Home"/>
              <Tab label="Resume" href="http://resume.joeco.me/" target="_blank"/>
            </Tabs>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

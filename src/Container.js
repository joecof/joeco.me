import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Projects from './Projects'
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
  root: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',

    minHeight: 'calc(90vh - 70px)',

    [theme.breakpoints.down(960)]: {
      width: '75%',
    },
  },
  space: {
    height: 50
  }
});

class Container extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className = {classes.root}>
        <Navbar/>
        <Header/>
        <Projects/>   
        <div className={classes.space}></div>
      </div>
    )
  }
}

export default withStyles(useStyles)(Container);

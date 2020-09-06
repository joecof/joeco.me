import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 210,
    minHeight: 220,
    maxHeight: 220,
    cursor: 'pointer',
  },
  image: {
    width: 70,
    height: 70
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (bool) => {
    setValue(bool);
  }

  return (
    <Card className={classes.root} variant={value ? "elevation" : "outlined"} elevation = {value ? 5 : 0} onMouseEnter={() => {handleChange(true)}} onMouseLeave={()=>{handleChange(false)}}>
      <CardContent>
        <img src = {props.icon} className = {classes.image} alt = 'application-icon'/>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
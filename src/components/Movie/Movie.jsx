import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Grow, Rating, Tooltip, Typography } from '@mui/material';
import useStyles from './styles';

const Movie = ({ movie, index }) => {
  const classes = useStyles();
  console.log(movie, index);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Typography className={classes.title} variant="h5">
        {movie.title}
      </Typography>
    </Grid>
  );
};

export default Movie;

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Grow, Rating, Tooltip, Typography } from '@mui/material';
import useStyles from './styles';

const Movie = ({ movie, index }) => {
  const classes = useStyles();
  console.log(movie, index);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={index} timeout={(index + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className={classes.image}
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'}
          />
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
        </Link>
      </Grow>

    </Grid>
  );
};

export default Movie;
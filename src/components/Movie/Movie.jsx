import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Grow, Rating, Tooltip, Typography } from '@mui/material';
import useStyles from './styles';

const Movie = ({ movie, index }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={index} timeout={(index + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className={classes.image}
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'}
          />
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average / 2} / 5`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>

    </Grid>
  );
};

export default Movie;

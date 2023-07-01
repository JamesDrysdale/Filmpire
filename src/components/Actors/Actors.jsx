import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Button, ButtonGroup, CircularProgress, Grid, Typography } from '@mui/material';
import { ArrowBack, Movie as MovieIcon, Favorite, FavoriteBorderOutlined, Language, Theaters } from '@mui/icons-material';

import { useGetMoviesByActorIdQuery, useGetActorQuery } from '../../services/TMDB';
import useStyles from './styles';
import { MovieList } from '..';

const Actors = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const { data, isFetching, error } = useGetActorQuery(id);
  const { data: moviesByActor } = useGetMoviesByActorIdQuery({ id, page });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary">
          Go back
        </Button>
      </Box>
    );
  }

  console.log('here', data);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data.name}
          />
        </Grid>
        <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            {data?.biography || 'Sorry, no biography yet...'}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <ButtonGroup size="medium" varient="outlined">
              <Button target="_blank" rel="noopener noreferrer" href={data?.homepage} endIcon={<Language />}>Actor Website</Button>
              <Button target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/name/${data?.imdb_id}`} endIcon={<MovieIcon />}>IMDB</Button>
              <Button startIcon={<ArrowBack />} sx={{ borderColor: 'primary.main' }}>
                <Typography style={{ textDecoration: 'none' }} component={Link} to="/" color="inherit" variant="subtitle2">
                  Back
                </Typography>
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">Movies</Typography>
        {moviesByActor && <MovieList movies={moviesByActor} numberOfMovies={12} />}
      </Box>
    </>
  );
};

export default Actors;

// Responsible for making all the calls to the TMDB API
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// /movie/popular?api_key=d771f48c63dd1bc7d0ac211fe567fb72&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    //  Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    //  Get Movies by [Type]
    getMovies: builder.query({
      query: ({ categoryIdOrGenreName, page }) => {
        //  Get Movies By Category (E.G. Popular / Top Rated / Upcoming)
        if (categoryIdOrGenreName && typeof categoryIdOrGenreName === 'string') {
          console.log('Inside categories', categoryIdOrGenreName);
          return `movie/${categoryIdOrGenreName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        console.log(categoryIdOrGenreName); // undefined

        //  Get Movies By Genre (E.G. Action, Adventure, Animation)
        if (categoryIdOrGenreName && typeof categoryIdOrGenreName === 'number') {
          console.log('Inside genres', categoryIdOrGenreName);
          return `discover/movie?with_genres=${categoryIdOrGenreName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        //  Get popular Movies - Acts as the default when site first loads, before any selection is made
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
} = tmdbApi;

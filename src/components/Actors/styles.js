import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  image: {
    maxWidth: '80%',
    borderRadius: '20px',
    objectFit: 'cover',
    boxShadow: '0.5em 0.5em 1em',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      margin: '0 auto',
      marginBottom: '30px',
      width: '50%',
    },
  },
}));

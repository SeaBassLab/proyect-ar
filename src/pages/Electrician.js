import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Electrician = () => {
  const classes = useStyles();

  const handleClick = () => {
    console.log('funciona')
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Electricidad
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Los electricistas instalan y mantienen servicios eléctricos, tales como la iluminación,
            la electricidad y la calefacción. Trabajan en una amplia gama de edificios, incluyendo casas,
            oficinas, fábricas, hospitales y centrales eléctricas.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button onClick={handleClick} variant="contained" color="primary">
                    Contratar
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="/">
                    Volver
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Electrician;
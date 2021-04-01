import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SimplePopover from '../components/SimplePopover';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Garden = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Jardinería
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Los auxiliares de jardinería venden plantas, flores, herramientas y equipo de jardinería.
                Se ocupan de las plantas, preparan arreglos florales atractivos, controlan las existencias,
                se encargan de los jardines y aconsejan a los clientes.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <SimplePopover />
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

export default Garden;
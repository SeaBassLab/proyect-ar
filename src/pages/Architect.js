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

const Architect = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Arquitectura
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Los Arquitectos diseñan edificios y permanecen involucrados en el proceso
                de construcción hasta que el edificio esté acabado por completo. El proyecto
                puede incluir desde cambios en el edificio existente o la creación de un grupo
                entero de edificios nuevos.
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

export default Architect;
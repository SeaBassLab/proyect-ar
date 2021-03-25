import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Twitter, Facebook, Instagram } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: 50,
      margin: 20,
    },
  }));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Sobre Nosotros
          </Typography>
        <Divider />
          <Typography variant="subtitle1" color="inherit" paragraph>
            Somos una empresa que conecta profesionales
            de las distintas areas que comprenden al hogar y/o
            al local comercial para satisfacer las necesidades
            de nuestros clientes.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom align="center">
            Nuestras redes sociales
          </Typography>
            <Typography align="center">
              <a href="/" target="_blank" rel="noreferrer">
                <Instagram /> 
              </a>
              <a href="/">
                <Facebook />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AboutUs;
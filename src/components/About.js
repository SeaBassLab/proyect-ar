import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Twitter, Facebook, Instagram, WhatsApp, } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    aboutUs: {
      
    },
  }));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <Grid container>
        <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
                Sobre Nosotros
            </Typography>
            <Divider />
            <Typography variant="subtitle1" color="inherit" paragraph>
                Somos una empresa que conecta profecionales
                de las ditintas areas que comprenden al hogar y/o
                al local comercial para satisfacer las necesidades
                de nuestros clientes.
            </Typography>
            <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
            </Typography>
            <Grid container direction="column">
              <WhatsApp />
              <Typography variant="subtitle1">
                +54 9 2901 52-7743
              </Typography>
                Instagram
              <a href="/" target="_blank" rel="noreferrer">
                <Instagram /> 
              </a>
                Facebook
              <a href="/">
                <Facebook />
              </a>
                Twitter
              <a href="/" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
              </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default AboutUs;
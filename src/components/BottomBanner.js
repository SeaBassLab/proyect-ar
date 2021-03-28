import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OfficeImage from '../images/OfficeImage.jpg'
import { WhatsApp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    textShadow: '2px 2px black',
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const BottomBanner = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${OfficeImage})` }}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Contacta con nosotros estamos para ayudarte
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              <WhatsApp />{' '}+54 351-772-7577/0306
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Consultas - Presupuestos - Disponibilidad
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              De lunes a viernes de 9hs a 21hs
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Sabados y Domingos de 9hs a 13hs
            </Typography>
            <Typography variant="subtitle1" color="inherit" paragraph>
              <em>Urgencias y trabajos fuera de los horarios se cobran extra</em>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default BottomBanner;
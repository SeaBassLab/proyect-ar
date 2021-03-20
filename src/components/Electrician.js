import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import ElectricBoard from '../images/ElectricBoard.jpg';
import BrickworkImage from '../images/Brickwork.jpg';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    height: 200,
    marginBottom: 20,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
  },
});

const Electrician = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  Electricidad
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Electricistas Matriculados
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Trabajamos con precisión y proligidad en cada
                  detalle de tu hogar, negocio o empreza.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Seguir leyendo...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia className={classes.cardMedia} image={ElectricBoard} title="Electric board" />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  Albañileria
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Nos adaptamos a tu necesidad
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Trabajamos por hora por día u Obra finalizada.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Seguir leyendo...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia className={classes.cardMedia} image={BrickworkImage} title="Brickwork Image" />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
}

export default Electrician;
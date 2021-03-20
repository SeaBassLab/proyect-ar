import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import GasImage from '../images/GasImage.jpg';
import PlumbingImage from '../images/PlumbingImage.jpg';

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

const PlumbingGasOperator = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  Gasista
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Gasistas Matriculados
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  La tranquilidad de vivir en una casa sin perdidas
                  de gas no tiene comparación.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Seguir leyendo...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia className={classes.cardMedia} image={GasImage} title="Gas Image" />
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
                  Plomería
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Reparaciones e instalaciones
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  No te compliques la vida buscando la fuga, para eso
                  estamos nosotros que entendemos de tuberias.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Seguir leyendo...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia className={classes.cardMedia} image={PlumbingImage} title="Plumbing Image" />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
}

export default PlumbingGasOperator;
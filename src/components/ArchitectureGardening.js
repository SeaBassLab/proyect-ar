import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import ArchitectureImage from '../images/ArchitectureImage.jpg';
import GardenImage from '../images/GardenImage.jpg';

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

const ArchitectureGardening = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  Arquitectura
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Planos - Dirección de obra
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Lleva tu idea a la realidad con la ayuda de nustros
                  especialistas en construcción.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Seguir leyendo...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia className={classes.cardMedia} image={ArchitectureImage} title="Gas Image" />
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
                  Jardinería
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Poda - Decoracón - Huerta
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Un jardin bello refleja alegria en el corazón de
                  quien lo contempla.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Seguir leyendo...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia className={classes.cardMedia} image={GardenImage} title="Plumbing Image" />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
}

export default ArchitectureGardening;
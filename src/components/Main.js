import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  grow: {
    height: 50,
  },
}));

const Main = (props) => {
  const classes = useStyles();
  const { title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <div className={classes.grow} />
        <Typography paragraph>
          Por el momento contamos con cuatro provincias en donde podemos ofrecer nuestros servicios.
        </Typography>
        <Typography variant="subtitle1">
            <ul>
                <li>Buenos Aires</li>
                <li>Cordoba</li>
                <li>Rio Gallegos</li>
                <li>Ushuaia</li>
            </ul>
        </Typography>
        <Typography paragraph>
          Si estas interesada/o en ser parte de nuestros profesionales no dudes en ponerte en contacto
          con nosotros.
        </Typography>
        <Typography variant="subtitle1">
            <ul>
                <li>Email: team@proyect-ar.com.ar</li>
                <li>Telefono: +54 351-772-7577 / 0306</li>
            </ul>
        </Typography>
    </Grid>
  );
}

Main.propTypes = {
  title: PropTypes.string,
};

export default Main;
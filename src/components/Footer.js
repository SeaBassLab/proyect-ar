import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        JPSP.com.ar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          ¡Mantente informado!
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
        <TextField
          className={classes.inputField}
          size="small"
          helperText="Dejanos tu email para recibir notificaciones"
        />
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
        <Button
          variant="contained"
          color="primary"
        >
          ¡Suscríbete!
        </Button>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

export default Footer;
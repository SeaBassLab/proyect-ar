import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../images/Proyect-Ar-sinFondo.png';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    width: 150,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
          <Link
          href="/"
          color="inherit"
          underline="none"
          >
          <img src={Logo} alt="logo image" className={classes.toolbarSecondary} />
          </Link>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Header;
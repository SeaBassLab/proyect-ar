import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { Link }from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  links:{
    textDecoration: 'none',
    color: 'blue',
  }
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Links
      </Typography>
      <List>
        {archives.map((archive) => (
          <ListItem key={archive.title}>
            <Link to={archive.url} className={classes.links}>{archive.title}</Link>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      <List>
        {social.map((network) => (
            <ListItem key={network.name}>
              <ListItemIcon>
                <network.icon />
              </ListItemIcon>
              <ListItemText><Link to={network.url} className={classes.links}>{network.name}</Link></ListItemText>
            </ListItem>
        ))}
      </List>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};

export default Sidebar;
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SimplePopover from '../components/SimplePopover';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  links:{
    textDecoration: 'none',
    color: 'blue',
  }
});

const FeaturedPost = (props) => {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.subtitle}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>  
              <Typography variant="subtitle1" color="primary" align="right">
                <Link to={post.url} className={classes.links}>Saber Mas...</Link>
              </Typography>
              <SimplePopover />
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};

export default FeaturedPost;
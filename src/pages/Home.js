import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainHeader from '../components/MainHeader';
import FeaturedPost from '../components/FeaturedPost';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import BottomBanner from '../components/BottomBanner'
import MainImage from '../images/MainImage.jpg';
import ArchitectureImage from '../images/ArchitectureImage.jpg';
import GardenImage from '../images/GardenImage.jpg';
import ElectricBoard from '../images/ElectricBoard.jpg';
import BrickworkImage from '../images/Brickwork.jpg';
import GasImage from '../images/GasImage.jpg';
import PlumbingImage from '../images/PlumbingImage.jpg';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainHeader = {
  title: 'Conecta con la red de profesionales mas grande de Argentina',
  description:
    "Todo lo que necesitas en un solo lugar",
  image: `${MainImage}`,
  imgText: 'Main image',
};

const featuredPosts = [
  {
    title: 'Arquitectura',
    subtitle: 'Planos - Dirección de obra',
    description:
      'Lleva tu idea a la realidad con la ayuda de nuestros especialistas en construcción.',
    image: `${ArchitectureImage}`,
    imageText: 'Architecture Image',
    url: '/arquitectura',
  },
  {
    title: 'Jardinería',
    subtitle: 'Poda - Decoracón - Huerta',
    description:
      'Un jardin bello refleja alegria en el corazón de quien lo contempla.',
    image: `${GardenImage}`,
    imageText: 'Garden Image',
    url: '/jardineria',
  },
  {
    title: 'Electricidad',
    subtitle: 'Electricistas Matriculados',
    description:
      'Trabajamos con precisión y prolijidad en cada detalle de tu hogar, negocio o empresa.',
    image: `${ElectricBoard}`,
    imageText: 'Electric Board',
    url: '/electricidad',
  },
  {
    title: 'Albañileria',
    subtitle: 'Nos adaptamos a tu necesidad',
    description:
      'Trabajamos por hora por día u Obra finalizada.',
    image: `${BrickworkImage}`,
    imageText: 'Brickwork Image',
    url: '/albañileria',
  },
  {
    title: 'Gasista',
    subtitle: 'Gasistas Matriculados',
    description:
      'La tranquilidad de vivir en una casa sin perdidas de gas no tiene comparación.',
    image: `${GasImage}`,
    imageText: 'Gas Image',
    url: '/gasista',
  },
  {
    title: 'Plomería',
    subtitle: 'Reparaciones e instalaciones',
    description:
      'No te compliques la vida buscando la fuga, para eso estamos nosotros que entendemos de tuberias.',
    image: `${PlumbingImage}`,
    imageText: 'Plumbing Image',
    url: '/plomeria',
  },
];

const sidebar = {
  title: 'Sobre nosotros',
  description:
    'Somos una empresa que conecta a profesionales, de las distintas areas que comprenden al hogar y/o local comercial, con clientes. Con el fin de resolver las distintas necesidades de cada una de las partes de manera eficiente y segura.',
  archives: [
    { title: 'Arquitectura', url: '/arquitectura' },
    { title: 'Jardinería', url: '/jardineria' },
    { title: 'Electricidad', url: '/electricidad' },
    { title: 'Albañileria', url: '/albañileria' },
    { title: 'Gasista', url: '/gasista' },
    { title: 'Plomería', url: '/plomeria' },
  ],
  social: [
    { name: 'Instagram', icon: InstagramIcon, url: '#' },
    { name: 'Twitter', icon: TwitterIcon, url: '#' },
    { name: 'Facebook', icon: FacebookIcon, url: '#' },
  ],
};

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainHeader post={mainHeader} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Proyect-Ar Conexiones" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
        <BottomBanner />
      </Container>
    </React.Fragment>
  );
};

export default Home;
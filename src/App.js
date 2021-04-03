import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import MediaCard from './components/MediaCard/mediacard';
import AllCards from './components/Cards/allCard';
import LowerFooter from './components/LowerFooter/lowerfoot';
import LoginForm from './Common/Login/login';
import NeedHelp from './components/needHelp/needHelp';
import Footer from './components/Footer/footer';
import { Grid, Typography, Snackbar, Divider } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import Category from './Client/Components/Categories/SingleCategory';
import PrimarySearchAppBar from './components/Toolbar/toolbar';
import SingleCategory from './Client/Components/Categories/SingleCategory';
import CategoryCard from './Client/Components/Categories/categoryCard';
import LoungeBankenImage from './images/sofa.jpg';
import OurPolicies from './components/Policies/OurPolicies';
import Testimonials from './components/UserExperience/userexperience';
import FooterAll from './components/Footer/FooterAll';
import NewsLetter from './components/NewsLetter/NewsLetter';
import HomePage from './Client/Screens/HomePage';
import LandingNew from './components/landingNew/landingNew';
function Alert(props) {
  return <MuiAlert elevation={12} variant="filled" {...props} />;
}

function App() {
  return (

      <HomePage />
  );
}

export default App;

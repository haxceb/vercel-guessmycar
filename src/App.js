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
import Landing from './components/landing/landing';
import OurPolicies from './components/Policies/OurPolicies';
import Testimonials from './components/UserExperience/userexperience';
import FooterAll from './components/Footer/FooterAll';
import NewsLetter from './components/NewsLetter/NewsLetter';
import HomePage from './Client/Screens/HomePage';

function Alert(props) {
  return <MuiAlert elevation={12} variant="filled" {...props} />;
}
import Landing from './components/landingNew/landingNew';
import NeedHelp from './components/needHelp/needHelp';
import Reviews from './components/reviews/reviews'
import { Component } from 'react';
import reviewimg from './media/reviewImg.jpeg';
import reviewimg2 from './media/reviewImg2.jpeg';
import mainimg from './media/mainImg.jpeg';

const reviewMap = [0, 1, 2, 3];

class App extends Component {
  state = {
    data:[
      {title:'Craftsmanship', description: 'some description here', name:'name of reviewer', image:{reviewimg}},
      {title:'Design Advice', description: 'some description here', name:'name of reviewer', image:{reviewimg2}},
      {title:'Customer Service', description: 'some description here', name:'name of reviewer', image:{reviewimg}},
      {title:'Delivery', description: 'some description here', name:'name of reviewer', image:{mainimg}}
    ]
  }
  render(){
  return (
    <div className="App">
      {/* <NavBar />
      <LoginForm/>
      <LowerFooter />
      <div></div> */}
      {/* <div>
        <Snackbar open={true}>
          <Alert severity="error">
            COVID-19: WIJ ONLINE ALLE BESTELLINGEN WORDEN GRATIS AAN HUIS GELEVERD.
        </Alert>
        </Snackbar>
      </div> */}

      <PrimarySearchAppBar />

      <Grid container>
        <Grid xs={12} style={{ height: '70vh' }}>
          <CategoryCard title="GRATIS HOCKER" bgImage={LoungeBankenImage} />
        </Grid>
      </Grid>
      <Category />

      <AllCards />
      {/* <OurPolicies /> */}
      <Grid container className="mt-4">
        <Grid item xs={12}>
          <Typography variant="h4">
            What People Say
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Testimonials />
        </Grid>
      </Grid>
      <NewsLetter />
      <FooterAll />
      <NavBar/>
      <Landing title="GRATIS HOCKER"/>
      <NeedHelp NeedHelp="HULP NODIG?"/>
      <div className="container"><div className="row">
      {reviewMap.map(i => {
              return <Reviews title={this.state.data[i].title} description={this.state.data[i].description} name={this.state.data[i].name} picture={this.state.data[i].image}/>
            })}
      </div>
      </div>
      
     
    </div>
  );
}

}

export default App;

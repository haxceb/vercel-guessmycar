import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
<<<<<<< HEAD
import MediaCard from './components/MediaCard/mediacard';
import AllCards from './components/Cards/allCard';
import LowerFooter from './components/LowerFooter/lowerfoot';
import LoginForm from './Common/Login/login';
=======
import Landing from './components/landing/landing';
import NeedHelp from './components/needHelp/needHelp';
>>>>>>> 8b163a2e0af5e40c4d117c8c39ea39d65afa38b9

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginForm/>
      <AllCards />
      <LowerFooter />
      <div></div>
      <NavBar/>
      <Landing title="GRATIS HOCKER"/>
      <NeedHelp NeedHelp="HULP NODIG?"/>
    </div>
  );
}

export default App;

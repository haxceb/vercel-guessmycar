import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import MediaCard from './components/MediaCard/mediacard';
import AllCards from './components/Cards/allCard';
import LowerFooter from './components/LowerFooter/lowerfoot';
import LoginForm from './Common/Login/login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginForm/>
      <AllCards />
      <LowerFooter />
      <div></div>
    </div>
  );
}

export default App;

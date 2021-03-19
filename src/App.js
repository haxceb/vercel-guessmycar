import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Landing from './components/landing/landing';
import NeedHelp from './components/needHelp/needHelp';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing title="GRATIS HOCKER"/>
      <NeedHelp NeedHelp="HULP NODIG?"/>
    </div>
  );
}

export default App;

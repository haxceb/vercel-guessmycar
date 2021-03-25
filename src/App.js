import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
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

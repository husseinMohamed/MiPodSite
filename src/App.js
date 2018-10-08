import React, { Component } from 'react';
import './Assets/css/style.css';
import Header from './components/Header';
import Body from './components/Body';
import bg from './bg11.png';
import topPiece from './newtop.png';
import earBuds from './headphones.png';
import midSec from './midSecNew.png';
import battery from './battery.PNG';
import wallpaper from './wallpaper.png'
import miPodsSilver from './mipodsSilver.png';
import pinkpods from './pinkpods1.png';
import chrg from './chrgblack.png';
import gray from './gray.PNG';




class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Body bg = {bg} 
            topPiece={topPiece} earBuds={earBuds} 
            midSec={midSec} battery={battery}
            wallpaper={wallpaper}
            miPodsSilver={miPodsSilver}
            pinkpods= {pinkpods} chrg={chrg} gray={gray}/>

      </div>
    );
  }
}

export default App;

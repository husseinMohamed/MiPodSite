import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import OptionSection from './Options';
import pinkback from '../pinkback.png';
import silverback from '../silverback.png';
import whiteback from '../whiteback.png';
import blackback from '../blackback.png';
import Form from './form';
import sr from '../scrollReveal'



class Body extends Component {
  
 componentDidMount = () =>{
   sr.reveal('.podCase', {
      duration: 1500, 
      origin: 'top',
      distance: '200px'
    });
  
    sr.reveal('.mailBtn', {
        duration: 1000, 
        origin: 'top',
        
      });

      sr.reveal('.descTitleTop', {
        duration: 1000, 
        origin: 'top',
        
      });

      sr.reveal('.banner', {
        duration: 1000, 
        origin: 'top',
        viewFactor: 0.2
      });
      
      sr.reveal('.rowPicOne', {
        duration: 1000, 
        delay: 400,
        origin: 'bottom',
        distance: '250px',
        viewFactor: 0.6
      });

      sr.reveal('.rowPicTwo', {
        duration: 1000,
        delay: 300, 
        origin: 'bottom',
        distance: '100px',
        viewFactor: 0.5
      });

      sr.reveal('.rowPicThree', {
        duration: 1000, 
        delay:200,
        origin: 'top',
        distance: '100px',
        viewFactor: 0.2
      });

      sr.reveal('.rowPicFour', {
        delay: 100,
        duration: 1000, 
        origin: 'top',
        distance: '200px',
        viewFactor: 0.1
      });

      sr.reveal('.parallaxtext', {
        duration: 1000, 
        origin: 'top',
        viewFactor: 0.2
      });

      sr.reveal('.box', {
        duration: 1000, 
        origin: 'left',
        distance: '50px',
        viewFactor: 0.2
      });

      sr.reveal('.boxImg', {
        duration: 1000, 
        origin: 'top',
        distance: '150px',
        viewFactor: 0.4
      });
 }


    render() { 
        return ( 
              
                <div className="backgroundCol">
                 <div className="container">
                  <div className="row text-center">
                   <div className="col-md-4"></div>
                  <div className="col-md-4">
                   <p>COMING SOON TO A POCKET NEAR YOU</p>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>

              <div className="container">
               <div className="row text-center">
                <div className="col-md-3"></div>
                 <div className="col-md-6">
                  <h2 className="descTitleTop">Tiny package, big features.</h2>
                </div>
                <div className="col-md-3"></div>
              </div>
              </div>
    
              <div className="container">
                <div className="row text-center">
                 <div className="col-md-4"></div>
                  <div className="col-md-4">
                   <a href="#form"><button className="btn mailBtn">Enter Mailing List</button></a>
                  </div>
                <div className="col-md-4"></div>
                </div>
              </div>

              <div className="container">
                <div className="row text-center rowBottom">
                  <div className="col-md-12">
                    <img className="d-block  podCase" src={this.props.bg} alt="MiPod Case" />
                  </div>
                </div>
              </div>
           
              <div className="container-fluid midSec">
                <div className="banner text-center">
                 <h1>TRUE WIRELESS BINAURAL </h1>
                  <h3>Finally untangled.</h3>
                </div>

              <div className="container">
                <div className="row text-center rowPicOne">
                 <div className="col-md-4"><p className="desc">Magnetic Cover Cap </p></div>
                   <div className="col-md-4">
                     <img src={this.props.topPiece} alt="magnetic cover"/>
                  </div>
                 <div className="col-md-4"></div>
                </div>
              </div>
             
              <div className="container">
                <div className="row flex-row-reverse text-center rowPicTwo">
                 <div className="col-md-4"> <p className="desc"> MiPod Bluetooth Headset</p></div>
                  <div className="col-md-4">
                   <img src={this.props.earBuds} alt="bluetooth headset"/>
                </div>
                 <div className="col-md-4">
                </div>
               </div>
              </div>

              <div className="container">
                <div className="row text-center rowPicThree">
                 <div className="col-md-4"> <p className="desc">Storage Unit  </p></div>
                  <div className="col-md-4">
                   <img src={this.props.midSec}  alt="storage unit"/>
                  </div>
                 <div className="col-md-4"></div>
                </div>
              </div>

              <div className="container">
                <div className="row flex-row-reverse text-center rowPicFour">
                  <div className="col-md-4"> <p className="desc" id="descBattery">   Charge Port / 1600 MAH Battery</p></div>
                   <div className="col-md-4">
                    <img src={this.props.battery}  alt="charge port/battery"/>
                   </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
            </div>
              
        <div> 
          <Parallax
            blur={1}
            bgImage={require('../gray.PNG')}
            bgImageAlt="gray backgrond"
            strength={100} >

            <div className="container text-center">
             <h1 className="parallaxtext">Wireless. Effortless. Magical.</h1>
            </div>
            <div style={{ height: '100px' }} />
         </Parallax>
        </div>
              
        <div className="space" /> 

        <div className="container featuresSec">
         <div className="row rowPink text-center">
          <div className="col-md-5 text-center box boxtxt">
            <h2>Comfortable</h2>
              <p>Ergonomically Designed</p>
              <p>Super lightweight</p>
              <p>Comfotable in ears</p>
              <p>Built to last</p>
          </div>
          <div className="col-md-7">
           <img className="img-fluid w-100 boxImg" src={this.props.pinkpods} alt="pink pod pic"/>
          </div>
        </div>

        <div className="spaceOne"></div>     

        <div className="row  rowSilver text-center">
         <div className="col-md-5 text-center box boxtxt2 ">
          <h2>Intuitive</h2>
           <p>After a simple one-tap setup, MiPods are automatically on and always connected. Using them is just as easy. They can sense when they’re in your ears and pause when you take them out. </p>
         </div>
          <div className="pad"></div>
           <div className="col-md-7">
            <img className="img-fluid w-100 boxImg" src={this.props.miPodsSilver} alt="silver pod pic"/>
           </div>
        </div>

        <div className="spaceOne"></div> 

        <div className="row text-center">
          <div className="col-md-5 text-center box boxtxt3">
           <h2>Convenient</h2>
            <p>Directly charge your phone with the 1600 MAH powerbank battery. Includes an Android and Iphone Adapter</p>
          </div>
          <div className="col-md-7">
           <img className="img-fluid w-100 boxImg" src={this.props.chrg} alt="black pod pic"/>
          </div>
        </div>
        </div>

        <div className="space" />     
         <hr />

        <div id="options"></div>
        <OptionSection pinkback={pinkback} silverback={silverback} whiteback={whiteback} blackback={blackback}/>      
         <br />  
         <br />   
         <br />     
         <br />  
         <br />  
         <br />  
         <br />      
        <hr /> 
              
         <Form />
        </div>
         );
    }
}
 
export default Body;
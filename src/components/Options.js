import React, { Component } from 'react'
import sr from '../scrollReveal'

class OptionSection extends Component {
 
    componentDidMount = () =>{
        sr.reveal('.bannerThree', {
           duration: 1000, 
           origin: 'top',
           viewFactor: 0.2

         });

         sr.reveal('.cardImg1', {
            duration: 1300, 
            delay:100,
            origin: 'right',
            distance: '250px',
            viewFactor: 0.2
          });

          sr.reveal('.cardImg2', {
            duration: 1000, 
            delay:100,
            origin: 'right',
            distance: '100px',
            viewFactor: 0.2
          });

          sr.reveal('.cardImg3', {
            duration: 1000, 
            delay:100,
            origin: 'left',
            distance: '100px',
            viewFactor: 0.2
          });

          sr.reveal('.cardImg4', {
            duration: 1300, 
            delay:100,
            origin: 'left',
            distance: '250px',
            viewFactor: 0.2
          });
        }



    render() { 
        return ( 
                <div className="container-fluid llastSec">
                <div className="bannerThree text-center">
                <h1>VARIETY OF FINISHES</h1>
                </div>
                <div className="container">
                 <div className="row text-center">
                
                    <div className="col-md-3 col-sm-6">
                        <img className ="img-fluid card-img cardImg1" src={this.props.silverback} alt="silver pod" />
                        <div className="card-img-overlay ovl">
                        <h2 className="card-title cardOne">Silver</h2>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                       <img className ="img-fluid card-img cardImg2" src={this.props.pinkback} alt="pink pod"/>
                       <div className="card-img-overlay ovl">
                        <h2 className="card-title cardTwo">Pink</h2>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img className ="img-fluid card-img cardImg3" src={this.props.blackback} alt="black pod"/>
                        <div className="card-img-overlay ovl">
                        <h2 className="card-title cardThree">Black</h2>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img className ="img-fluid card-img cardImg4" src={this.props.whiteback} alt="white pod" />
                        <div className="card-img-overlay ovl">
                        <h2 className="card-title">White</h2>
                        </div>
                    </div>
                   
                </div>
              </div>
            
               

              </div>

        );
    }
}
 
export default OptionSection;
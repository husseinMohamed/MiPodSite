import React, { Component } from 'react'
import sr from '../scrollReveal'

class Form extends Component {

    componentDidMount = () =>{
        sr.reveal('.droptxt', {
           duration: 1000, 
           origin: 'top',
           viewFactor: 0.2
         });

         sr.reveal('.form-group', {
            duration: 1300, 
            delay:50,
            origin: 'top',
            
            viewFactor: 0.2
          });

          sr.reveal('.formSubmitBtn', {
            duration: 1300, 
            delay:100,
            origin: 'top',
            distance: '200px',
            viewFactor: 0.2
          });


        }

  

    render() { 
        return ( 
            <div>
            <div className="container" id="form">
             <div className="space"></div>
              <div className="row text-center">
               <div className="col-md-3"></div>
               <div className="col-md-6">
               <h3 className="droptxt">Be the first to know when it drops.</h3>
               <br />   
               <br />     
     
       
               <form>
                <div className="form-group">
                 <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                   <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
  
                <div className="form-check">
                 <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">I am not a robot</label>
                </div>
                 <button type="submit" className="btn formSubmitBtn">Submit</button>
              </form>
              </div>
               <div className="col-md-3"></div>
              </div>
              <br />   
              <br />     
              <br />  
              <br />  
              <br /> 
        
             
         </div>
            <div className="footerbanner">
              <p className="signature">by hussein mohamed</p>
            </div>

        </div>


         );
    }
}
 
export default Form;
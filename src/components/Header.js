import React, { Component } from 'react'
import sr from '../scrollReveal'

class Header extends Component {

  componentDidMount = () =>{
    sr.reveal('.navbar-brand', {
       duration: 2000, 
       origin: 'top'
     });
    }

    render() { 
        return ( 
          <nav className="navbar navbar-expand-lg navbar-light bg-light pull-right">
            <div className ="container">
              <div className="navbar-brand">MiPod</div>
            <ul className="navbar-nav">
              <li className="nav-item active">
               <a className="nav-link" href="#options">View Options<span className="sr-only">(current)</span></a>
             </li>
           </ul>
          </div>
         </nav>
         );
    }
}
 
export default Header;
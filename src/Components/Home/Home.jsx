import React, {useContext} from "react"
import M from "materialize-css"
import "./home.css";
import Store from '../../store/store';
import { Link, Redirect } from "react-router-dom";
import Header from "../util/Header"
const Home = () => {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    });
    const {state} = useContext(Store);
    if(!state.isAuth){
        return (<Redirect to='/login' />)
    }

    return (
        <div className="homeBox">
            {/* <nav className="black">
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo"><div><img src={logo}/></div></a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><Link to="/login">login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><Link to="/login">login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                
            </ul> */}
         
            <Header/>
            {/* <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <h1 className="white-text center-align">SwayamKriti</h1>
                    </div>
                </div> */}
            {/* </div>  */}
            <div class="conatiner">
                <div class="wrap">

                    <div class="box one">
                        
                        <h1>MENTOR</h1>
                        <Link to="/mentor"><div class="poster p1">
                            <h4>
  <i class="material-icons">school</i></h4>
                        </div></Link>
                    </div>

                    <div class="box two">
                        
                        <h1>BUY-SELL</h1>
                        <Link to="/sell" style={{textDecoration:"none"}}><div class="poster p2">
                            <h4>&#x20B9;</h4>
                        </div></Link>
                    </div>

                    <div class="box three">
                        
                        <h1>NOTIFICATION</h1>
                        <Link to="/notification"><div class="poster p3">
                            <h4>
  <i class="material-icons">message</i></h4>
                        </div></Link>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Home;
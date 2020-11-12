import React from "react"
import M from "materialize-css"
import "./home.css"
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
const Home = () => {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    });

    return (
        <>
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
            {/* <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#"><img src={logo}/><h5 className="heading">SwayamKriti</h5></a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
  className="black"
>
  <NavItem href="/login">
    Login
  </NavItem>
  <NavItem href="/signup">
    SignUp
  </NavItem>
</Navbar> */}
            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <h1 className="white-text center-align">SwayamKriti</h1>
                    </div>
                </div>
            </div>
            <div class="conatiner">
                <div class="wrap">

                    <div class="box one">
                        <div class="know_more">
                            <Link to=""><h4>Know more</h4></Link>
                        </div>
                        <h1>MENTOR</h1>
                        <div class="poster p1">
                            <h4>
  <i class="material-icons">school</i></h4>
                        </div>
                    </div>

                    <div class="box two">
                        <div class="know_more">
                           <Link to=""><h4>Know more</h4></Link>
                        </div>
                        <h1>BUY-SELL</h1>
                        <div class="poster p2">
                            <h4>&#x20B9;</h4>
                        </div>
                    </div>

                    <div class="box three">
                        <div class="know_more">
                           <Link to=""><h4>Know more</h4></Link>
                        </div>
                        <h1>NOTIFICATION</h1>
                        <div class="poster p3">
                            <h4>
  <i class="material-icons">message</i></h4>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Home;
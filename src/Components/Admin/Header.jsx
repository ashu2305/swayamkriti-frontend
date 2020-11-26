import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import "./header.css"
import logo from "../../assets/logo.png";
import {Navbar,Icon,NavItem} from "react-materialize";
import Store from '../../store/store';


const Header = () =>{
return(
  <Navbar
  alignLinks="right"
  brand={<a className="brand-logo s-logo" ><img src={logo} height="40" width="40"/><h3 className="heading"><Link className="no-link" to="/">SwayamKriti</Link></h3></a>}
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
        <>
            <NavItem className="white-text waves-effect waves-light purple darken-2 btn">
            Change Password
            </NavItem>
            <NavItem  className="white-text waves-effect waves-light  btn"><Link style={{color:"white",textDecoration:"none"}} to='/logout'>
              Logout</Link>
            </NavItem>
        </>
        
    
    
</Navbar>
)
}

export default Header;
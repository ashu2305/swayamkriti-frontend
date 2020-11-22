import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import "./header.css"
import logo from "../../assets/logo.png";
import {Navbar,Icon,NavItem} from "react-materialize";
import Store from '../../store/store';


const Header = () =>{
  const{state} = useContext(Store);
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
    {state.isAuth?
        <>
            <NavItem className="white-text waves-effect waves-light purple darken-2 btn"><Link to='/profile'>
            Profile</Link>
            </NavItem>
            <NavItem  className="white-text waves-effect waves-light  btn"><Link to='/logout'>
              Logout</Link>
            </NavItem>
        </>
        :
        <>
            <NavItem href="/login" className="white-text waves-effect waves-light  darken-2 btn">
              Login
            </NavItem>
            <NavItem href="/signup" className="white-text waves-effect waves-light  btn">
              SignUp
            </NavItem>
        </>
    }
    
</Navbar>
)
}

export default Header;
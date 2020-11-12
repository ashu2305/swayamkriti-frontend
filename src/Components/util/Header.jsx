import React from "react"
import "./header.css"
import logo from "../../assets/logo.png";
import {Navbar,Icon,NavItem} from "react-materialize"

const Header = () =>{

return(
<Navbar
alignLinks="right"
brand={<a className="brand-logo" href="#"><img src={logo} height="40" width="40"/><h5 className="heading">SwayamKriti</h5></a>}
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
<NavItem href="/login" className="white-text waves-effect waves-light btn">
  Login
</NavItem>
<NavItem href="/signup" className="white-text waves-effect waves-light btn">
  SignUp
</NavItem>
</Navbar>
)
}

export default Header;
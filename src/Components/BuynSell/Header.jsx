import React from "react"
import { Navbar, Icon, NavItem, Autocomplete, Select } from 'react-materialize'
import { Link } from 'react-router-dom'
import "./Header.css"
import { Modal, Button } from 'react-materialize'

import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={<a className="brand-logo s-logo" ><img src={logo} height="40" width="40" /><h3 className="heading black-text">SwayamKriti</h3></a>}
      id="mobile-nav"
      menuIcon={<Icon className="black-text">menu</Icon>}
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
      style={{backgroundColor:"#fffffe"}}
    >

      <>
        <NavItem className="waves-effect waves-light header-btn btn"><Link to='/logout'>
          Logout</Link>
        </NavItem>
      </>

    </Navbar>
  )
}

export default Header;
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
      brand={<a className="brand-logo s-logo" ><img src={logo} height="40" width="40" /><h3 className="heading">SwayamKriti</h3></a>}
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
      <Autocomplete
        icon={<Icon>search</Icon>}
        id="Autocomplete-1"
        options={{
          data: {
            'Gus Fring': null,
            'Saul Goodman': null,
            'Tuco Salamanca': 'https://placehold.it/250x250'
          }
        }}
        placeholder="Search"
        style={{ color: "white" }}

      />
      <div class="filter">
        <select>
          <option value="" disabled selected>Filter</option>
          <option value="year">Year</option>
          <option value="branch">Branch</option>
          <option value="skill">Skill</option>
          <option value="aoi">Area of interest</option>
        </select>
      </div>
      <>

        <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green">Close</Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Sell Here"
          id="Modal-0"
          open={false}
          options={{
            dismissible: true,
            endingTop: '10%',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
            startingTop: '4%'
          }}
          className="modal-box"
          trigger={<Button className="white-text waves-effect waves-light header-btn btn modal-trigger" node="button">Sell</Button>}
        >
          <div class="input-field">
            <input id="name" type="text" class="validate" />
            <label for="name">Name</label>
          </div>
          <div class="input-field">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Description</label>
          </div>

          <div class="input-field">
            <input id="price" type="text" class="validate" />
            <label for="price">Price</label>
          </div>
          <div class="file-field input-field">
            <div class="btn">
              <span>Image</span>
              <input type="file" />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>
        </Modal>

        <NavItem className="white-text waves-effect waves-light header-btn btn"><Link to='/logout'>
          Logout</Link>
        </NavItem>
      </>

    </Navbar>
  )
}

export default Header;
import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import "./header.css"
import logo from "../../assets/logo.png";
import {Navbar,Icon,NavItem,Modal,Button} from "react-materialize";
import Store from '../../store/store';


const Header = () =>{
return(<>
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
        <Modal
                    actions={[
                        <Button flat modal="close" node="button" waves="green">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Modal "
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
                    className="adminModal"
                    root={document.body}
                    trigger={<Button id="changePassword"className="white-text waves-effect waves-light purple darken-2 btn">
                    Change Password
                    </Button>}
                >
                    <div class="input-field">
                        <input id="theme" type="text" class="validate" />
                        <label for="theme">Heading</label>
                    </div>
                    <div class="input-field">
                        <input id="desc" type="text" class="validate" />
                        <label for="desc">Description</label>
                    </div>
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" />
                        </div>
                    </div>
                </Modal>

            <NavItem  className="white-text waves-effect waves-light  btn"><Link style={{color:"white",textDecoration:"none"}} to='/logout'>
              Logout</Link>
            </NavItem>
        </>
        
    
    
</Navbar>
</>
)
}

export default Header;
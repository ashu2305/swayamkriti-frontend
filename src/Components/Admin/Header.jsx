import React, {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import "./header.css"
import logo from "../../assets/logo.png";
import {Navbar,Icon,NavItem,Modal,Button} from "react-materialize";
import Store from '../../store/store';


const Header = () =>{
    const [data,setData] = useState({
        oldPassword:"",
        newpassword:"",
        confirmpassword:""
    })
    const [inputError,setInputError] = useState(false);
    useEffect(()=>{
        if(data.oldPassword==""||data.newpassword==""||data.confirmpassword=="")
        setInputError(true);
        else
        setInputError(false);
    })
    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
        console.log(data)
    }
    const submit = () => {

    }
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
                    actions={[<>{inputError&&<h4>Fill all details</h4>}</>,
                        <Button flat node="button" waves="green" disabled = {inputError}onClick={submit}>Submit</Button>,
                        <Button flat modal="close" node="button" waves="red">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Change Password"
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
                        <input id="oldPassword" name="oldPassword" type="password" class="validate" onChange={handleChange} />
                        <label for="oldPassword">Old Password</label>
                    </div>
                    <div class="input-field">
                        <input id="newpassowrd" name="newpassword" type="password" class="validate"  onChange={handleChange}/>
                        <label for="newpassowrd">New Password</label>
                    </div>
                    <div class="input-field">
                        <input id="confirmpassword" name="confirmpassword" type="password" class="validate"  onChange={handleChange}/>
                        <label for="confirmpassword">Confirm Password</label>
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
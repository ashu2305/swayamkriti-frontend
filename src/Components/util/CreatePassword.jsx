import React, {useState} from 'react';

import Particles from "react-particles-js";
import axios from 'axios';
import config from '../../config.json';
import { Redirect } from 'react-router-dom';


const CreatePassword=(props)=> {

    const[data, setData] = useState({
        email:props.email?props.email:'',
        password:'',
        confirmPassword:''
    });
    const [error, setError] = useState(0);
    const[load, setLoad] = useState(false);
    const [verified, setVerified] = useState(false);
    const handleChange = e =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };


    const passwordChange = async() => {
        const userData = {
            email: data.email,
            password: data.password
        }
        try {
            const res = await axios({
                url: `${config.BASE}/user/FP/`,
                method: "POST",
                data: userData
            })

            if(res.data) {
                if(res.data.otp === "otp"){
                    setLoad(false);
                    //window.alert(content.alert);
                    setVerified(true);
                }
            }
        }
        catch(error) {
            setLoad(false);
            window.alert('please try again');
            setVerified(true);
            //console.log(error.response);
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(data.password === data.confirmPassword) {
            if(data.password.length >=6){
                if(data.password !== '' && data.confirmPassword !== '') {
                    setError(0);
                    setLoad(true);
                    passwordChange();
                }
                else {
                    setError(1);
                }
            }else{
                setError(5);
            }
            
        }
        else {
            setError(2);
        }
    }
    if(verified){
        return(<Redirect to='/login'/>);
    }
    return (<div className="forgotpasswordBackground">
        <Particles className="particleBackground" />
        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <div className="col s12 offset-m3 m6">
                        <div class="card forgotpasswordBox">
                            <div class="card-content white-text center-align">
                            <div className="swyamHeading" >SWAYAMKRITI</div><br/>
                                <h1 className="forgotpasswordHeading">Change Password</h1>
                                <div class="input-field">
                                    <input id="password" 
                                        type="password" 
                                        class="validate white-text" 
                                        name='password'
                                        onChange={handleChange}
                                        required='required' 
                                    />
                                    <label for="password">Password</label>
                                </div>
                                <div class="input-field">
                                    <input id="confirmPassword" 
                                        type="password" 
                                        class="validate white-text" 
                                        name='confirmPassword'
                                        onChange={handleChange}
                                        required='required' 
                                    />
                                    <label for="confirmPassword">Confirm Password</label>
                                </div>
                                <button class="btn waves-effect waves-light" type="submit" onClick={onSubmit} name="action">Submit
                                    <i class="material-icons right">
                                        send
                                    </i>
                                </button>
                                {error=== 1 && 
                                    <p className="error center-align">Fill all credentials</p>
                                }
                                {error === 2 &&
                                    <p className="error center-align">Password does not match</p>
                                }
                                {error === 5 &&
                                    <p className="error center-align">Password length must be 6</p>
                                }   
                            </div>
                            <div class="card-action center-align">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CreatePassword

import React, {useState} from "react"
import "./signup.css";
import axios from 'axios';
import {Link} from "react-router-dom"
import Particles from "react-particles-js"
import Otp from '../util/Otp';
import config from '../../config.json';

const Signup = () => {
    const [page, setPage] = useState(0);
    const[data, setData] = useState({
        email:'',
        password:'',
        confirmPassword: '', 
        username:'',
        rollNo:'',
    });

    const[OTP, setOTP] = useState('');

    const[error, setError]  = useState(0);

    const [load, setLoad] = useState(false)

    const handleChange = e =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const otpSent = async() => {
        const postData = {
            email : data.email,
        }
        try{
            const res = await axios({
                url: `${config.BASE}/user/sendotp/${data.email}/`,
                method: "GET",
            });
            if(res.data)
            {
                if(res.data.status === "already registered"){
                    setLoad(false);
                    window.alert("Email already registered");
                }else{
                    setOTP(res.data.otp);
                    setPage(2);
                    setLoad(false);
                }
                console.log(res.data);
            }            
        }catch(error){
            setLoad(false);
            console.log(error);
        }   
    }

    const isEmail = (email) => {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.match(regEx)) 
            return true;
        else 
            return false;
    };

    const onSubmit = e =>{

        e.preventDefault();
        if(data.password === data.confirmPassword){
            console.log(data.password.length );
            if(data.password.length >= 6){
                if(data.email !== '' && data.password !== '' && data.confirmPassword !== '' && data.name !== '' && data.rollNo !== ''  ){
                    if(isEmail(data.email)){
                        setLoad(true);
                        otpSent();
                        console.log("verified");
                        
                    }else{
                        setError(2);
                    }
                }else{
                    setError(1);
                }
            }else{
                setError(5);
            }
        }else{
            console.log("pass error");
            setError(3);
        }
        
        console.log("hello in submit");
    }
    if(page === 2){
        return (<Otp  otp={OTP} data={data}  mode={"signup"}   />);
    }
    else
    return(
        <div className="signupBackground">
        <Particles className="particleBackground" />
        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <div className="col s12 offset-m3 m6">
                        <div class="card signupBox">
                            <div class="card-content white-text center-align">
                            <div className="swyamHeading" >SWYAMKRITI</div><br/>
                                <h1 className="signupHeading">Sign Up</h1>
                                <div class="input-field">
                                    <input id="name"
                                        type="text" 
                                        class="validate white-text" 
                                        name='username'
                                        onChange={handleChange}
                                        required='required' 
                                    />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div class="input-field">
                                    <input id="email" 
                                        type="email" 
                                        class="validate white-text" 
                                        name='email'
                                        onChange={handleChange}
                                        required='required' 
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div class="input-field">
                                    <input id="password" 
                                        type="password" 
                                        class="validate white-text" 
                                        name='password'
                                        onChange={handleChange}
                                        required='required'     
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div class="input-field">
                                    <input id="confirmPassword" 
                                        type="password" 
                                        class="validate white-text" 
                                        name='confirmPassword'
                                        onChange={handleChange}
                                        required='required' 
                                    />
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                </div>
                                <div class="input-field">
                                    <input id="rollNo" 
                                        type="number" 
                                        class="validate white-text" 
                                        name='rollNo'
                                        onChange={handleChange}
                                        required='required'     
                                    />
                                    <label htmlFor="rollNo">Roll No.</label>
                                </div>
                               <div class="input-field"><select ><option>hello</option></select></div>
                                {load===false ?
                                    <button class="btn waves-effect waves-light" type="submit" onClick={onSubmit} name="action">SignUp
                                        <i class="material-icons right">
                                            send
                                        </i>
                                    </button>
                                    :
                                    <button class="btn waves-effect waves-light" name="action">Loading
                                        
                                    </button>
                                }
                                {error=== 1 && 
                                    <p className="error center-align">Fill all credentials</p>
                                }
                                {error === 2 &&
                                    <p className="error center-align">Email not valid</p>
                                }
                                {error === 3 &&
                                    <p  className="error center-align">Password not match</p>
                                }
                                {error === 5 &&
                                    <p  className="error center-align">[password length must be six or more]</p>
                                }
                                
                            </div>
                            <div class="card-action center-align">
                                <Link to="/login" className="white-text">Already Registered</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
    
}

export default Signup;
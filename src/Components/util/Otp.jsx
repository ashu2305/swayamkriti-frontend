import React, {useState} from 'react';
import md5 from 'md5';
import axios from 'axios';
import config from '../../config.json';
import { Redirect} from "react-router-dom"
import Particles from "react-particles-js";
import CreatePassword from '../util/CreatePassword';
const Otp = (props) => {
    console.log(props);
    const[backOtp, setOTP] = useState(props.otp);
    const [page, setPage] = useState(0);
    const[otp, setOtp] = useState(0);
    const[load, setLoad] = useState(false);

    const handleChange = e =>{
        setOtp( e.target.value);
    };

    const verifyOTP = async() => {
        const postData= {
            email : props.data.email,
            password: props.data.password,
            name: props.data.username,
            gender: props.data.gender
        }
        try{
            const res = await axios({
                url: `${config.BASE}/user/signup/`,
                method: "POST",
                data: postData
            })
            if(res.data){
                //console.log(res.data);
                setLoad(false);
                setPage(3);
            }

        }catch(error){
            if(error.response.data.status === "email already exist"){
                setLoad(false);
                setPage(1);
                window.alert("email already exist");
            }
            setLoad(false);
            setPage(1);
            console.log(error);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(backOtp === md5(otp))
        {
            setLoad(true);
            if(props.mode==="signup")
                verifyOTP();
            if(props.mode === "fp"){
                setLoad(false);
                setPage(2);
                
                
            }
            
        }else{
            console.log(md5(otp) , backOtp);
            window.alert("OTP does not match Please try again");
        }
    }
    if(page === 2)
    {
        return ( <CreatePassword  email={props.data.email} />);
                
    }
    

    const resendOTP = async() => {
        setLoad(true);
        let url;
        if(props.mode === "fp"){
               url =    `${config.BASE}/user/sendotp_fp/${props.data.email}/`
        }
        else if(props.mode === "signup"){
             url =  `${config.BASE}/user/sendotp/${props.data.email}/`;
        }
        try{
            const res = await axios({
                
                url: url,
                method: "GET"
            });
            if(res.data)
            {
                if(res.data.status === "already registered"){
                    setLoad(false);
                    //window.alert
                }else{
                    setOTP(res.data.otp);
                    setLoad(false);
                }
                console.log(res.data);
            }            
        }catch(error){
            setLoad(false);
            console.log(error);
        }   
    }
    
    console.log(page);
    if(page===1){
        return (<Redirect to='/signup'/>);
    }
    if(page === 3){
        return (<Redirect to='/login'/>);
    }

    return (
        <div className="signupBackground">
        <Particles className="particleBackground" />
        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <div className="col s12 offset-m3 m6">
                        <div class="card signupBox">
                            <div class="card-content white-text center-align">
                            <div className="swyamHeading" >SWAYAMKRITI</div><br/>
                                <h1 className="signupHeading">OTP</h1>
                                <p>One-time Password has been sent to your entered email address, Kindly fill it below</p>
                                <div class="input-field">
                                    <input id="otp" 
                                        type="text" 
                                        class="validate white-text"
                                        name='otp'
                                        onChange={handleChange}
                                        required='required'  
                                    />
                                    <label htmlFor="otp">OTP</label>
                                </div>
                                {load===false ?
                                    <button class="btn waves-effect waves-light" type="submit" onClick={onSubmit} name="action">Submit
                                        <i class="material-icons right">
                                            send
                                        </i>
                                    </button>
                                    :
                                    <button class="btn waves-effect waves-light" name="action">Loading
                                        
                                    </button>
                                }
                            </div>
                            <div class="card-action center-align">
                                <div onClick={resendOTP}  className="white-text btn-div">Resend OTP</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Otp

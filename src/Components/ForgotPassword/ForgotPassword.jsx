import React, {useState} from "react"
import {Link} from "react-router-dom"
import Particles from "react-particles-js"
import "./forgotpassword.css";
import axios from 'axios';
import config from '../../config.json';
import Otp from '../util/Otp';

const Forgotpassword = () => {
    const [page, setPage] = useState(0);
    const[data, setData] = useState({
        email:''
    });
    const [error, setError] = useState(0); 
    const[load, setLoad] = useState(false);
    const[OTP, setOTP] = useState('');

    const handleChange = e =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const otpSent = async() => {
        try{
            const res = await axios({
                url: `${config.BASE}/user/sendotp_fp/${data.email}/`,
                method: "GET",
            });
            if(res.data){ 
                if(res.data.otp === "not exist"){
                    window.alert("not registered");
                    setLoad(false);
                }
                else{
                    setOTP(res.data.otp);
                setPage(1);
                setLoad(false);
                //console.log(res.data);
            }
                
            }            
        }catch(error){
            setLoad(false);
            //console.log(error);
        }   
    }

    const onSubmit = e => {
        e.preventDefault();
        if(data.email !== ''  ) {
            setLoad(true);
            otpSent();
            //console.log("verified");
        }
        else {
            setError(1);
        }

        //console.log("hello in submit");
    }
    if(page === 1){
        return(<Otp  otp={OTP} data={data}  mode={"fp"}   />)
    }

    return (<div className="forgotpasswordBackground">
        <Particles className="particleBackground" />
        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <div className="col s12 offset-m3 m6">
                        <div class="card forgotpasswordBox">
                            <div class="card-content white-text center-align">
                                
                                <h1 className="forgotpasswordHeading">Forgot Password</h1>
                                <div class="input-field">
                                    <input id="email" 
                                        type="email" 
                                        class="validate white-text" 
                                        name='email'
                                        onChange={handleChange}
                                        required='required' 
                                    />
                                    <label for="email">Email</label>
                                </div>
                                {load ? 
                                    <button class="btn waves-effect waves-light" name="action">LOADING
                                    </button>
                                    :
                                    <button class="btn waves-effect waves-light" type="submit" onClick={onSubmit} name="action">Submit
                                    <i class="material-icons right">
                                        send
                                    </i>
                                </button>

                                }
                                
                                {error=== 1 && 
                                    <p className="error center-align">Fill all credentials</p>
                                }
                                {error === 2 &&
                                    <p className="error center-align">Email not registered</p>
                                }
                            </div>
                            <div class="card-action center-align">
                                <Link to="/login" className="white-text">Back to Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Forgotpassword;
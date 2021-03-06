import React, {useState, useContext} from "react"
import { Redirect, Link } from "react-router-dom"
import "./login.css";
import axios from 'axios';
import Store from '../../store/store';
import config from '../../config.json';
import Particles from "react-particles-js"

const Login = () => {
    const{ state, dispatch } = useContext(Store);
    const[data, setData] = useState({
        email:'',
        password:'',
        role: 'student'
    });

    const[error, setError]  = useState(0);
    //0 no error
    //1 is empty
    //2 not email
    //4 wrong password
    const [load, setLoad] = useState(false)

    const handleRadioChange = e => {
        setData({
            ...data,
            role: e.target.value
        })
    }
    const handleChange = e =>{
        //console.log( e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
          onSubmit(e);
        }
    }

    const verify = async() => {
        const postData = {
            username : data.email,
            password: data.password
        }
        try{
            const res = await axios.post(
                `${config.BASE}/api/token/` , 
                postData
            );
            //console.log(res);
            if(res.data)
            {
                //console.log(res.data);
                if(res.data.access){
                    if(data.role === "admin"){
                        if((data.email === "technobyte@swaymkriti.com" ) || 
                            (data.email === "compdept@swaymkriti.com"  )   ){
                                localStorage.setItem('FBIdToken', `${res.data.access}`);
                                dispatch({
                                    type: 'ONBOARDLOGIN',
                                    payload: res.data.access
                                });
                                
                        }else{
                            setLoad(false);
                        }
                    }
                    else{
                        if((data.email === "technobyte@swaymkriti.com" ) || 
                            (data.email === "compdept@swaymkriti.com"  )   ){
                                setLoad(false);
                                window.alert("Please login with ADMIN");
                        }
                        else{
                            localStorage.setItem('FBIdToken', `${res.data.access}`);
                            dispatch({
                                type: 'ONBOARD',
                                payload: res.data.access
                            });
                        }
                        
                    }
                    


                }
               
            }            
        }catch(error){ 
            if(error.response.data.detail==="No active account found with the given credentials"){
                setError(4);
                setLoad(false);
            }   
            //console.log(error.response);
        }   
    }
    if(state.isAuthAdmin){
        return <Redirect to='/adminlogin' />; 
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
        if(data.email !== '' && data.password !== ''){
            if(isEmail(data.email)){
                setError(0);
                setLoad(true);
                verify();
            }else{
                setError(2);
            }
            
        }else{
            setError(1);
        }
        //console.log("hello in submit");
    }

    if(state.isAuth){
        return <Redirect to='/home' />;
    }

    return (
    <div className="loginBackground" >
        <Particles className="particleBackground" />
        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <div className="col s12 offset-m3 m6">
                        <div class="card loginBox">
                            <div class="card-content white-text center-align">
                                <div className="swyamHeading" >SWAYAMKRITI</div><br/>
                                <h6>Welcome Here Again</h6>
                                <h1 className="loginHeading">Login</h1>
                                <div class="input-field">
                                    <input id="email" 
                                        type="email" 
                                        class="validate white-text"
                                        name='email'
                                        onChange={handleChange}
                                        required='required' 
                                        onKeyDown={handleKeyDown}
                                    />
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field">
                                    <input id="password" 
                                        type="password" 
                                        class="validate white-text" 
                                        name='password'
                                        onChange={handleChange}
                                        required='required' 
                                        onKeyDown={handleKeyDown}    
                                    />
                                    <label for="password">Password</label>
                                </div>
                                <div class="input-field">
                                   
                                    <p>
                                        <label>
                                            <input class="with-gap" onChange={handleRadioChange} value="student" type="radio" checked={data.role === "student"} />
                                            <span>Student</span>
                                        </label>
                                        <label>
                                            <input class="with-gap" onChange={handleRadioChange} value="admin" type="radio" checked={data.role === "admin"} />
                                            <span>Admin</span>
                                        </label>
                                    </p>
                                </div>
                                {load===false ?
                                    <button class="btn waves-effect waves-light" type="submit" onClick={onSubmit} name="action">Login
                                        <i class="material-icons right">
                                            send
                                        </i>
                                    </button>
                                    :
                                    <button class="btn waves-effect waves-light" name="action">Loading
                                        
                                    </button>
                                }
                               
                            </div>
                            {error=== 1 && 
                                <p className="error center-align"> Fill all credentials</p>
                            }
                            {error === 2 &&
                                <p className="error center-align">email not valid</p>
                            }
                            {error === 4 &&
                                <p className="error center-align">wrong email or  password</p>
                            }

                            <div class="card-action center-align">
                                <Link to="/forgotpassword" className="white-text">Forgot password</Link>
                            </div>
                            <div class="card-action center-align">
                                <Link to="/signup" className="white-text">Create new account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    )
}

export default Login;
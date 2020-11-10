import React from "react"
import { Link } from "react-router-dom"
import "./login.css"
import Particles from "react-particles-js"
const Login = () => {

    return (<div className="loginBackground" >
        <Particles className="particleBackground" />
        <div className="container">
            <div className="row">
                <div className="col s12 m12">
                    <div className="col s12 offset-m3 m6">
                        <div class="card loginBox">
                            <div class="card-content white-text center-align">
                                
                                <h1 className="loginHeading">Login</h1>
                                <div class="input-field">
                                    <input id="email" type="email" class="validate white-text" />
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field">
                                    <input id="password" type="password" class="validate white-text" />
                                    <label for="password">Password</label>
                                </div>

                                <button class="btn waves-effect waves-light" type="submit" name="action">Login
                                    <i class="material-icons right">
                                        send
                                    </i>
                                </button>
                            </div>


                            <div class="card-action center-align">
                                <Link to="/forgotpassword" className="white-text">Forgot password</Link>

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
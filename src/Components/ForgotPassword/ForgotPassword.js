import React from "react"
import {Link} from "react-router-dom"
import Particles from "react-particles-js"
import "./forgotpassword.css"

const Signup = () => {
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
                                    <input id="email" type="email" class="validate white-text" />
                                    <label for="email">Email</label>
                                </div>
                                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i class="material-icons right">
                                        send
                                    </i>
                                </button>
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

export default Signup;
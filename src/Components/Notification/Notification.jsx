import React,{useEffect, useState} from "react"
import "./notification.css"
const Notification = () => {

    return(
        <div className="container-fluid notification-background">
        <div className="container notification-box white">
            <div className="row">
                <div className="col s12 m12">
                    <h1>Notification</h1>
                    <div className="notification-block">
                        <p className="description-box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores 
                            hic sunt nemo reprehenderit dolor et nulla doloremque magnam vel, maiores 
                            laboriosam alias possimus maxime quisquam rerum beatae! Iure, eligendi. Dolore?</p>
                            <span className="preview-box"><img src="https://www.gsb.stanford.edu/sites/default/files/styles/1630x_variable/public/resources/chiukey.jpg?itok=Z_-XVRps"/></span>
                    </div>
                    <div className="notification-block">
                        <p className="description-box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores 
                            hic sunt nemo reprehenderit dolor et nulla doloremque magnam vel, maiores 
                            laboriosam alias possimus maxime quisquam rerum beatae! Iure, eligendi. Dolore?</p>
                            <span className="preview-box"> </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Notification;
import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import "./notification.css"
import axios from 'axios';
import { BASE, IMAGE_URL } from "../../config.json"
import Particles from "react-particles-js"

import Header from "../util/Header"
const Notification = () => {
    const [notifications, setNotifications] = useState([])
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(0);
    useEffect(async () => {
        try {
            
            const res = await axios({
                url: BASE + `/excal_admin/viewnoti/`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.FBIdToken}`
                }
            });
            setNotifications(res.data.result);
            setLoader(false)
        }
        catch (error) {
            if (error.response.status === 401) {
                setError(1);
            } else {
                setError(0);
            }
            setLoader(false)
        }

    }, []);
    if (error === 1) {
        return (<Redirect to='/logout' />);
    }
    return (<>
        <Header />
        <Particles className="particleNotificationBackground" />
        <div className="container-fluid notification-background">

            <div className="container notification-box">
                <div className="row">
                    <div className="col s12 m12">
                        <h1 style={{ color: "#26a69a" }}>Notification</h1>
                        { loader&&<h3 className="loadingNotification">Loading</h3>}                        
                        <ul className="collection notifications">

                            {
                                notifications.map(notification => {
                                    return (


                                        <li className="collection-item">
                                            <h3>{notification.theme}</h3>
                                            <p className="description-box">
                                                {notification.desc}
                                            </p><span className="preview-box"><a target="_blank" className="white-text waves-effect waves-light purple darken-2 btn " href={`https://res.cloudinary.com/studentmohinesh/image/upload/pg_1/${notification.FILE}.jpg`}>Preview</a></span>
                                            <p style={{ color: "gray" }} className="createdNotification">Created at: {notification.registered_at.slice(0, 10)}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}


export default Notification;
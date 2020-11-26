import React,{useEffect, useState} from "react"
import "./notification.css"
import axios from 'axios';
import {BASE,IMAGE_URL} from "../../config.json"

import Header from "../util/Header"
const Notification = () => {
    const [notifications,setNotifications]=useState([])
    useEffect(async()=>{
        const res = await axios({
            url: BASE + `/excal_admin/addnoti/`,
            method: "GET",
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA2NDgwODc1LCJqdGkiOiJkMzU3ZmZlMmEwMDg0ODQyYjVhOTgzMjMxMWM2YWFkNyIsInVzZXJfaWQiOjF9.1NxIO_ZCqNopPsF9Jnn4YOww_V7-Lh7BSGhJTB75Idg`
            }
        });
        setNotifications(res.data.result);
        console.log(res);
    },[])
    return(<>
    <Header/>
        <div className="container-fluid notification-background">
        <div className="container notification-box">
            <div className="row">
                <div className="col s12 m12">
                    <h1 style={{color:"#26a69a"}}>Notification</h1>
                    <ul class="collection notifications">
                        {
                            notifications.map(notification=>{
                                return(

                              
      <li class="collection-item">
          <h3>{notification.theme}</h3><p className="description-box">
          {notification.desc}
          </p><span className="preview-box"><a target="_blank" className="white-text waves-effect waves-light purple darken-2 btn " href={`${IMAGE_URL}${notification.FILE}`}>Preview</a></span>
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
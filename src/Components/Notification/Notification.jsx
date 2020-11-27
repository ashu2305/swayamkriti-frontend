import React,{useEffect, useState} from "react";
import {Redirect} from 'react-router-dom';
import "./notification.css"
import axios from 'axios';
import {BASE,IMAGE_URL} from "../../config.json"

import Header from "../util/Header"
const Notification = () => {
    const [notifications,setNotifications]=useState([])
    const [error, setError] = useState(0);
    useEffect(async()=>{
        try{
            const res = await axios({
                url: BASE + `/excal_admin/addnoti/`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("FBIdToken")}`
                }
            });
            setNotifications(res.data.result);
            console.log(res);
        }
        catch(error){
            if (error.response.status === 401) {
                setError(1);
            }else{
                setError(0);
            }
        }
        
    },[]);
    if (error === 1) {
        return (<Redirect to='/logout' />);
    }
    return(<>
    <Header/>
        <div className="container-fluid notification-background">
        <div className="container notification-box">
            <div className="row">
                <div className="col s12 m12">
                    <h1 style={{color:"#26a69a"}}>Notification</h1>
                    <ul className="collection notifications">
                        {
                            notifications.map(notification=>{
                                return(

                              
      <li className="collection-item">
          <h3>{notification.theme}</h3><p className="description-box">
          {notification.desc}
          </p><span className="preview-box"><a target="_blank" className="white-text waves-effect waves-light purple darken-2 btn " href={`https://res.cloudinary.com/studentmohinesh/image/upload/pg_1/${notification.FILE}.jpg`}>Preview</a></span>
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
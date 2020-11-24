import React,{useEffect, useState} from "react"
import "./notification.css"

import Header from "../util/Header"
const Notification = () => {

    return(<>
    <Header/>
        <div className="container-fluid notification-background">
        <div className="container notification-box">
            <div className="row">
                <div className="col s12 m12">
                    <h1 style={{color:"#26a69a"}}>Notification</h1>
                    <ul class="collection notifications">
      <li class="collection-item"><p className="description-box">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati
           ipsum tempore vitae numquam atque illum optio sequi, rem illo expedita nemo. 
           Error assumenda hic reiciendis nihil sint ipsa pariatur.
          </p><span className="preview-box"><img src='https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Kimetsu_no_Yaiba_Blu-ray_Disc_Box_1_art.jpg/220px-Kimetsu_no_Yaiba_Blu-ray_Disc_Box_1_art.jpg'/></span>
          </li>
          <li class="collection-item"><p className="description-box">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati
           ipsum tempore vitae numquam atque illum optio sequi, rem illo expedita nemo. 
           Error assumenda hic reiciendis nihil sint ipsa pariatur.
          </p><span className="preview-box"><img src='https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Kimetsu_no_Yaiba_Blu-ray_Disc_Box_1_art.jpg/220px-Kimetsu_no_Yaiba_Blu-ray_Disc_Box_1_art.jpg'/></span>
          </li>
          <li class="collection-item"><p className="description-box">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati
           ipsum tempore vitae numquam atque illum optio sequi, rem illo expedita nemo. 
           Error assumenda hic reiciendis nihil sint ipsa pariatur.
          </p><span className="preview-box"><img src='https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Kimetsu_no_Yaiba_Blu-ray_Disc_Box_1_art.jpg/220px-Kimetsu_no_Yaiba_Blu-ray_Disc_Box_1_art.jpg'/></span>
          </li>
          <li class="collection-item"><p className="description-box">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati
           ipsum tempore vitae numquam atque illum optio sequi, rem illo expedita nemo. 
           Error assumenda hic reiciendis nihil sint ipsa pariatur.
          </p><span className="preview-box"><img src='https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Kimetsu_no_Yaiba_Blu-ray_Disc_Box_1_art.jpg/220px-Kimetsu_no_Yaiba_Blu-ray_Disc_Box_1_art.jpg'/></span>
          </li>
      
    </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Notification;
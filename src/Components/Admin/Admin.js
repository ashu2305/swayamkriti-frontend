import React, { useState } from "react"
import logo from "../../assets/logo.png";
import { Modal, Button, } from 'react-materialize'
import "./admin.css"
import Heading from "./Header"
import M from "materialize-css"
import axios from 'axios';
import config from '../../config.json';
const Admin = () => {
    const [data,setData] = useState({
        desc:"",
        theme:"",
        FILE:""
    })
    const [show, setShow] = useState(false);
    const [loader,setLoader] = useState(false);
    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
        console.log(data)
    }
    const fileChange = e => {
        let filex = e.target.files[0]
        setData({
            ...data,
            FILE: filex
        });
    };

    const submit = async () => {
        console.log(data);
        {
            try {
                setLoader(true)
                const formData = new FormData();
                formData.append('theme', data.theme);
                formData.append('desc', data.desc);
                formData.append('FILE', data.FILE);

                const result = await axios({
                    url: `${config.BASE}/excal_admin/addnoti/`,
                    method: "POST",
                    headers: {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA2NDgwODc1LCJqdGkiOiJkMzU3ZmZlMmEwMDg0ODQyYjVhOTgzMjMxMWM2YWFkNyIsInVzZXJfaWQiOjF9.1NxIO_ZCqNopPsF9Jnn4YOww_V7-Lh7BSGhJTB75Idg`
                    },
                    data: formData
                });
                console.log(result)
                if (result.data.result=="done") {
                    document.getElementById("closeAddNotification").click();
                    M.toast({html:result.data.result,classes: "sellsuccess"});
                    setLoader(false)
                }
            }
            catch (error) {
                setLoader(false)
                console.log(error);
            }
        }

    }


    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);



    return (<>
    <Heading/>
        <div className="admin_background">
            <div className="admin_card">
                <img src={logo} height={60} width={60} /><h3>Swyamkriti</h3>
                <h1>Add an announcement</h1>
                <Modal onHide={show}
                    actions={[
                        <Button flat node="button" waves="green" onClick={submit}>Submit</Button>,
                        <Button flat modal="close" node="button" waves="red" id="closeAddNotification">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Modal "
                    id="Modal-0"
                    open={false}
                    options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: '4%'
                    }}
                    className="adminModal"
                    root={document.body}
                    trigger={<Button node="button">Add</Button>}
                >
                    <div class="input-field">
                        <input id="heading" type="text" name="theme" class="validate" onChange={handleChange}/>
                        <label for="heading">Heading</label>
                    </div>
                    <div class="input-field">
                        <input id="desc" type="text" name="desc" class="validate" onChange={handleChange} />
                        <label for="desc">Description</label>
                    </div>
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" name="FILE" onChange={fileChange}/>
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" />
                        </div>
                    </div>
                    <div class="preloader-wrapper small active sell-loader">
                    {loader&&<div class="spinner-layer spinner-green-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>}
                </div>
                </Modal>

            </div>
        </div>
        </>
    )
}

export default Admin;
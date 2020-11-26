import React from "react"
import logo from "../../assets/logo.png";
import { Modal, Button } from 'react-materialize'
import "./admin.css"
import Heading from "./Header"
const Admin = () => {
    return (<>
    <Heading/>
        <div className="admin_background">
            <div className="admin_card">
                <img src={logo} height={60} width={60} /><h3>Swyamkriti</h3>
                <h1>Add an announcement</h1>
                <Modal
                    actions={[
                        <Button flat modal="close" node="button" waves="green">Close</Button>
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
                        <input id="heading" type="text" class="validate" />
                        <label for="heading">Heading</label>
                    </div>
                    <div class="input-field">
                        <input id="desc" type="text" class="validate" />
                        <label for="desc">Description</label>
                    </div>
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" />
                        </div>
                    </div>
                </Modal>

            </div>
        </div>
        </>
    )
}

export default Admin;
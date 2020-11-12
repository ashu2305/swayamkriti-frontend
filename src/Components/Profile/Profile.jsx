import React, {useState, useEffect} from 'react';
import './profile.css';
import axios from 'axios';
import config from '../../config.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Profile=()=> {
    const [user, setUser] = useState({

    });
    const [data, setData] = useState({
        college:"",
        branch:"",
        semester:""
    })
    useEffect(() => {
        const getUser = async () => {
            try{
                const res = await axios({
                    url: `${config.BASE}/getUserDetails/`,
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.FBIdToken}`
                    }
                });
                if(res.data){
                    setUser(res.data);
                    console.log(res.data);
                    //console.log(user);
                } 
            }
            catch(error) {
                console.log(error);
            }
        };
        getUser();
    }, []);

    const submit = async() =>{
        try{
            const result = await axios({
                url: `${config.BASE}/updateProfile`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.FBIdToken}`
                },
                data
            });
            if(result.data){
                console.log(result.data);
                setUser({
                    ...user,
                    branch: data.branch,
                    semester: data.semester,
                    college: data.college
                })
                handleClose();
            }
        }
        catch(error){
            console.log(error);
        }

    }

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = () => {
        submit();
    }
    return (
        <div className="prof-back">
        <div class="prof-container">
        <div class="cover-photo">
          <img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" class="profile" />
        </div>
        <div class="profile-name">Beni Smith</div>
        <p class="about">User Interface: <span>hello </span><br/></p><p> Designer and<br/>front-end developer</p>
        <p>hello here is loop of your extra details</p>
        <div>
            <button class="msg-btn" onClick={handleShow}>Add More Detais</button>
            <div>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add More Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group >
                                <Form.Label>College Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter college name" onChange={handleChange} name="college" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Branch</Form.Label>
                                <Form.Control type="text" placeholder="Branch" onChange={handleChange} name="branch" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Semester</Form.Label>
                                <Form.Control type="text" placeholder="semester" onChange={handleChange} name="semester" />
                            </Form.Group>
                            
                            </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={onSubmit}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
        <br/>
        <h3>Selling Products</h3><br/>
        <button disabled class="follow-btn">
            <div>
               <h5>Product Name</h5>
               <h6>product Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,  desc</h6>
                <h5>product price</h5>
            </div><button>Delete</button>
        </button>
        <button disabled class="follow-btn">
            <div>
               <h5>Product Name</h5>
               <h6>product Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,  desc</h6>
                <h5>product price</h5>
            </div><button>Delete</button>
        </button>
       
      </div>
      </div>
    )
}

export default Profile

import React, { useState, useEffect } from 'react';
import './profile.css';
import axios from 'axios';
import config from '../../config.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Select from 'react-select'
const Profile = () => {
    const [user, setUser] = useState({

    });
    const [data, setData] = useState({
        college: "",
        branch: "",
        semester: "",
        skills:[]
    })
    const [skills,setSkills] = useState([]);
    const [areaofinterest,setAreaOfInterest] = useState([]);
    const skillsSet = [
        { value: 'javascript', label: 'Javascript' },
        { value: 'react', label: 'React' },
        { value: 'nodejs', label: 'Nodejs' }
    ]
    const areaofinterestSet = [
        { value: 'javascript', label: 'Javascript' },
        { value: 'react', label: 'React' },
        { value: 'nodejs', label: 'Nodejs' }
    ]
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios({
                    url: `${config.BASE}/getUserDetails/`,
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.FBIdToken}`
                    }
                });
                if (res.data) {
                    setUser(res.data);
                    console.log(res.data);
                    //console.log(user);
                }
            }
            catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);

    const submit = async () => {
        try {
            const result = await axios({
                url: `${config.BASE}/updateProfile`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.FBIdToken}`
                },
                data
            });
            if (result.data) {
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
        catch (error) {
            console.log(error);
        }

    }

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        console.log(data)
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = () => {
        submit();
    }
    const handleChangeSkills = (options) =>{
        setData({
            ...data,
            skills:options
        })
        
    }
    return (
        <div className="prof-back">
            <div class="prof-container">
                <div class="cover-photo">
                    <img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" class="profile" />
                </div>
                <div class="profile-name">Beni Smith</div>
                <p class="about">User Interface: <span>hello </span><br /></p><p> Designer and<br />front-end developer</p>
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
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label>Starting Year</Form.Label>
                                        <Form.Control as="select" custom name="year"  onChange={handleChange}>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                            <option>2010</option>
                                            <option>2009</option>
                                            <option>2008</option>
                                            <option>2007</option>
                                            <option>2006</option>
                                            <option>2005</option>
                                            <option>2004</option>
                                            <option>2003</option>
                                            <option>2002</option>
                                            <option>2001</option>
                                            <option>2000</option>
                                            <option>1999</option>
                                            <option>1998</option>
                                            <option>1997</option>
                                            <option>1996</option>
                                            <option>1995</option>
                                            <option>1994</option>
                                            <option>1993</option>
                                            <option>1992</option>
                                            <option>1991</option>
                                            <option>1990</option>
                                            <option>1989</option>
                                            <option>1988</option>
                                            <option>1987</option>
                                            <option>1986</option>
                                            <option>1985</option>
                                            <option>1984</option>
                                            <option>1983</option>
                                            <option>1982</option>
                                            <option>1981</option>
                                            <option>1980</option>
                                            
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label>Semester</Form.Label>
                                        <Form.Control as="select" custom name="semester"  onChange={handleChange}>
                                            <option>1st</option>
                                            <option>2nd</option>
                                            <option>3rd</option>
                                            <option>4th</option>
                                            <option>5th</option>
                                            <option>6th</option>
                                            <option>7th</option>
                                            <option>8th</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label>Branch</Form.Label>
                                        <Form.Control as="select" custom name="branch"  onChange={handleChange}>
                                            <option>Civil Engineering</option>
                                            <option>Computer Engineering</option>
                                            <option>Electrical Enginnering</option>
                                            <option>Electronic Engineering</option>
                                            <option>Information Technology</option>
                                            <option>Mechanical Engineering</option>
                                            <option>Industrial {'&'} Production Engineering</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                    <Form.Label>Skills</Form.Label>
                                        <Select options={skillsSet} isMulti name="skills"  onChange={handleChangeSkills} />
                                    </Form.Group>
                                    <Form.Group>
                                    <Form.Label>Area of Interest</Form.Label>
                                        <Select options={skillsSet} isMulti name="skills"  onChange={handleChangeSkills} />
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
                <br />
                <h3>Selling Products</h3><br />
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

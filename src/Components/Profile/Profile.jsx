import React, { useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import './profile.css';
import axios from 'axios';
import config from '../../config.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Select from 'react-select'
import skillsFile from "./skills.json";
import Header from '../util/Header';
const Profile = () => {
    const [user, setUser] = useState({

    });
    const [data, setData] = useState({
        rollno: "",
        branch: "",
        program: "",
        skills:[],
        areaofinterest: '',
        image:'kcn2vbzm3c6lrqxliaw3',
        year:'',
        email:'',
        gender:'',
        name:''
    });
    
    const [show, setShow] = useState(false);

    const [error, setError] = useState(0);
    //0 no error
    //1 unauthorized
    
    const skillsSet=skillsFile
    
    useEffect(() => {
        const getUser = async () => {
            try {
                
                const res = await axios({
                    url: `https://excal.herokuapp.com/user/profile/`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.FBIdToken}`
                        }
                });
                if (res.data) {
                    setUser(res.data);
                    console.log(res.data);
                    //console.log(user);
                    let input = res.data.result;
                    console.log(input.skills);
                    let y=[];
                    if(input.skills!== "undefined"){
                    let x = input.skills.split(' : ');
                    x.map((item)=>(y.push({value: item, label: item})));}
                    console.log(y);
                    setData({
                        rollno: input.rollno?input.rollno:"",
                        branch: input.branch?input.branch:"",
                        program: input.prog?input.prog:"",
                        skills:y,
                        areaofinterest: input.areaofinterest?input.areaofinterest:'',
                        image:(input.image !== "None")?input.image:'kcn2vbzm3c6lrqxliaw3',
                        year: input.year?input.year:'',
                        email:input.email?input.email:'',
                        gender:input.gender?input.gender:'',
                        name:input.name?input.name:''
                    })
                }
            }
            catch (error) {
                console.log(error.response);
                if(error.response.status === 401){
                    setError(1);
                }else{
                    setError(0);
                }
                console.log(error);
            }
        };
        getUser();
        
    }, []);
    if(error === 1)
    {
        return (<Redirect to='/logout' />);
    }

    const fileChange = e => {
        let filex = e.target.files[0]
        setData({
            ...data,
            image : filex
        });
    };

    const submit = async () => {
        try {
            let y=[];
            let x;
            if(data.skills.length > 0 ){
            data.skills.map((item)=>(y.push(item.value)));

            x = y.join(' : ');}

            const formData = new FormData();
            formData.append( 'branch', data.branch);
            formData.append('year', data.year);
            formData.append('rollno',data.rollno);
            formData.append('prog', data.program);
            formData.append('skills', x);
            formData.append('areaofinterest', data.areaofinterest);
            formData.append('image', data.image);
            
            const result = await axios({
                url: `${config.BASE}/user/addmentor/`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.FBIdToken}`
                },
                data: formData
            });
            if (result.data) {
                console.log(result.data);
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
    };

    const handleClose = () => {
        setShow(false);
    };
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
    console.log(data);
    return (<><Header />
        <div className="prof-back">
            
            <div class="prof-container">
                <div class="cover-photo">
                    <img src={`${config.IMAGE_URL}${data.image}`} class="profile" />
                </div>
                <div class="profile-name">{data.name}</div>
                <p class="about about-top">E-mail Id: <span>{data.email} </span><br /></p>
                {data.branch && <p class="about">Branch: <span>{data.branch} </span><br /></p>}
                {data.program && <p class="about">Program: <span>{data.program} </span><br /></p>}
                {data.year && <p class="about">Year: <span>{data.year} </span><br /></p>}
                {data.rollno && <p class="about">Roll No: <span>{data.rollno} </span><br /></p>}
                {data.skills && <p class="about">Skills: <span>{data.skills && data.skills.map((items)=>(<><span>{items.value}</span><span> , </span> </>))} </span><br /></p>}
                {data.areaofinterest && <p class="about">Area of Interest : <span>{data.areaofinterest && data.areaofinterest.split(': ').map((items)=>(<><span>{items}</span><span> , </span> </>))} </span><br /></p>}
                
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
                                        <Form.Label>Roll No</Form.Label>
                                        <Form.Control type="number" value={data.rollno} placeholder="Enter Roll No" onChange={handleChange} name="rollno" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Profile Photo</Form.Label>
                                        <Form.Control type="file" placeholder="Enter Roll No"   onChange ={fileChange} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label>Starting Year</Form.Label>
                                        <Form.Control as="select" value={data.year} custom name="year"  onChange={handleChange}>

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
                                        <Form.Label>Program</Form.Label>
                                        <Form.Control as="select" value={data.program} custom name="program"  onChange={handleChange}>
                                            <option>B. Tech </option>
                                            <option>M.Tech</option>
                                            <option>MCA</option>
                                            <option>MBA</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label>Branch</Form.Label>
                                        <Form.Control as="select" custom name="branch" value={data.branch}  onChange={handleChange}>
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
                                        <Select options={skillsSet} isMulti name="skills" value={data.skills}  onChange={handleChangeSkills} />
                                    </Form.Group>
                                    <Form.Group>
                                    <Form.Label>Area of Interest</Form.Label>
                                    <Form.Control type="text" placeholder="Seperated by :"  value={data.areaofinterest} onChange={handleChange} name="areaofinterest" />
                                    
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                        </Button>{"  "}
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
        </div></>
    )
}

export default Profile

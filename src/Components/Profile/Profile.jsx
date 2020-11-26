import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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
        skills: [],
        areaofinterest: '',
        image: '',
        year: '',
        email: '',
        gender: '',
        name: ''
    });
    const [pdata, setPData] = useState({
        rollno: "",
        branch: "",
        program: "",
        skills: [],
        areaofinterest: '',
        image: '',
        year: '',
        email: '',
        gender: '',
        name: ''
    });
    const [products, setProducts] = useState([])
    const [show, setShow] = useState(false);
    const [inputError, setInputError] = useState(false)
    const [error, setError] = useState(0);
    const [loader,setLoader] = useState(false);
    const [verified, setVerified] = useState(false);
    
    //0 no error
    //1 unauthorized

    const skillsSet = skillsFile

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
                    setProducts(res.data.products)

                    console.log(res.data);
                    let input = res.data.result;

                    let y = [];
                    if (input.skills === undefined){
                        y=[];
                    }
                    else {
                        let x = input.skills.split(' : ');
                        x.map((item) => (y.push({ value: item, label: item })));
                    }
                    setData({
                        rollno: input.rollno ? input.rollno : "",
                        branch: input.branch ? input.branch : "",
                        program: input.program ? input.program : "",
                        skills: y,
                        areaofinterest: input.areaofinterest ? input.areaofinterest : '',
                        image: (input.image !== undefined ) ? input.image : (input.gender === 'M') ? 'WhatsApp_Image_2020-11-26_at_10.44.30_PM_1_t5mowc.jpg' : 'WhatsApp_Image_2020-11-26_at_10.44.30_PM_fwbvr3.jpg' ,
                        year: input.year ? input.year : '',
                        email: input.email ? input.email : '',
                        gender: input.gender ? input.gender : '',
                        name: input.name ? input.name : ''
                    })
                    console.log(data.image);
                    setPData({
                        rollno: input.rollno ? input.rollno : "",
                        branch: input.branch ? input.branch : "",
                        program: input.program ? input.program : "",
                        skills: y,
                        areaofinterest: input.areaofinterest ? input.areaofinterest : '',
                        image: (input.image !== "None") ? input.image : 'kcn2vbzm3c6lrqxliaw3',
                        year: input.year ? input.year : '',
                        email: input.email ? input.email : '',
                        gender: input.gender ? input.gender : '',
                        name: input.name ? input.name : ''
                    })
                }
            }
            catch (error) {
                if (error.response.status === 401) {
                    setError(1);
                } else {
                    setError(0);
                }
                console.log(error);
            }
        };
        getUser();
        
    }, []);
    useEffect(()=>{
        
        if (pdata.skills===null||pdata.skills===[]|| pdata.areaofinterest === ''  || pdata.year==='' || pdata.rollno === ""){
            setInputError(true)
            console.log("hello");
        }
            
        else
            setInputError(false)
    })
    if (error === 1) {
        return (<Redirect to='/logout' />);
    }

    const fileChange = e => {
        let filex = e.target.files[0]
        setPData({
            ...pdata,
            image: filex
        });
        console.log(filex);
    };

    const submit = async () => {

        console.log(pdata);
        {
            await setInputError(false)
            try {
                setLoader(true)
                let y = [];
                let x;
                if (pdata.skills.length > 0) {
                    pdata.skills.map((item) => (y.push(item.value)));

                    x = y.join(' : ');
                }

                const formData = new FormData();
                formData.append('branch', pdata.branch);
                formData.append('year', pdata.year);
                formData.append('rollno', pdata.rollno);
                formData.append('prog', pdata.program);
                formData.append('skills', x);
                formData.append('areaofinterest', pdata.areaofinterest);
                formData.append('image', pdata.image);

                const result = await axios({
                    url: `${config.BASE}/user/addmentor/`,
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.FBIdToken}`
                    },
                    data: formData
                });
                if (result.data) {
                    setLoader(false)
                    handleClose();
                    setVerified(true);
                }
            }
            catch (error) {
                console.log(error);
            }
        }

    }

    const handleChange = async e => {
        
        await setPData({
            ...pdata,
            [e.target.name]: e.target.value
        });
    };
    console.log(data);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    const onSubmit = () => {
        submit();
    }
    const handleChangeSkills = async (options) => {
        await setPData({
            ...pdata,
            skills: options
        })

    }


    const delete_Product = async e => {
        setLoader(true);
        const postData = {
            "p_id":e
        }
        try{
            const res = await axios({
                url: `${config.BASE}/user/buysell/`,
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${localStorage.FBIdToken}`
                },
                data: postData
            });
            console.log(res);
            setLoader(false);
            setVerified(true);
        }
        catch(error){
            console.log(error);
            setLoader(false);
        }
    }
    if(verified === true){
        return <Redirect to='/profile1' />;
    }
    console.log(pdata);


    return (<><Header />
        <div className="prof-back" style={data.name === ""||(products.length==0&&!data.areaofinterest) ? { height: "100vh" } : { height: "auto" }}>

            <div class="prof-container">
                <div class="cover-photo">
                    <img src={`${config.IMAGE_URL}${data.image}`} alt="user_image" class="profile" />
                </div>


                <div class="profile-name">{data.name}</div>

                <p class="about about-top">E-mail Id:
                    <span>{data.email} </span>
                    <br />
                </p>
                {data.branch && <p class="about">Branch: <span>{data.branch} </span><br /></p>}
                {data.program && <p class="about">Program: <span>{data.program} </span><br /></p>}
                {data.year && <p class="about">Year: <span>{data.year} </span><br /></p>}
                {data.rollno && <p class="about">Roll No: <span>{data.rollno} </span><br /></p>}
                {data.skills && <p class="about">Skills: <span>{data.skills && data.skills.map((items) => (<><span>{items.value}</span><span> , </span> </>))} </span><br /></p>}
                {data.areaofinterest && <p class="about">Area of Interest : <span>{data.areaofinterest && data.areaofinterest.split(': ').map((items) => (<><span>{items}</span><span> , </span> </>))} </span><br /></p>}


                <div>
                    <button className="msg-btn"onClick={handleShow}>Add More Detais</button>
                    <div>
                        {data.name === "" &&
                            <div style={{marginTop:"10px"}} class="preloader-wrapper active sell-loader">
                                <div class="spinner-layer spinner-white-only">
                                    <div class="circle-clipper left">
                                        <div class="circle"></div>
                                    </div><div class="gap-patch">
                                        <div class="circle"></div>
                                    </div><div class="circle-clipper right">
                                        <div class="circle"></div>
                                    </div>
                                </div>
                            </div>
                        }
                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add More Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group >
                                        <Form.Label>Roll No</Form.Label>
                                        <Form.Control type="number" value={pdata.rollno} placeholder="Enter Roll No" onChange={handleChange} name="rollno" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Profile Photo</Form.Label>
                                        <Form.Control type="file" placeholder="Enter Roll No" onChange={fileChange} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label>Starting Year</Form.Label>
                                        <Form.Control as="select" value={pdata.year} custom name="year" onChange={handleChange}>

                                            <option value="" disabled selected>Choose year</option>

                                            <option>2021</option>

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
                                        <Form.Control as="select" value={pdata.program} custom name="program" onChange={handleChange}>
                                            <option value="" disabled selected>Choose Program</option>
                                            <option>B. Tech </option>
                                            <option>M.Tech</option>
                                            <option>MCA</option>
                                            <option>MBA</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label>Branch</Form.Label>
                                        <Form.Control as="select" custom name="branch" value={pdata.branch} onChange={handleChange}>
                                            <option value="" disabled selected>Choose Branch</option>
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
                                        <Select options={skillsSet} isMulti name="skills" value={pdata.skills} onChange={handleChangeSkills} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Area of Interest</Form.Label>
                                        <Form.Control type="text" placeholder="Seperated by :" value={pdata.areaofinterest} onChange={handleChange} name="areaofinterest" />

                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                {inputError && <h5>Fill All details</h5>}
                                {loader&&
                                    <>
                                    <div class="preloader-wrapper small active sell-loader">
                                        <div class="spinner-layer spinner-green-only">
                                            <div class="circle-clipper left">
                                                <div class="circle"></div>
                                            </div><div class="gap-patch">
                                                <div class="circle"></div>
                                            </div><div class="circle-clipper right">
                                                <div class="circle"></div>
                                            </div>
                                        </div>
                                    </div>
    
                                </>
                                }
                                <Button variant="secondary" style={{marginRight:"8px"}} className="red darken-2" onClick={handleClose}>
                                    Close
                        </Button>
                                <Button variant="primary" disabled={inputError} onClick={onSubmit}>
                                    Submit
                        </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <br />
                <h3>Selling Products</h3><br />
                {products.length === 0 &&  <><h4>No Product in Selling list</h4><br /></> }
               
                {
                    
                    products.map((product, i) => {
                        
                        if(product.isshow === "T"){
                            
                            return (
                                <button disabled key={i} class="follow-btn">
                                    <div>
                                        <h5>{product.pname}</h5>
                                        <h6>{product.desc}</h6>
                                        <h5>{product.price}</h5>
                                    </div>
                                    {loader ? (
                                        <button  className="white-text waves-effect waves-light  btn  pink darken-2 btn">Loading</button>
                                    ): (
                                        <button onClick={() => delete_Product(product.p_id)} className="white-text waves-effect waves-light  btn  pink darken-2 btn">Delete</button>
                                    )

                                    }
                                    
                                </button>
    
                            )
                        }
                        
                    })
                    
                }


            </div>
        </div></>
    )
}

export default Profile

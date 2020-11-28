import React, { useState, useEffect } from 'react'
import "./mentor.css";
import {Redirect} from 'react-router-dom';
import Header from "../util/Header"
import { Autocomplete, Icon } from 'react-materialize'
import axios from 'axios'
import { BASE, IMAGE_URL } from "../../config.json"
const Mentor = () => {
	const [filter, SetFilter] = useState("name");
	const [mentors, Setmentors] = useState([]);
	const [allmentors, SetAllmentors] = useState([]);
	const [originalmentors, SetOriginalmentors] = useState([]);
	const [search, setSearch] = useState("");
	const [error, setError] = useState(0);

	useEffect(() => {
		const getmentors = async () => {

			try {
				const res = await axios({
					url: BASE + `/user/addmentor/`,
					method: "GET",
					headers: {
						Authorization: `Bearer ${localStorage.FBIdToken}`
					}
				});
				//Setmentors(res.data.result);
				SetOriginalmentors(res.data.result);
				const mentors = res.data.result.filter(result => {
					if(result.branch!=="")
					{result.skills = result.skills.split(":")
					result.areaofinterest = result.areaofinterest.split(":")
					return result;
				}
				})
				console.log(mentors)
				SetOriginalmentors(mentors)
				SetAllmentors(mentors)
			}
			catch (err) {
				if (err.response.status === 401) {
                    setError(1);
                }else{
					setError(0);
				}
				console.log(err)
			}
		}
		getmentors();
	}, []);
	if (error === 1) {
        return (<Redirect to='/logout' />);
    }
	const changeMentorlist = async (e) => {
		await setSearch(e.target.value)
		if (filter !== "") {
			const res = originalmentors.filter(mentor => {
				if (filter === "year" || filter === "branch" ||filter === "name") {
					if (mentor[filter].toLowerCase().includes(e.target.value.toLowerCase()) && mentor[filter] !== "")
						return mentor
				}
				else {
					var val = false;
					for (var i = 0; i < mentor[filter].length; i++)
						if (mentor[filter][i].toLowerCase().includes(e.target.value.toLowerCase())) {
							val = true;
							break;
						}
					if (val)
						return mentor
				}
			})
			Setmentors(res)

		}
		else{
			const res = originalmentors.filter(mentor => {
					if (mentor['name'].toLowerCase().includes(e.target.value.toLowerCase()) && mentor['name'] !== "")
						return mentor
			})
			Setmentors(res)

		}
	}
	return (
		<>
			<Header />
			<div className="mentor-background">
				<div className="container ">
					<div className="row">
						<div className="col s12 m12 center-align">
							<div className="input-field search-area">
								<i className="material-icons prefix">search</i>
								<input id="search-product" type="text" className="validate white-text" onChange={(e) => { changeMentorlist(e); }} />
								<label htmlFor="search-product">Search</label>
							</div>
							<div className="mentorfilter center-align">
								<select value={filter} onChange={async (e) => { await SetFilter(e.target.value) }}>
									<option value="" disabled selected>Filter</option>
									<option value="name">Name</option>
									<option value="year">Batch Year</option>
									<option value="branch">Branch</option>
									<option value="skills">Skill</option>
									<option value="areaofinterest">Area of interest</option>
								</select>
							</div>
						</div>
					</div>

					<div className="row">
						{
							mentors.length > 0 && search !== "" && <h2 style={{ margin: "auto", color: "white" }}>Searched Mentors</h2>
						}
						{
							mentors.length === 0 && search !== "" &&<> 
							<h3 style={{ margin: "auto", color: "white" }}>No search found</h3></>
						}
					</div>
					<div className="row">
						{search !== "" &&
							mentors.map(mentor => {
								return (


									<div className="card-container">
										{
											<img className="round" src={`${IMAGE_URL}${mentor.image}`} alt="user" />
										}
										<h3>{mentor.name}</h3>
										<h6>{mentor.branch}</h6>
										<p>{mentor.year}</p>
										<div className="buttons">
											<a href={`mailto:${mentor.email}`} className="primary">
												Email
		</a>

										</div>
										<div className="skills">
											<h6>Skills</h6>
											<ul>
												{
													mentor.skills.map(skill => {
														return (
															<li>{skill}</li>
														)
													})
												}
											</ul>
										</div>
										<div className="skills">
											<h6>Area of Interest</h6>
											<ul>{
												mentor.areaofinterest.map(interest => {
													return (
														<li>{interest}</li>
													)
												})
											}
											</ul>
										</div>
									</div>
								)
							})
						}  </div>
					<div className="row">
						{
							allmentors.length > 0 && <h2 style={{ margin: "auto", color: "white" }}>All Mentors</h2>
						}
					</div>
					<div className="row">

						{
							allmentors.length === 0 && <>
								<div className="preloader-wrapper small active sell-loader">
									<div className="spinner-layer spinner-green-only">
										<div className="circle-clipper left">
											<div className="circle"></div>
										</div><div className="gap-patch">
											<div className="circle"></div>
										</div><div className="circle-clipper right">
											<div className="circle"></div>
										</div>
									</div>
								</div>

							</>
						}

						{
							allmentors.map(mentor => {
								return (


									<div className="card-container">
										<img className="round" src={`${IMAGE_URL}${mentor.image}`} alt="user" />
										<h3>{mentor.name}</h3>
										<h6>{mentor.branch}</h6>
										<p>{mentor.year}</p>
										<div className="buttons">
											<a href={`mailto:${mentor.email}`} className="primary">
												Email
		</a>

										</div>
										<div className="skills">
											<h6>Skills</h6>
											<ul>
												{
													mentor.skills.map(skill => {
														return (
															<li>{skill}</li>
														)
													})
												}
											</ul>
										</div>
										<div className="aoi">
											<h6>Area of Interest</h6>
											<ul>{
												mentor.areaofinterest.map(interest => {
													return (
														<li>{interest}</li>
													)
												})
											}
											</ul>
										</div>
									</div>
								)
							})
						} </div>

				</div>
			</div>
		</>
	)
}

export default Mentor;
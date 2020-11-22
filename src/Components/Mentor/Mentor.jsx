import React, { useState, useEffect } from 'react'
import "./mentor.css"
import Header from "../util/Header"
import { Autocomplete, Icon } from 'react-materialize'
import axios from 'axios'
import { BASE, IMAGE_URL } from "../../config.json"
const Mentor = () => {
	const [filter, SetFilter] = useState("");
	const [mentors, Setmentors] = useState([]);
	const [allmentors, SetAllmentors] = useState([]);
	const [originalmentors, SetOriginalmentors] = useState([]);
	const [search, setSearch] = useState("");

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
				const mentors = res.data.result.map(result => {
					result.skills = result.skills.split(":")
					result.areaofinterest = result.areaofinterest.split(":")
					return result;
				})
				console.log(mentors)
				SetOriginalmentors(mentors)
				SetAllmentors(mentors)
			}
			catch (err) {
				console.log(err)
			}
		}
		getmentors();
	}, [])
	const changeMentorlist = async (e)=>{
		await setSearch(e.target.value)
		if(filter!="")
		{
			const res = originalmentors.filter(mentor=>{
				if(filter=="year"||filter=="branch")
					{if(mentor[filter].toLowerCase().includes(e.target.value.toLowerCase())&&mentor[filter]!="")
					return mentor}
				else
				{
					var val=false;
					for(var i=0;i<mentor[filter].length;i++)
					if(mentor[filter][i].toLowerCase().includes(e.target.value.toLowerCase()))
					{
						val=true;
						break;
					}
					if(val)
					return mentor
						
				}	
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
							<div class="input-field search-area">
								<i class="material-icons prefix">search</i>
								<input id="search-product" type="text" class="validate white-text" onChange={(e)=>{ changeMentorlist(e);}} />
								<label for="search-product">Search</label>
							</div>
							<div class="mentorfilter center-align">
								<select value={filter} onChange={async (e) => {await SetFilter(e.target.value)}}>
									<option value="" disabled selected>Filter</option>
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
							mentors.length>0&&search!=""&&<h2 style={{margin:"auto",color:"white"}}>Searched Mentors</h2>
							}
						</div>
						<div className="row">
						{search!=""&&
						mentors.map(mentor => {
								return (


									<div class="card-container">
										<span class="pro">PRO</span>
										<img class="round" src={`${IMAGE_URL}${mentor.image}`} alt="user" />
										<h3>{mentor.name}</h3>
										<h6>{mentor.branch}</h6>
										<p>{mentor.year}</p>
										<div class="buttons">
											<a  href={`mailto:${mentor.email}`} class="primary">
												Email
		</a>
				
										</div>
										<div class="skills">
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
										<div class="skills">
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
							allmentors.length>0&&<h2 style={{margin:"auto",color:"white"}}>All Mentors</h2>
							}
						</div>
					<div className="row">
						
						

						{
							allmentors.map(mentor => {
								return (


									<div class="card-container">
										<span class="pro">PRO</span>
										<img class="round" src={`${IMAGE_URL}${mentor.image}`} alt="user" />
										<h3>{mentor.name}</h3>
										<h6>{mentor.branch}</h6>
										<p>{mentor.year}</p>
										<div class="buttons">
											<a href={`mailto:${mentor.email}`} class="primary">
												Email
		</a>
				
										</div>
										<div class="skills">
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
										<div class="skills">
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
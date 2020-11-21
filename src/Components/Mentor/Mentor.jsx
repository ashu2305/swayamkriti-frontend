import React, { useState } from 'react'
import "./mentor.css"
import Header from"./Header"
import {Autocomplete,Icon} from 'react-materialize'
const Mentor = () =>{
	const [filter,SetFilter] = useState("");
    return(
        <>
        <Header/>
        <div className="mentor-background">
        <div className="container ">
		<div className="row">
			<div className="col s12 m8">
			<Autocomplete
  icon={<Icon className="black-text">search</Icon>}
  id="Autocomplete-1"
  options={{
    data: {
      'Gus Fring': null,
      'Saul Goodman': null,
      'Tuco Salamanca': 'https://placehold.it/250x250'
    }
  }}
  placeholder="Search"
  style={{color:"white"}}
  className=" center-align"
  onChange={(e)=>{console.log(e.target.value)}}
/>
<div class="filter center-align">
    <select value={filter} onChange={(e)=>{SetFilter(e.target.value);console.log(filter)}}>
      <option value="" disabled selected>Filter</option>
      <option value="year">Year</option>
      <option value="branch">Branch</option>
      <option value="skill">Skill</option>
      <option value="aoi">Area of interest</option>
    </select>
  </div>
				</div>			
				</div>
            <div className="row">
<div class="card-container">
	<span class="pro">PRO</span>
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>{'{Name}'}</h3>
	<h6>{'{Branch}'}</h6>
	<p>{'{Year}'}</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
    <div class="skills">
		<h6>Area of Interest</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>
<div class="card-container">
	<span class="pro">PRO</span>
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>{'{Name}'}</h3>
	<h6>{'{Branch}'}</h6>
	<p>{'{Year}'}</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
    <div class="skills">
		<h6>Area of Interest</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>
<div class="card-container">
	<span class="pro">PRO</span>
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>{'{Name}'}</h3>
	<h6>{'{Branch}'}</h6>
	<p>{'{Year}'}</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
    <div class="skills">
		<h6>Area of Interest</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>
<div class="card-container">
	<span class="pro">PRO</span>
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>{'{Name}'}</h3>
	<h6>{'{Branch}'}</h6>
	<p>{'{Year}'}</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
    <div class="skills">
		<h6>Area of Interest</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>

            </div>
        </div>
        </div>
        </>
    )
}

export default Mentor;
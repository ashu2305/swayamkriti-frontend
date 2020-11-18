import React from 'react'
import "./sell.css"
import Header from "./Header"
import "./Header.css"
import {Autocomplete,Icon,Modal,Button} from "react-materialize"
const BuynSell = () => {
	return (
		<>
			<Header />

			<div className="sell-background">
				<div className="container ">
					<div className="row">
						<div className="col s6 m12 center-align">
					<Autocomplete
        icon={<Icon>search</Icon>}
        id="Autocomplete-1"
        options={{
          data: {
            'Gus Fring': null,
            'Saul Goodman': null,
            'Tuco Salamanca': 'https://placehold.it/250x250'
          }
        }}
        placeholder="Search"
        style={{ color: "white",display:"inline-block" }}

      />
      <div class="filterSell">
        <select>
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
						<div className="col s12 m12  center-align">
					<Modal
          actions={[
            <Button flat modal="close" node="button" waves="green">Close</Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Sell Here"
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
          className="modal-box"
          trigger={<Button className="white-text waves-effect waves-light header-btn btn modal-trigger" node="button">Sell</Button>}
        >
          <div class="input-field">
            <input id="name" type="text" class="validate" />
            <label for="name">Name</label>
          </div>
          <div class="input-field">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Description</label>
          </div>

          <div class="input-field">
            <input id="price" type="text" class="validate" />
            <label for="price">Price</label>
          </div>
          <div class="file-field input-field">
            <div class="btn">
              <span>Image</span>
              <input type="file" />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>
        </Modal>
		</div>

					</div>
					<div className="row">
						<div class="card-container">
							<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
							<h3>{'{Object Name}'}</h3>
							<h5>₹{'{Price}'}</h5>
							<div class="buttons">
								<button class="primary">
									Buy
								</button>
							</div>
							<div class="skills">
								<h6>Description</h6>
								<p>{'{Description}'}</p>
							</div>
						</div>
						<div class="card-container">
							<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
							<h3>{'{Object Name}'}</h3>
							<h5>₹{'{Price}'}</h5>
							<div class="buttons">
								<button class="primary">
									Buy
								</button>
							</div>
							<div class="skills">
								<h6>Description</h6>
								<p>{'{Description}'}</p>
							</div>
						</div>
						<div class="card-container">
							<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
							<h3>{'{Object Name}'}</h3>
							<h5>₹{'{Price}'}</h5>
							<div class="buttons">
								<button class="primary">
									Buy
								</button>
							</div>
							<div class="skills">
								<h6>Description</h6>
								<p>{'{Description}'}</p>
							</div>
						</div>
						<div class="card-container">
							<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
							<h3>{'{Object Name}'}</h3>
							<h5>₹{'{Price}'}</h5>
							<div class="buttons">
								<button class="primary">
									Buy
								</button>
							</div>
							<div class="skills">
								<h6>Description</h6>
								<p>{'{Description}'}</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</>
	)
}

export default BuynSell;
import React from 'react'
import "./sell.css"
import Header from "./Header"
const BuynSell = () => {
	return (
		<>
			<Header />

			<div className="sell-background">
				<div className="container ">
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
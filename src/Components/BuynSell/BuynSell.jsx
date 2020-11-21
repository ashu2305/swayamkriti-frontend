import React, { useEffect,useState } from 'react'
import "./sell.css"
import Header from "./Header"
import "./Header.css"
import { Autocomplete, Icon, Modal, Button,TextInput } from "react-materialize"
import axios from 'axios'
import { BASE, IMAGE_URL } from "../../config.json"
const BuynSell = () => {
	const [products, SetProducts] = useState([]);
	const [originalproducts, SetOriginalProducts] = useState([])
	const [data,setData] = useState({
		pname:"",
		desc:"",
		prize:"",
		pimage:'kcn2vbzm3c6lrqxliaw3'
	})
	useEffect(() => {
		const getProducts = async () => {

			try {
				const res = await axios({
					url: BASE + `/user/buysell/`,
					method: "GET",
					headers: {
						Authorization: `Bearer ${localStorage.FBIdToken}`
					}
				});
				SetProducts(res.data.result);
				SetOriginalProducts(res.data.result);
			}
			catch (err) {
				console.log(err)
			}
		}
		getProducts();
	}, [])

	const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
		});
		console.log(data)
	};
	const fileChange = e => {
		let filex = e.target.files[0]
		console.log(filex)
        setData({
            ...data,
            pimage : filex
		});
    };
	const submit = async () => {
        try {
			const formData = new FormData();
			formData.append('name',data.pname);
			formData.append('desc',data.desc);
			formData.append('isshow','T');
			formData.append('image',data.pimage);
			formData.append('prize',data.prize);
			const result = await axios({
                url: `${BASE}/user/buysell/`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.FBIdToken}`
                },
                data: formData
			});
			console.log(result);
		}catch(err){
			console.log(err)
		}
	}
	const changeProductlist= async(e) =>
	{
		const value = e.target.value;
		if(value=="")
		SetProducts(products);
		const res = await originalproducts.filter(item=>{
			if(item.pname.toLowerCase().startsWith(value.toLowerCase()))
			return item
		})
		
		SetProducts(res)
	}
	
	return (
		<>
			<Header />

			<div className="sell-background">
				<div className="container ">
					<div className="row">
						<div className="col s12 m12 center-align">
						<div class="input-field search-area">
						<i class="material-icons prefix">search</i>
          <input id="search-product" type="text" class="validate white-text" onChange={(e)=>{changeProductlist(e)}}/>
          <label for="search-product">Search</label>
        </div>

							<Modal
								actions={[
									<Button node="button" waves="green" onClick={submit}>Submit</Button>,
									<Button flat modal="close" node="button" waves="red">Close</Button>
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
									<input id="name" type="text" class="validate" name="pname"  onChange={handleChange} />
									<label for="name">Name</label>
								</div>
								<div class="input-field">
									<textarea id="desc" class="materialize-textarea" name="desc" onChange={handleChange}></textarea>
									<label for="desc">Description</label>
								</div>

								<div class="input-field">
									<input id="price" type="text" class="validate" name="prize"  onChange={handleChange}/>
									<label for="price">Price</label>
								</div>
								<div class="file-field input-field">
									<div class="btn">
										<span>Image</span>
										<input type="file"  name="pimage" onChange ={fileChange}/>
									</div>
									<div class="file-path-wrapper">
										<input class="file-path validate" type="text" />
									</div>
								</div>
							</Modal>
						</div>

					</div>
					<div className="row">
						{
							products.map(item => {
								if (item.isshow == "T") {
									return (
										<div class="card cardSell">
											<div class="card-image sellImage">
												<img src={`${IMAGE_URL}${item.image}`} />

											</div>
											<div class="card-content white-text">
												<span class="card-title">{item.pname}</span>
												<p>{item.desc}</p>
												<h6>₹{item.price}</h6>
											</div>
											<div class="card-action">
												<button href="#" className="waves-effect waves-light btn">BUY</button>
											</div>
										</div>

									)
								}
							})
						}

					</div>
				</div>
			</div>
		</>
	)
}

export default BuynSell;
import axios from 'axios';
import React, { useState } from 'react';
import base_url from './Services/Baseurl';
import { NavLink } from 'react-router-dom';


function Sell() {

    const [namee, setNamee] = useState("");
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("");




    const addregdata = (e) => {
        e.preventDefault();
        console.log(e)
        // const ms = localStorage.getItem("loggedcustomer");

        console.log("ms .c.cid2 is");


        //using settimout

        // const msobj = JSON.parse(localStorage.getItem("loggedcustomer"))
        // const finame = msobj.cid;
        // const lname = msobj.lname;
        // console.log(finame);

        // setNamee({ ...namee, ccid: finame });
        // console.log("namee is");
        // console.log(namee);


        // setTimeout( ()=>{
        //     setNamee({ ...namee, ccid: finame });
        //     console.log("namee is");
        //     console.log(namee);
        // },1000);


        // setTimeout( ()=>{

        //     postdatatoserver(namee);
        // },6000);



        //using callback

        // const tp = (tp2)=>{
        //     setNamee({...namee, ccid: finame });
        //         console.log(" through callback namee is");
        //         console.log(namee);
        //         tp2();
        // }

        // const tp2 = ()=>{
        //     postdatatoserver(namee);
        // }

        // console.log("calling tp");
        // tp(tp2);


        //using async await


        async function tp() {

            console.log("before await function")

            const msobj = JSON.parse(localStorage.getItem("loggedcustomer"))
            const finame = msobj.cid;

            console.log(finame);
            await setNamee({...namee, ccid: finame });
            console.log(" before async await namee is");
            console.log(namee);

            await postdatatoserver(namee);
            console.log("after await")
        }

        tp();



    }


    const postdatatoserver = (nam) => {
        axios.post(`${base_url}/sell`, nam).then(
            (response) => {
                console.log(response);
                console.log("successful upto here ")
            },
            (error) => {
                console.log("error aali");
            }

        )
    }






    //for image
    const uploadimage = async (e) => {
        //trial

        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append('upload_preset', 'preownedcar')

        setLoading(true)

        const res = await fetch("https://api.cloudinary.com/v1_1/ketan4747/image/upload",
            {
                method: 'POST',
                body: data
            })

        const file = await res.json()

        console.log(file)



        // to show img

        let a = file.secure_url;

        console.log(a);
        console.log(typeof (a));

        setImage(a);
        setNamee({ ...namee, photo: a });
        console.log("he bg")
        console.log(namee.photo)
        setLoading(false)
    }


    return (
        <>

            <>
                <div className="my-5">
                    <h1 className="text-center">
                        For Selling
                    </h1>
                </div>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto ">
                            <form class="row g-3 needs-validation" novalidate
                                onSubmit={addregdata}
                            >
                                <div class="col-md-4 position-relative">
                                    <label for="company" class="form-label">Car Company</label>
                                    <input type="text" class="form-control" id="company" required
                                        placeholder="Enter Car Company"
                                        onChange={(e) => {
                                            setNamee({ ...namee, carCompany: e.target.value });
                                        }}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="model" class="form-label"> Car Model </label>
                                    <input type="text" class="form-control" id="model" required
                                        placeholder="Enter Car Model"
                                        onChange={(e) => {
                                            setNamee({ ...namee, carModel: e.target.value });
                                        }}
                                    />


                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="color" class="form-label">Color</label>
                                    <select class="form-select" id="color" required
                                        onChange={(e) => {
                                            setNamee({ ...namee, color: e.target.value });
                                        }}
                                    >
                                        <option selected disabled value="">Choose...</option>
                                        <option value="White">White</option>
                                        <option value="Black">Black</option>
                                        <option value="Gray">Gray</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Red">Red</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Brown">Brown</option>
                                        <option value="Green">Green</option>
                                        <option value="Beige">Beige</option>
                                        <option value="Orange">Orange</option>
                                        <option value="Yellow">Yellow</option>
                                        <option value="Gold">Gold</option>
                                        <option value="Purple">Purple</option>

                                    </select>

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="purchase_date" class="form-label">Purchase Date</label>
                                    <input type="date" class="form-control" name="dob"
                                        required
                                        onChange={(e) => {
                                            setNamee({ ...namee, purchaseDate: e.target.value });
                                        }}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="owners" class="form-label">No of Owners</label>
                                    <input type="number" class="form-control" id="owners" required
                                        placeholder="No of Owners"
                                        onChange={(e) => {
                                            setNamee({ ...namee, owners: e.target.value });
                                        }}

                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="runnuing" class="form-label">KM Driven</label>
                                    <input type="number" class="form-control" id="runnuing"
                                        placeholder="Enter Total Running"
                                        onChange={(e) => {
                                            setNamee({ ...namee, totalRunning: e.target.value });
                                        }}

                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="regno" class="form-label">Registration No</label>
                                    <input type="number" class="form-control" id="regno"
                                        required placeholder="Reg No Of Car"
                                        onChange={(e) => {
                                            setNamee({ ...namee, regno: e.target.value });
                                        }}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="price" class="form-label">Price</label>
                                    <input type="number" class="form-control" id="price" required
                                        placeholder="Price of Car"
                                        onChange={(e) => {
                                            setNamee({ ...namee, price: e.target.value });
                                        }}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="city" class="form-label">City</label>
                                    <input type="text" class="form-control" id="city" required
                                        placeholder="Enter City Name"
                                        onChange={(e) => {
                                            setNamee({ ...namee, city: e.target.value });
                                        }}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="state" class="form-label">State</label>
                                    <select class="form-select" id="state"
                                        required
                                        onChange={(e) => {
                                            setNamee({ ...namee, state: e.target.value });
                                        }}

                                    >
                                        <option selected disabled value="">Choose...</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="pin" class="form-label">Pin No</label>
                                    <input type="number" class="form-control" id="pin" required
                                        placeholder="Pin No Of City"
                                        onChange={(e) => {
                                            setNamee({ ...namee, pinNo: e.target.value });
                                        }}
                                    />

                                </div>


                                <div class="col-mb-4 ">
                                    <label for="photo" className="form-label">Photo</label>
                                    <input type="file" className="form-control" id="photo"
                                        //   value={selectedFile}
                                        onChange={uploadimage}
                                    />

                                </div>


                                <div class="col-6">
                                    {/* namrata */}
                                    {/* <NavLink to=" " className="btn btn-dark btn-md btn-block">Sumbit</NavLink> */}

                                    <button type="submit" className="btn btn-dark btn-lg btn-block">Submit form</button>
                                </div>


                                <div class="col-6">
                                    <NavLink to="/" className="btn btn-dark btn-md btn-block">Back to Home</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </>











            {/* to display */}
            {
                loading ? (
                    <h3>Loading...</h3>

                ) : (<img src={image} style={{ width: '300px' }}></img>)

            }



        </>
    )
}

export default Sell;
import React from 'react';


const Forbuy = () => {

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    For buy
                </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto ">
                        <form >
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Enter  Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name.." />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Car Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Car name.." />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Enter Your State </label>

                                <select name="state" id="exampleFormControlInput1">
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Banglore">Banglore</option>
                                    <option value="Up">Up</option>
                                    <option value="Mp">Mp</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Enter Your city </label>

                                <select name="state" id="exampleFormControlInput1">
                                    <option value="pune">Pune</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="beed">Beed</option>
                                    <option value="nagpur">Nagpur</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Forbuy;
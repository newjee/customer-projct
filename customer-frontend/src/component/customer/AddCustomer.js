import React, { useState } from 'react'
import { Link, useNavigate, } from "react-router-dom";
import axios from "axios";

const AddCustomer = () => {
  let navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: ''
  })

  const { name, email, address, phoneNumber } = customer;

  const handleInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });

  }

  const saveCustomer = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:9192/customers", customer);
    navigate("/view-customers")
  }

  return (
    <div className="col-sm-8 py-5 px-5 offset-2 shadow ">
      <h2 className="mt-5"> Add Customer </h2>
      <form onSubmit={(e) => saveCustomer(e)}>

        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="name">
            Name
          </label>
          <input
            className="form-control col-sm-6"
            type='text'
            name="name"
            id="name"
            requied
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type='text'
            name="email"
            id="email"
            requied
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="address">
            Address
          </label>
          <input
            className="form-control col-sm-6"
            type='text'
            name="address"
            id="address"
            requied
            value={address}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="phoneNumber">
            PhoneNumber
          </label>
          <input
            className="form-control col-sm-6"
            type='text'
            name="phoneNumber"
            id="phoneNumber"
            requied
            value={phoneNumber}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="col-sm-2">
          <button
            type="submit"
            className="btn btn-outline-success brn-lg">
            Save
          </button>
        </div>
        
        <div className="col-sm-2">
          <Link to="/view-customers"
            type="submit"
            className="btn btn-outline-warning brn-lg">
            Cancel
          </Link>
        </div>
      </form >

    </div >
  )
}

export default AddCustomer
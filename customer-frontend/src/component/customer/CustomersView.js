import React, { useEffect, useState } from 'react';
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiUserSearchLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomersView = () => {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const result = await axios.get("http://localhost:9192/customers", {
      validateStatus: () => {
        return true;
      }
    });
    if (result.status === 302) {
      setCustomers(result.data)
    }
  }

  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {customers.map((customer, index) => (

            <tr key={customer.id}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customer.phoneNumber}</td>

              <td className="mx-2">
                <Link to={`/view-customer/${customer.id}`}
                    className="btn btn-info">
                  <RiUserSearchLine />
                </Link>
              </td> 
              <td className="mx-2">
                <Link to={`/edit-customer/${customer.id}`}
                  className="btn btn-warning">
                  <FaRegEdit />
                </Link
                >
              </td>
              <td className="mx-2">
                <button className="btn btn-danger">
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>

          ))}



        </tbody>
      </table>

    </section>
  )
}

export default CustomersView

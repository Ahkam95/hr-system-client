import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {API_URL} from '../config/config'

function Home() {
  const [adminDetails, setAdminDetails] = useState([])
  const [employeeCount, setEmployeeCount] = useState()
  const [salary, setSalary] = useState()


  useEffect(() => {
    axios.get(`${API_URL}/adminDetails`)
		.then(res => {
			setAdminDetails(res.data)
		}).catch(err => console.log(err));

    axios.get(`${API_URL}/employeeCount`)
		.then(res => {
			setEmployeeCount(res.data[0].employee)
		}).catch(err => console.log(err));

    axios.get(`${API_URL}/salary`)
		.then(res => {
			setSalary(res.data[0].sumOfSalary)
		}).catch(err => console.log(err));

  } , [])
  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Admin</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {adminDetails.length}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employee</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {employeeCount}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employees Salary</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {salary}</h5>
          </div>
        </div>
      </div>

      <div className='mt-4 px-5 pt-3'>
          <h3>List of Admins</h3>
          <table className='table'>
            <thead>
              <tr>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {adminDetails.map((adminData) => {
                return <tr>
                  <td>{adminData.email}</td>
                  <td> <a href="#" title="This feature is not implemented yet">Edit</a></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Home
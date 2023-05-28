import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, useParams } from 'react-router-dom'
import {API_URL} from '../config/config'

const EmployeeDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [employee, setEmployee] = useState([])
    useEffect(async ()=> {
        axios.get(`${API_URL}/get/`+id, {headers: {
			token: await Cookies.get('token')
		}})
        .then(res => {
            if(res.data.Status === "Success") {
				setEmployee(res.data.Result[0])
			} else {
				navigate('/start')
			}
        }).catch(err => console.log(err));
    }, [])
    const handleLogout = () => {
		axios.get(`${API_URL}/logout`)
		.then(res => {
			navigate('/start')
            Cookies.remove('token')
		}).catch(err => console.log(err));
	}
  return (
    <div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
            <img src={'/Images/user.jpg'} alt="" className='empImg'/>
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>Name: {employee.name}</h3>
                <h3>Email: {employee.email}</h3>
                <h3>Salary: {employee.salary}</h3>
            </div>
            <div>
                <button className='btn btn-primary me-2'>Edit</button>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDetail
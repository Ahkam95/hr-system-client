import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Page/Dashboard';
import Login from './Page/Login'
import Employee from './Page/Employee'
import Profile from './Page/Profile'
import Home from './Page/Home'
import AddEmployee from './Page/AddEmployee'
import EditEmployee from './Page/EditEmployee'
import Start from './Page/Start'
import EmployeeDetail from './Page/EmployeeDetail'
import EmployeeLogin from './Page/EmployeeLogin'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/create' element={<AddEmployee />}></Route>
        <Route path='/employeeEdit/:id' element={<EditEmployee />}></Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/start' element={<Start />}></Route>
      <Route path='/employeeLogin' element={<EmployeeLogin />}></Route>
      <Route path='/employeedetail/:id' element={<EmployeeDetail />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

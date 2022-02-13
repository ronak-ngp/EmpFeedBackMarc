import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import './employeeinfo.css'
import { addNameToState } from '../redux/actions';
const EmployeeInfo = () => {
    const [nameState,setNameState] = useState({
        name:""
    });

    const handleInputChange = (e) => {
        let {name,value} = e.target;
        setNameState({...nameState,[name]:value});
    }

    const {name} = nameState;
    const [navigate,disptach] = [useNavigate(),useDispatch()];

    const handleSubmit = (e) => {
        e.preventDefault();
            disptach(addNameToState(nameState.name));
            navigate("/employeeFeedBack");
    }
  return (
    <div className="justify-content-center align-items-center container">
    <div className="card py-20 px-25">
    <div className='mx-5'><h2>Squad health check - Step 1</h2></div>  
    <div className="mb-3 mx-5 my-20">
    <div className="row">
        <form onSubmit={handleSubmit}>
    <div className='col'>
  <label htmlFor="name" className="form-label">What's your name?</label>
  </div>
  <div className='col'>
  <input type="text" name="name" value={name} maxLength={30} onChange={handleInputChange} className="form-control" id="name" />
  </div>
  <button type="Submit" className="btn btn-primary my-2">Next</button>
  </form>
  </div>
  </div>
  </div>
</div>

  )
}

export default EmployeeInfo
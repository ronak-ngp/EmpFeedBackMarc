import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { addFeedBackEmployee, loadFeedBackTypes } from '../redux/actions';

const EmployeeFeedBack = () => {
    const [navigate,dispatch] = [useNavigate(),useDispatch()];

    useEffect(() => {
        dispatch(loadFeedBackTypes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const {FeedBackTypes,name} = useSelector(state => state.data);

    const [feedbackState,setFeedBackState] = useState([]);

    useEffect(() => {
      if (FeedBackTypes.Feedbacks) {
        setFeedBackState( FeedBackTypes.Feedbacks.map(elem => (
          {
            FeedBack: elem.val,
            green: false,
            orange:false,
            red:false,
            comment:""
          } )));
      }
    }, [FeedBackTypes.Feedbacks, setFeedBackState]);

    const handleChange = (e, feedBackType) => {
      let result = [...feedbackState]; 
    
      result = result.map((x) => { 
        if (x.FeedBack === feedBackType) {
          x[e.target.name] = e.target.checked
          if(e.target.name === "green") { x["orange"] = false; x["red"] = false  }
          if(e.target.name === "orange") { x["green"] = false; x["red"] = false  }
          if(e.target.name === "red") { x["orange"] = false; x["green"] = false  }
          if(e.target.name === "comment") { x[e.target.name] = e.target.value}
        };
        return x;
      });
      setFeedBackState(result); 
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const feedBackStateName = {name,FeedBacks:[...feedbackState]};
      dispatch(addFeedBackEmployee(feedBackStateName));
      navigate(`/feedbacksummary`);
  }

  return (
    <div className="d-flex justify-content-center align-items-center container">
    <div className="card py-20 px-25">
    <div className='mx-5'><h2>Squad health check - Step 2</h2></div>  
        <form onSubmit={handleSubmit} >
        <div className="container">
  <div  className="row mx-3">
    <div className="col w-25">
    </div>
    <div className="col w-25 bg-success text-white mx-2">
      Green
    </div>
    <div className="col w-25 bg-warning text-dark mx-2">
      Orange
    </div>
    <div className="col w-25 bg-danger text-white mx-2">
      Red
    </div>
    <div className="col w-25 mx-2">
      
    </div>
  </div>
  {feedbackState.map((employeeArray,index) => {
    return (  <div key={index} className='row my-2 mx-3'>
      <div className='col w-25'>
      {employeeArray.FeedBack}
      </div>
      <div className="col w-25 mx-2 checkbox  checkbox-circle">
      <input className="form-check-input" type="checkbox" name="green" id="green" checked={employeeArray.green} onChange={(e) => handleChange(e, employeeArray.FeedBack)}/> 
      
    </div>
    <div className="col w-25  mx-2 checkbox  checkbox-circle">
    <input className="form-check-input" type="checkbox" name="orange" id="orange" checked={employeeArray.orange} onChange={(e) => handleChange(e, employeeArray.FeedBack)}/> 
    
    </div>
    <div className="col w-25   mx-2 checkbox  checkbox-circle">
    <input className="form-check-input" type="checkbox" name="red" id="red" checked={employeeArray.red} onChange={(e) => handleChange(e, employeeArray.FeedBack)}/> 
    </div>
    <div className='col w-25 mx-2'>
    <textarea id="comment" name="comment" type="number" value={employeeArray.comment} onChange={(e) => handleChange(e,employeeArray.FeedBack)}  rows="2"></textarea>
    </div>
  </div>)
  })}
  <button type="Submit" className="btn btn-primary">Submit</button>
  </div>
  </form>
  </div>
  </div>
  )
}

export default EmployeeFeedBack
import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { getFeedBack } from '../redux/actions';

const FeedBackSummary = () => {
    const dispatch = useDispatch();
    const {Employees} = useSelector(state => state.data);
    let {id} = useParams();
    const [feedbackEmpState,setFeedBackEmpState] = useState([]);
    
    useEffect(() => {
       dispatch(getFeedBack(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    useEffect(() => {
        if (Employees[2]) {
            setFeedBackEmpState([...Employees[2]].sort((a,b) => a.orange - b.orange).sort((a,b) => a.red - b.red).sort((a, b) => b.green - a.green) );
        }
      }, [Employees[2], setFeedBackEmpState]);

  return (
    <div className="d-flex justify-content-center align-items-center container">
    <div className="card py-20 px-25">
    <div className='mx-5'><h2>Squad health check - Step 2</h2></div>  
    
    
        <form  >
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
  {feedbackEmpState.map((feedback,index) => {
    return (  <div key={index} className='row my-2 mx-3'>
      <div className='col w-25'>
      {feedback.FeedBack}
      </div>
      <div className="col w-25 mx-2">
      {feedback.green}
    </div>
    <div className="col w-25  mx-2">
    {feedback.orange}
    </div>
    <div className="col w-25   mx-2">
    {feedback.red}
    </div>
    <div className='col w-25 mx-2'>
    <input type="textarea" readOnly="readonly" value={feedback.comment}></input>
    </div>
  </div>)
  })}
</div>
  </form>
  </div>
  </div>
  )
}

export default FeedBackSummary
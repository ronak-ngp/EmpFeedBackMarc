import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector } from 'react-redux';
import { getFeedBack } from '../redux/actions';

const FeedBackSummary = () => {
    const dispatch = useDispatch();
    const {Employees} = useSelector(state => state.data);
    
    const [feedbackEmpState,setFeedBackEmpState] = useState([]);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        dispatch(getFeedBack());
      }, 1000);
  
      return () => clearTimeout(timer);
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(Employees);

    useEffect(() => {
        if (Employees) {
            setFeedBackEmpState([...Employees].sort((a,b) => a.orange - b.orange).sort((a,b) => a.red - b.red).sort((a, b) => b.green - a.green) );
        }
      }, [Employees, setFeedBackEmpState]);

      

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
      {feedback.feedback}
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
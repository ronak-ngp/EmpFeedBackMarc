import * as types from './actionTypes';
import axios from 'axios';

const getFeedBackTypes = (feedbacktypes) => ({
    type: types.GET_FEEDBACK_TYPE,
    payload: feedbacktypes,
});

const insertFeedBackEmployee = (feedbackresp) => ({
  type: types.ADD_FEEDBACK_EMPLOYEE,
  payload: feedbackresp
});

const fetchFeedBack = (fetchfeedbackresp) => ({
  type: types.FETCH_FEEDBACK,
  payload:fetchfeedbackresp
});

export const loadFeedBackTypes = () => {
    return async function(dispatch) {
      try{
        const resp = await axios.get(`${process.env.REACT_APP_API_FEEDBACK}`);
        console.log(resp.data);
        dispatch(getFeedBackTypes(resp.data));
      }catch(error){
        console.log(error);
      }
      
    }
}

export const addFeedBackEmployee = (Employees) => {
  return async function(dispatch) {
    try{
      console.log(Employees);
      const resp = await axios.post(`${process.env.REACT_APP_API}/addEmployeeFeedBack`,Employees);
      if(resp != null)
      {
          dispatch(insertFeedBackEmployee(resp));
      }
    }catch(error){
      console.log(error);
    }
    
  }
}

export const addNameToState = (name) => {
    return (dispatch) => {
        dispatch({
            type: types.ADD_NAME_TO_STATE,
            payload: name
        })
    }
}


export const getFeedBack = (id) => {
  return async function(dispatch) {
    try{
      const resp = await axios.get(`${process.env.REACT_APP_API}/fetchfeedback`);
      console.log(resp.data);
      dispatch(fetchFeedBack(resp.data));
    }catch(error){
      console.log(error);
    }
    
  }
}


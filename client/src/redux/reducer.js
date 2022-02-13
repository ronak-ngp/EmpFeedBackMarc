import * as types from './actionTypes';

const initialState = {
    Employees:[],
    name:{},
    FeedBackTypes:[],
    id:[]
}

const employeeReducer = (state = initialState,action) => {
    switch(action.type)
    {
        case types.ADD_NAME_TO_STATE:
            
            return {
                
                ...state,name:action.payload
            }
        case types.GET_FEEDBACK_TYPE:
            
            return {
                ...state,FeedBackTypes:action.payload
            }
        case types.ADD_FEEDBACK_EMPLOYEE:
                return {
                    ...state,
                }
        case types.FETCH_FEEDBACK:
                return {
                    ...state,Employees:action.payload
                }
        default:
            return state;
    }
}

export default employeeReducer;
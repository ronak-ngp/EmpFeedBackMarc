import './App.css';
import EmployeeInfo from './components/EmployeeInfo';
import {Routes,Route} from 'react-router-dom'
import EmployeeFeedBack from './components/EmployeeFeedBack';
import FeedBackSummary from './components/FeedBackSummary';
function App() {
  return (
    <Routes>
    <Route exact path='/' element={<EmployeeInfo></EmployeeInfo>}></Route>
    <Route exact path='/employeeFeedBack' element={<EmployeeFeedBack></EmployeeFeedBack>}></Route>
    <Route exact path='/feedbacksummary' element={<FeedBackSummary></FeedBackSummary>}></Route>
    </Routes>
  );
}

export default App;

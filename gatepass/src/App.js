import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getResidentDataAction } from './Actions/userType';
import './App.css';
import VisitorForm from './components/VisitorForm/VisitorForm';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
 
 
  let dispatch = useDispatch();

  const residentData = useSelector( ( state) => console.log(state.residentData.residentData));
   
     useEffect( () => {
 
              const getData =  async() => {
                const res =  await axios.get('http://localhost:3000/residentData');
                dispatch(getResidentDataAction(res.data));   
              }

              getData();

              
           
     } , [ residentData]);

  return (
    <div className="App">
          
        <BrowserRouter>
          <Routes>
                     <Route path='/' element={<VisitorForm />} />
                     <Route path='/resident/login' element= { <Login/>} /> 
          </Routes>
        </BrowserRouter>
             
             
    </div>
  );
}

export default App;

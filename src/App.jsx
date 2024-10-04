import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import Header from './components/Header';
import './App.css';
import Posts from './data/Post'
import ReadCreate from './components/ReadCreat';
import ErrorPage from './components/Errormsg';


function App() {


  return (


    <Router>
      <Header />
      <h1 style={{fontSize:'50px',padding:'0',margin:'0'}}>"The secret to getting ahead 
       is getting started."</h1>
      <div className='mainsec'>
        <div className='App'>

          <Routes>
            <Route path='/'  element={<ReadCreate/>}/>
            <Route path='/create'  element={<ReadCreate/>}/>
            <Route path='/Login'  element={<ReadCreate/>}/>
            <Route path='/Signup'  element={<ReadCreate/>}/>
            <Route path='/blog' element={<BlogList Posts={Posts} />} />
            <Route path='/post/:id' element={<BlogList Posts={Posts} />} />
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>


        </div>
        
      </div>
    </Router>
  )
}

export default App;

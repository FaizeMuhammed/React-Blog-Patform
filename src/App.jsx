import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import Header from './components/Header';
import './App.css';
import Posts from './data/Post'
import ReadCreate from './components/ReadCreat';


function App() {


  return (


    <Router>
      <Header />
      <div className='mainsec'>
        <div className='App'>

          <Routes>
            <Route path='/'  element={<ReadCreate/>}/>
            <Route path='/create'  element={<ReadCreate/>}/>
            <Route path='/Login'  element={<ReadCreate/>}/>
            <Route path='/Signup'  element={<ReadCreate/>}/>
            <Route path='/blog' element={<BlogList Posts={Posts} />} />
            <Route path='/post/:id' element={<BlogList Posts={Posts} />} />
          </Routes>


        </div>
        
      </div>
    </Router>
  )
}

export default App;

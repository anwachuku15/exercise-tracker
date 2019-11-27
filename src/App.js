import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'

import Navbar from './components/navbar'
import ExercisesList from './components/exercises'
import EditExercise from './components/edit-exercise'
import CreateExercise from './components/create-exercise'
import CreateUser from './components/create-user'

function App() {
  return ( 
    <Router>
      <Navbar />
      <div className='container'>
        
        <br/>
        <Route exact path='/' component={ExercisesList} />
        <Route exact path='/edit/:id' component={EditExercise} />
        <Route exact path='/create' component={CreateExercise} />
        <Route exact path='/user' component={CreateUser} />
      </div>
    </Router>
    
  );
}

export default App;

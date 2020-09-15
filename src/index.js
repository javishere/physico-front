import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import PatientsList from './components/PatientsList';
import getAllPatients from './connections/patients';
import fs from 'fs';
import { render } from 'react-dom';
import App from './App'



render(
   <Router>
        <App />
   </Router>
,document.getElementById('root'))
    




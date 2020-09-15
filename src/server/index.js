import React from 'react'
import {renderToString} from 'react-dom/server'
import { BrowserRouter as Router } from 'react-router-dom';
import express from 'express';
import PatientsList from '../components/PatientsList';
import getAllPatients from '../connections/patients';
import fs from 'fs';

const app = express();

const index = fs.readFileSync(__dirname + '/../../public/index.html', 'utf8');
app.use('/static', express.static(__dirname + '/../../public'));

app.get('**', (req,res)=>{
    getAllPatients().then(patients => {
        const html = renderToString(
            //<Router>
                <PatientsList patients = {patients}/>
            //</Router>
        );
        const finalHtml = index.replace('@@APP',html);
        //res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.send(finalHtml)
    });
})

app.listen(5000, ()=>{console.log("listening 5000")})
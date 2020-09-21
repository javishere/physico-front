import React from 'react'
import { HashRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App'
import config from './config';
import { Amplify, Auth } from 'aws-amplify';


Amplify.configure({
   Auth: {
     mandatorySignIn: true,
     region: config.cognito.REGION,
     userPoolId: config.cognito.USER_POOL_ID,
     identityPoolId: config.cognito.IDENTITY_POOL_ID,
     userPoolWebClientId: config.cognito.APP_CLIENT_ID
   },
   Storage: {
     region: config.s3.REGION,
     bucket: config.s3.BUCKET,
     identityPoolId: config.cognito.IDENTITY_POOL_ID
   },
   API: {
     endpoints: [
       {
         name: "physico",
         endpoint: config.apiGateway.URL,
         region: config.apiGateway.REGION,
         custom_header: async () => { //With Cognito User Pools use this: 
            return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
         } 
         
         }
       },
     ]
   }
 });

render(
   <Router basename="/" >
        <App />
   </Router>
,document.getElementById('root'))
    




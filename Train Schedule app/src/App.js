import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Import Router, Switch, and Route

import AllTrains from './pages/AllTrains';
import SingleTrain from './pages/SingleTrain';

const App = () => {
  // Replace 'YOUR_ACCESS_TOKEN' with the actual access token obtained from the API
  const [accessToken] = useState('eyJhbGci0iJIUZI1NiIsInR5cCI6IkpXVC39.eyJleHAiOjE20DI2MjkyNjQsImNvbXBhbn10YW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudE1EIjoiYjQ2MTE4ZjAtZmJkZSO0YjE2LWEOYjEtNmFINmFkNzE8YjI3Ine.v930cxrZHWDTnTwm0-6t toTGI4C65Grhn3rIJDC8fy8');


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link> {/* Use Link component for navigation */}
            </li>
            <li>
              <Link to="/singletrain">Single Train</Link> {/* Use Link component for navigation */}
            </li>
          </ul>
        </nav>

        
          <Route exact path="/"> {/* Use Route component to define the route */}
            <AllTrains accessToken={accessToken} />
          </Route>
          <Route path="/singletrain">
            {/* Replace 'TRAIN_NUMBER' with the actual train number */}
            <SingleTrain accessToken={accessToken} trainNumber="TRAIN_NUMBER" />
          </Route>
        
      </div>
    </Router>
  );
};

export default App;





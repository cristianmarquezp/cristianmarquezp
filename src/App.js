import React from 'react';

import './App.css';
import ResidentialAddress from './routes/ResidentialAddress'
import EmploymentAddress  from './routes/EmploymentAddress';
import PropertyAddress from './routes/PropertyAddress';
import Summary from './routes/Summary';

import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import { Provider } from 'react-redux';
import store from './routes/redux/store';

 
function App() {
  return (

  <Provider store={store}>
    <Router>
      <div className="App">       
        <Switch>
          <Route path="/" exact component={ResidentialAddress} />
          <Route path="/ResidentialAddress" component={ResidentialAddress}/>
          <Route path="/EmploymentAddress" component={EmploymentAddress}/>
          <Route path="/PropertyAddress" component={PropertyAddress}/>
          <Route path="/Summary" component={Summary}/>
        </Switch>
      </div>
    </Router>
  </Provider>    
  );
}

export default App;

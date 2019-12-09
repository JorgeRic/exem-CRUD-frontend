import React from 'react';
import './App.css';
// import 'milligram';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import Home from './pages/Home'
import AppList from './pages/AppList'
import NotFound from './pages/NotFound'
import NavBar from './component/NavBar'
import CreateApp from './pages/CreateApp'
import UpdateApp from './pages/UpdateApp';
import Appdetail from './pages/AppDetail'

function App() {
  return (
    <Router>
        <div className="text-center">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/apps" exact component={AppList} />
            <Route path="/apps/createApp" exact component={CreateApp}/>
            <Route path="/apps/updateApp/:id" component={UpdateApp}/>
            <Route path="/apps/detail/:id" component={Appdetail}/>
            <Route component={NotFound} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Listing from './mainList/listing';
import Enterprise from './registerPage/enterprise';
import Student from './registerPage/student';

const MainRouter = () => (
    <div>
      <Switch>
        <Route exact path='/Refier-Clone' component={Listing} />
        <Route exact path='/Refier-Clone/jobs' component={Listing} />
        <Route exact path='/Refier-Clone/register-student' component={Student}/>
        <Route exact path='/Refier-Clone/register-enterprise' component={Enterprise}/>
      </Switch>
    </div>
  );
  export default MainRouter;
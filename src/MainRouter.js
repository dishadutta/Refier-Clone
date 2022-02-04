import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Listing from './mainList/listing';
import Menu from './Menu';
import Enterprise from './registerPage/enterprise';
import Student from './registerPage/student';

const MainRouter = () => (
    <div>
      <Menu />
      <Switch>
        <Route exact path={['/', '/jobs']} component={Listing} />
        <Route exact path='/register-student' component={Student}/>
        <Route exact path='/register-enterprise' component={Enterprise}/>
        {/* <Route exact */}
        {/* <Route exact path="/" component={Home}/> */}
        
        {/* <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password/:resetPasswordToken" component={ResetPassword} />
        <PrivateRoute exact path="/admin" component={Admin} />
        <PrivateRoute exact path="/post/create" component={NewPost}/>
        <Route exact path="/post/:postId" component={SinglePost}/>
        <PrivateRoute exact path="/post/edit/:postId" component={EditPost}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <PrivateRoute exact path="/user/edit/:userId" component={EditProfile}/>
        <PrivateRoute exact path="/findPeople" component={FindPeople}/>
        <PrivateRoute exact path="/user/:userId" component={Profile}/> */}
  
      </Switch>
    </div>
  );
  export default MainRouter;
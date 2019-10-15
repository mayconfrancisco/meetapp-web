import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import MeetupDetails from '../pages/MeetupDetails';
import MeetupMaintenance from '../pages/MeetupMaintenance';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/profile" isPrivate component={Profile} />
      <Route path="/mymeetup/:meetupId" isPrivate component={MeetupDetails} />
      <Route path="/mymeetupsave" isPrivate component={MeetupMaintenance} />

      <Route path="/" component={SignIn} />
    </Switch>
  );
}

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes.js';

// Use logged in parameter to render LandingPage or Habits homepage
export default function Contents(loggedIn) {
	loggedIn = false;
	return (
		<Switch>
			{<Redirect exact from="/" to="/habits" />}
			{routes.map(attrs => <Route {...attrs} key={attrs.path} />)}
		</Switch>	
	);
}

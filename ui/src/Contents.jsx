import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes.js';

export default function Contents(user) {
	const userData = user.user;
	return (
		<Switch>
			{<Redirect exact from="/" to="/habits" />}
			{routes.map(attrs => <Route {...attrs} key={attrs.path} />)}
		</Switch>
	);
}

// @flow
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import BoxContainer from '../BoxContainer'

import '../../services/firebase'

const App = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/login">Google Auth</Link>
				</li>
				<li>
					<Link to="/tlogin">Twitter Auth</Link>
				</li>
			</ul>

			<hr />

			<Route exact path="/" component={BoxContainer} />
		</div>
	</Router>
)
export default App

// @flow
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import BoxContainer from '../BoxContainer'

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={BoxContainer} />
		</div>
	</Router>
)
export default App

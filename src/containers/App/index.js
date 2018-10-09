// @flow
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import BoxContainer from '../BoxContainer'

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={BoxContainer} />
		</div>
	</Router>
)
export default App

// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { State } from '../../types'
import Box3d from './Box3d'
import InfoCard from './InfoCard'
// import * as selectors from './selectors'
import * as actions from './logic'

type Props = {
	load: typeof actions.load,
}

const C = (props: Props) => (
	<div>
		<button onClick={props.load}>Connect BLE</button>
		<InfoCard />
		<Box3d />
	</div>
)

class Container extends React.Component<Props> {
	componentDidMount() {
		this.props.load()
	}

	render() {
		return C(this.props)
	}
}

const ms = (state: State) => ({})

const conn = connect(
	ms,
	{
		load: actions.load,
	},
)

export default conn(Container)

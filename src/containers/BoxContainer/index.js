// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
// import * as selectors from './selectors'
import * as actions from './logic'

type OProps = {}
type Props = {
	load: typeof actions.load,
}

const C = (props: Props) => <div>{'hello'}</div>

class Container extends React.Component<Props> {
	componentDidMount() {
		this.props.load()
	}

	render() {
		return C(this.props)
	}
}

const ms = (state: State) => ({})

const conn: Connector<OProps, Props> = connect(
	ms,
	{
		load: actions.load,
	},
)

export default conn(Container)

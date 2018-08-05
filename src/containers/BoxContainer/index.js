// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
// import * as selectors from './selectors'
import * as actions from './logic'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

type OProps = {}
type Props = {
	load: typeof actions.load,
}

const C = (props: Props) => (
	<div>
		<Grid container justify="center" style={{ marginBottom: '100px' }}>
			<Grid item xs={12} md={10}>
				<Paper>
					<Button onClick={props.load}>BLE on</Button>
				</Paper>
			</Grid>
		</Grid>
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

const conn: Connector<OProps, Props> = connect(
	ms,
	{
		load: actions.load,
	},
)

export default conn(Container)

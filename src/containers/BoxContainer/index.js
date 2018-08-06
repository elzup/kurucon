// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { State } from '../../types'
import InfoCard from './InfoCard'
import BoardContainer from '../BoardContainer'
// import * as selectors from './selectors'
import * as actions from './logic'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

type Props = {
	load: typeof actions.load,
}

const C = (props: Props) => (
	<div>
		<Grid container justify="center" style={{ marginBottom: '100px' }}>
			<Grid item xs={12} md={10}>
				<Paper>
					<Button onClick={props.load}>Connect BLE</Button>
					<InfoCard />
					<BoardContainer />
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

const conn = connect(
	ms,
	{
		load: actions.load,
	},
)

export default conn(Container)

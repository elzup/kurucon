// @flow
import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import type { Box } from '../../types'

type Props = {
	box: Box,
}

const InfoCard = (props: Props) => (
	<div>
		<Typography varian="body1">pit: {props.box.pit}</Typography>
		<div style={{ width: '100%', borderBottom: 'solid 1px black' }}>
			<div style={{ width: `%`, background: 'red' }}>a</div>
		</div>
		<Typography varian="body1">rol: {props.box.rol}</Typography>
		<Typography varian="body1">yaw: {props.box.yaw}</Typography>
	</div>
)

export default InfoCard

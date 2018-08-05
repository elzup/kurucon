// @flow
import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import type { Box } from '../../types'

type Props = {
	box: Box,
}

const InfoCard = (props: Props) => (
	<div>
		<Typography varian="body1">pit: {props.box.pit.v}</Typography>
		<div style={{ width: '100%', borderBottom: 'solid 1px black' }}>
			<div style={{ width: `${props.box.pit.rate}%`, background: 'red' }}>
				a
			</div>
		</div>

		<Typography varian="body1">rol: {props.box.rol.v}</Typography>
		<div style={{ width: '100%', borderBottom: 'solid 1px black' }}>
			<div style={{ width: `${props.box.rol.rate}%`, background: 'blue' }}>
				a
			</div>
		</div>

		<Typography varian="body1">yaw: {props.box.yaw.v}</Typography>
		<div style={{ width: '100%', borderBottom: 'solid 1px black' }}>
			<div style={{ width: `${props.box.yaw.rate}%`, background: 'green' }}>
				a
			</div>
		</div>
	</div>
)

export default InfoCard

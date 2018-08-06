// @flow
import * as React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import type { Box } from '../../types'

type Props = {
	box: Box,
}

const Line = styled.div`
	width: 100%;
	border: solid 1px #ddd;
	border-radius: 5px;
`

const InfoCard = (props: Props) => (
	<div style={{ width: '400px' }}>
		<Typography varian="body1">Pitch: {props.box.pit.v}</Typography>
		<Line>
			<div
				style={{
					height: '10px',
					width: `${props.box.pit.rate}%`,
					background: 'red',
				}}
			/>
		</Line>

		<Typography varian="body1">Roll: {props.box.rol.v}</Typography>
		<Line>
			<div
				style={{
					height: '10px',
					width: `${props.box.rol.rate}%`,
					background: 'gray',
				}}
			/>
		</Line>

		<Typography varian="body1">Yaw: {props.box.yaw.v}</Typography>
		<Line>
			<div
				style={{
					height: '10px',
					width: `${props.box.yaw.rate}%`,
					background: 'green',
				}}
			/>
		</Line>
	</div>
)

export default InfoCard

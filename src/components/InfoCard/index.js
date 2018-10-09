// @flow
import * as React from 'react'
import styled from 'styled-components'
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
		Pitch
		<Line>
			<div
				style={{
					height: '10px',
					width: `${props.box.pit.rate}%`,
					background: 'red',
				}}
			/>
		</Line>
		Roll:
		<Line>
			<div
				style={{
					height: '10px',
					width: `${props.box.rol.rate}%`,
					background: 'gray',
				}}
			/>
		</Line>
		Yaw:
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

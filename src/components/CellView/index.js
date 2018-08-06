// @flow
import * as React from 'react'
import styled from 'styled-components'
import type { Cell } from '../../types'

type Props = {
	cell: Cell,
}

const Wrap = styled.div`
	width: 100px;
	height: 100px;
	border-left: solid black;
	:last-child {
		border-right: solid black;
	}
	&[data-on='true'] {
		background-image: url('images/ika-${p => p.dir}.png');
		background-size: 100% auto;
		background-repeat: no-repeat;
	}
`

const CellView = (props: Props) => (
	<Wrap data-on={props.cell.on} dir={props.cell.direction}>
		{'　'}
	</Wrap>
)
export default CellView

// @flow
import * as React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import type { State as RootState, Board } from '../../types'
import Cell from '../CellById'
import * as selectors from './selectors'

type Props = {
	board: Board,
}

const Wrap = styled.div`
	margin-top: 10px;
	border: solid black;
	width: 500px;
	border-radius: 20px;
	overflow: hidden;
`
const Line = styled.div`
	display: flex;
	:not(:last-child) {
		border-bottom: solid black;
	}
`

const C = (props: Props) => (
	<Wrap>
		{props.board.cells.map(line => (
			<Line>{line.map(ck => <Cell key={ck} cellKey={ck} />)}</Line>
		))}
	</Wrap>
)

const ms = (state: RootState) => ({
	board: selectors.getBoard(state),
})

const conn = connect(
	ms,
	{},
)

export default conn(C)

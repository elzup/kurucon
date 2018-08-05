// @flow
import * as React from 'react'

import { connect } from 'react-redux'
import type { State as RootState, Board } from '../../types'
import Cell from '../CellById'
import * as selectors from './selectors'

type Props = {
	board: Board,
}

const C = (props: Props) => (
	<div>
		{props.board.cells.map(line => (
			<div style={{ display: 'flex' }}>
				{line.map(ck => <Cell key={ck} cellKey={ck} />)}
			</div>
		))}
	</div>
)

const ms = (state: RootState) => ({
	board: selectors.getBoard(state),
})

const conn = connect(
	ms,
	{},
)

export default conn(C)

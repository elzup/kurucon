// @flow
import * as React from 'react'

import type { Board } from '../../types'

type Props = {
	board: Board,
}

const C = (props: Props) => (
	<div>
		{props.board.cells.map(line => (
			<div style={{ display: 'flex' }}>
				{line.map(cell => <div>{cell.on ? 'o' : 'x'}</div>)}
			</div>
		))}
	</div>
)

export default C

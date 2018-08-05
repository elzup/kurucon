// @flow
import * as React from 'react'
import type { Cell } from '../../types'

type Props = {
	cell: Cell,
}

const CellView = (props: Props) => <div>{props.cell.on ? 'O' : 'X'}</div>
export default CellView

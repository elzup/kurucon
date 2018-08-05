// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { State as RootState } from '../../types'
import CellView from '../../components/CellView'
import * as selectors from './selectors'

type OProps = {
	cellKey: string,
}

const ms = (state: RootState, op: OProps) => ({
	cell: selectors.getCell(state, op.cellKey),
})

const conn = connect(
	ms,
	{},
)

export default conn(CellView)

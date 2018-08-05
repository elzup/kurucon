// @flow
import { connect } from 'react-redux'
import type { State as RootState } from '../../types'
import BoardView from '../../components/BoardView'
import * as selectors from './selectors'

const ms = (state: RootState) => ({
	board: selectors.getBoard(state),
})

const conn = connect(
	ms,
	{},
)

export default conn(BoardView)

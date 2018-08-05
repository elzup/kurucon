// @flow
import type { State as BoardContainer } from '../containers/BoardContainer/reducer'
import type { State as BoxContainer } from '../containers/BoxContainer/reducer'
import type { State as CellById } from '../containers/CellById/reducer'

export type State = {
	BoardContainer: BoardContainer,
	BoxContainer: BoxContainer,
	CellById: CellById,
}

// @flow
import type { Action, Board } from '../../types'
import { Actions } from './actionTypes'

export type State = Board

const initialCells = [...Array(5)].map(() =>
	[...Array(5)].map(() => ({
		on: false,
	})),
)
const px = 0
const py = 0
initialCells[py][px].on = true

export const initialState: State = {
	player: { x: px, y: py },
	cells: initialCells,
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.UPDATE_BOARD:
			return {
				...state,
				board: action.board,
			}

		default:
			return state
	}
}

// @flow
import type { Action, Board } from '../../types'
import { Actions } from './actionTypes'
import { makeId } from '../../utils'

export type State = Board

export const initialState: State = {
	player: { x: 2, y: 2 },
	cells: [...Array(5).keys()].map(y =>
		[...Array(5).keys()].map(x => makeId(x, y)),
	),
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.UPDATE_BOARD:
			return action.board

		default:
			return state
	}
}

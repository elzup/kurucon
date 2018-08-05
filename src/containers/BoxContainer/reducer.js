// @flow
import type { Action, Box } from '../../types'
import { Actions } from './actionTypes'

export type State = { box: Box }

export const initialState: State = { box: { pit: 0, rol: 0, yaw: 0 } }

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.UPDATE_BOX:
			return {
				...state,
				box: action.box,
			}

		default:
			return state
	}
}

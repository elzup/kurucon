// @flow
import type { Action, Box } from '../../types'
import { Actions } from './actionTypes'

export type State = { box: Box }

export const initialState: State = {
	box: {
		pit: {
			v: 0,
			rate: 0,
		},
		rol: {
			v: 0,
			rate: 0,
		},
		yaw: {
			v: 0,
			rate: 0,
		},
	},
}

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

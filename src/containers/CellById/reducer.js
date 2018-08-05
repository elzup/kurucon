// @flow
import type { Action, Cell } from '../../types'
import { Actions } from './actionTypes'
import { makeId } from '../../utils'

export type State = { [key: string]: Cell }

const initialState: State = {}

const c5 = [...Array(5).keys()]
c5.forEach(y => {
	c5.forEach(x => {
		initialState[makeId(x, y)] = {
			on: false,
		}
	})
})
initialState['0-0'] = { on: true }

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.UPDATE_CELL:
			return {
				...state,
				[action.key]: action.cell,
			}

		default:
			return state
	}
}

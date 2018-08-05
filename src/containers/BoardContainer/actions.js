// @flow
import type { Board } from '../../types/'

import { UPDATE_BOARD } from './actionTypes'
import type { UpdateBoard } from './actionTypes'

export function updateBoard(board: Board): UpdateBoard {
	return {
		type: UPDATE_BOARD,
		board,
	}
}

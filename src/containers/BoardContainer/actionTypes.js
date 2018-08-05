// @flow
import type { Board } from '../../types/'

export const UPDATE_BOARD: 'BoardContainer/UPDATE_BOARD' =
	'BoardContainer/UPDATE_BOARD'

export const Actions = {
	UPDATE_BOARD,
}

export type UpdateBoard = {
	type: typeof UPDATE_BOARD,
	board: Board,
}

export type Action = UpdateBoard

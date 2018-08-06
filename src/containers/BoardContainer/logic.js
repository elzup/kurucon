// @flow

import type { ThunkAction } from '../../types'
import { makeId } from '../../utils'
import * as actions from './actions'
import * as selectors from './selectors'
import { updateCell } from '../CellById/actions'

const angle = (pit: number, yaw: number): 'r' | 'l' | 'u' | 'd' => {
	if (pit === 1) {
		return 'r'
	}
	if (pit === -1) {
		return 'l'
	}
	if (yaw === 1) {
		return 'd'
	}
	return 'u'
}

const limit = (n: number) => {
	return Math.min(Math.max(0, n), 4)
}

export function movePlayer(pit: number, yaw: number): ThunkAction {
	return async (dispatch, getState) => {
		const board = selectors.getBoard(getState())
		if (pit === 0 && yaw === 0) {
			return
		}
		const x = limit(board.player.x + pit)
		const y = limit(board.player.y + yaw)

		await dispatch(
			updateCell(makeId(board.player.x, board.player.y), {
				on: false,
				ok: true,
				direction: 'u',
			}),
		)
		await dispatch(
			updateCell(makeId(x, y), {
				ok: true,
				on: true,
				direction: angle(pit, yaw),
			}),
		)
		dispatch(
			actions.updateBoard({
				...board,
				player: {
					x,
					y,
				},
			}),
		)
	}
}

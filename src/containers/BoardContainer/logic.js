// @flow

import type { ThunkAction } from '../../types'
import { makeId } from '../../utils'
import * as actions from './actions'
import * as selectors from './selectors'
import { updateCell } from '../CellById/actions'

export function movePlayer(pit: number, yaw: number): ThunkAction {
	return async (dispatch, getState) => {
		const board = selectors.getBoard(getState())
		if (pit === 0 && yaw === 0) {
			return
		}
		const x = (board.player.x + pit + 5) % 5
		const y = (board.player.y + yaw + 5) % 5

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

		await dispatch(
			updateCell(makeId(board.player.x, board.player.y), {
				on: false,
				direction: 'u',
			}),
		)
		await dispatch(
			updateCell(makeId(x, y), { on: true, direction: angle(pit, yaw) }),
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

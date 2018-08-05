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

		await dispatch(
			updateCell(makeId(board.player.x, board.player.y), { on: false }),
		)
		await dispatch(updateCell(makeId(x, y), { on: true }))
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

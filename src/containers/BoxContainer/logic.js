// @flow

import BlueJelly from '../../api/ble'
import type { ThunkAction, Box } from '../../types'
import * as actions from './actions'
import * as selectors from './selectors'
import { movePlayer } from '../BoardContainer/logic'

let ble = null

const base = {
	pit: {
		max: 35230,
		min: 0,
	},
	rol: {
		max: 8612,
		min: -8000,
	},
	yaw: {
		max: 17950,
		min: -17987,
	},
}

const batchPit = (v: number) => {
	if (v < 0) {
		return v + 64924
	}
	return v
}

const calc = (v: number, ax: string) => {
	const total = base[ax].max - base[ax].min
	const n = v - base[ax].min
	return (n / total) * 100
}

export function load(): ThunkAction {
	return async (dispatch, getState) => {
		ble = new BlueJelly({
			onRead: (data, uuid) => {
				const pit = batchPit(data.getInt16(0))
				const rol = data.getInt16(2)
				const yaw = data.getInt16(4)

				const box = {
					pit: {
						v: pit,
						rate: calc(pit, 'pit'),
					},
					rol: {
						v: rol,
						rate: calc(rol, 'rol'),
					},
					yaw: {
						v: yaw,
						rate: calc(yaw, 'yaw'),
					},
				}
				dispatch(save(box))
			},
		})
		const sUUID = '4fafc201-1fb5-459e-8fcc-c5c9c331914b'
		const cUUID = 'beb5483e-36e1-4688-b7f5-ea07361b26a8'
		ble.setUUID('UUID1', sUUID, cUUID)

		ble.startNotify('UUID1')
	}
}

const between = (low: number, middle: number, high: number) =>
	low <= middle && middle <= high

const pos = (a: number): 0 | 1 | 2 | 3 => {
	const p = 12.5
	if (a < p) {
		return 0
	}
	if (a < p + 25) {
		return 1
	}
	if (a < p + 50) {
		return 2
	}
	if (a < p + 75) {
		return 3
	}
	return 0
}

const move = (a: number, b: number): number => {
	const d = pos(a) - pos(b)
	console.log(d)
	if (d === 1 || d === -3) {
		return 1
	}
	if (d === -1 || d === 3) {
		return -1
	}
	return 0
}

export function save(box: Box): ThunkAction {
	return async (dispatch, getState) => {
		const oldBox = selectors.getBox(getState())
		dispatch(actions.updateBox(box))
		const movePit = move(oldBox.pit.rate, box.pit.rate)
		const moveYaw = move(oldBox.yaw.rate, box.yaw.rate)
		dispatch(movePlayer(movePit, moveYaw))
	}
}

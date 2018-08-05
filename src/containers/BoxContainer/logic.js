// @flow

import BlueJelly from '../../api/ble'
import type { ThunkAction } from '../../types'
import * as actions from './actions'

let ble = null

export function load(): ThunkAction {
	return async (dispatch, getState) => {
		ble = new BlueJelly({
			onRead: (data, uuid) => {
				const pit = data.getInt16(0)
				const rol = data.getInt16(2)
				const yaw = data.getInt16(4)
				dispatch(save(pit, rol, yaw))
			},
		})
		const sUUID = '4fafc201-1fb5-459e-8fcc-c5c9c331914b'
		const cUUID = 'beb5483e-36e1-4688-b7f5-ea07361b26a8'
		ble.setUUID('UUID1', sUUID, cUUID)

		ble.startNotify('UUID1')
	}
}

const base = {
	pit: {
		max: 32400,
		min: -32524,
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

const calc = (v: number, ax: string) => {
	const total = base[ax].max - base[ax].min
	const n = v + base[ax].max
	return (n / total) * 100
}

export function save(pit: number, rol: number, yaw: number): ThunkAction {
	return async (dispatch, getState) => {
		// const box = selectors.getBox(getState())
		const newBox = {
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
		console.log(newBox)
		dispatch(actions.updateBox(newBox))
	}
}

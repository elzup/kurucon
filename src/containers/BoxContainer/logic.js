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

				dispatch(actions.updateBox({ pit, rol, yaw }))
				console.log({ pit, rol, yaw })
			},
		})
		const sUUID = '4fafc201-1fb5-459e-8fcc-c5c9c331914b'
		const cUUID = 'beb5483e-36e1-4688-b7f5-ea07361b26a8'
		ble.setUUID('UUID1', sUUID, cUUID)

		ble.startNotify('UUID1')
	}
}

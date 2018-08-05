// @flow

import BlueJelly from '../../api/ble'
import type { ThunkAction } from '../../types'
// import * as actions from './actions'

let ble = null

export function load(): ThunkAction {
	return async (dispatch, getState) => {
		ble = new BlueJelly()
		const sUUID = '4fafc201-1fb5-459e-8fcc-c5c9c331914b'
		const cUUID = 'beb5483e-36e1-4688-b7f5-ea07361b26a8'
		ble.setUUID('UUID1', sUUID, cUUID)

		ble.onScan = function(deviceName) {
			console.log(deviceName)
		}

		//--------------------------------------------------
		//ConnectGATT後の処理
		//--------------------------------------------------
		ble.onConnectGATT = function(uuid) {
			console.log('> connected GATT!')
		}

		//--------------------------------------------------
		//Read後の処理：得られたデータの表示など行う
		//--------------------------------------------------
		ble.onRead = function(data, uuid) {
			//フォーマットに従って値を取得
			const pitch = data.getInt16(0) //2Byteの場合のフォーマット
			const roll = data.getInt16(2) //2Byteの場合のフォーマット
			const yaw = data.getInt16(4) //2Byteの場合のフォーマット
			//        value2 = data.getInt8(1);//2Byteの場合のフォーマット

			//HTMLに値を表示
			console.log(pitch, roll, yaw)
		}

		//--------------------------------------------------
		//Start Notify後の処理
		//--------------------------------------------------
		ble.onStartNotify = function(uuid) {
			console.log('> Start Notify!')
		}

		//--------------------------------------------------
		//Stop Notify後の処理
		//--------------------------------------------------
		ble.onStopNotify = function(uuid) {
			console.log('> Stop Notify!')
		}

		//-------------------------------------------------
		//ボタンが押された時のイベント登録
		//--------------------------------------------------
		// document
		// 	.getElementById('startNotifications')
		// 	.addEventListener('click', function() {
		// 		ble.startNotify('UUID1')
		// 	})
		ble.startNotify('UUID1')
	}
}

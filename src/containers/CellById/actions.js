// @flow
import type { Cell } from '../../types/'

import { UPDATE_CELL } from './actionTypes'
import type { UpdateCell } from './actionTypes'

export function updateCell(key: string, cell: Cell): UpdateCell {
	return {
		type: UPDATE_CELL,
		key,
		cell,
	}
}

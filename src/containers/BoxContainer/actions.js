// @flow
import type { Box } from '../../types'

import { UPDATE_BOX } from './actionTypes'
import type { UpdateBox } from './actionTypes'

export function updateBox(box: Box): UpdateBox {
	return {
		type: UPDATE_BOX,
		box,
	}
}

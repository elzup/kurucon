// @flow
import type { Box } from '../../types'

export const UPDATE_BOX: 'BoxContainer/UPDATE_BOX' = 'BoxContainer/UPDATE_BOX'

export const Actions = {
	UPDATE_BOX,
}

export type UpdateBox = {
	type: typeof UPDATE_BOX,
	box: Box,
}

export type Action = UpdateBox

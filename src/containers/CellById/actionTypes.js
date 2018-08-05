// @flow
import type { Cell } from '../../types/'

export const UPDATE_CELL: 'CellById/UPDATE_CELL' = 'CellById/UPDATE_CELL'

export const Actions = {
	UPDATE_CELL,
}

export type UpdateCell = {
	type: typeof UPDATE_CELL,
	key: string,
	cell: Cell,
}

export type Action = UpdateCell

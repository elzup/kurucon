// @flow
import type { State } from '../../types'

export const getCell = (state: State, cellKey: string) =>
	state.CellById[cellKey]

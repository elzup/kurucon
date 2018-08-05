// @flow
import type { Action as BoardContainerAction } from '../containers/BoardContainer/actionTypes'
import type { Action as BoxContainerAction } from '../containers/BoxContainer/actionTypes'
import type { Action as CellByIdAction } from '../containers/CellById/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action =
	| ReduxInitAction
	| BoardContainerAction
	| BoxContainerAction
	| CellByIdAction

// @flow
import type { Action as BoxContainerAction } from '../containers/BoxContainer/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action = ReduxInitAction | BoxContainerAction

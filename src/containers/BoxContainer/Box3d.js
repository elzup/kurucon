// @flow
import { connect } from 'react-redux'
import type { State } from '../../types'
import * as selectors from './selectors'
import Box3d from '../../components/Box3d'

const ms = (state: State) => ({ box: selectors.getBox(state) })

const conn = connect(
	ms,
	{},
)

export default conn(Box3d)

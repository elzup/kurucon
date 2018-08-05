// @flow
import { connect } from 'react-redux'
import type { State } from '../../types'
import * as selectors from './selectors'
import InfoCard from '../../components/InfoCard'

const ms = (state: State) => ({ box: selectors.getBox(state) })

const conn = connect(
	ms,
	{},
)

export default conn(InfoCard)

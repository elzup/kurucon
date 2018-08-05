// @flow
import { combineReducers } from './config'
import BoardContainer from './containers/BoardContainer/reducer'
import BoxContainer from './containers/BoxContainer/reducer'
import CellById from './containers/CellById/reducer'

export default combineReducers({
	BoardContainer,
	BoxContainer,
	CellById,
})

// @flow
import { combineReducers } from './config'
import BoardContainer from './containers/BoardContainer/reducer'
import BoxContainer from './containers/BoxContainer/reducer'

export default combineReducers({
	BoardContainer,
	BoxContainer,
})

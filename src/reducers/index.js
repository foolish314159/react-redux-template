import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  dummy: (state = 0, action) => {
    return state;
  }
})

export default rootReducer
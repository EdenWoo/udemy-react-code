import {combineReducers} from 'redux'
import { reducer  } from 'redux-form';
import studentInfo from './studentInfo';
export default combineReducers({
  form: reducer,
  students: studentInfo
})
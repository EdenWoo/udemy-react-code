const ADD_USER = 'ADDUSER'
const REMOVE_USER = "REMOVE_USER"

export default (state={students:[]},action) => {
  switch(action.type){
    case ADD_USER:
    return {
      students:[...state.students, action.payload]
    }
    case REMOVE_USER:
    return {
      students: state.students.slice(0,-1)
    }
    default:
    return state
  }
}

export const addUser = (formValues) => {
  return {
    type:ADD_USER,
    payload:formValues
  }
}

export const removeUser = () => {
  return {
    type:REMOVE_USER
  }
}

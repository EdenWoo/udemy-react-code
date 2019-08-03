import React from 'react';
import Header from './Header.js'
import UserInput from './UserInput.js'
import UserList from './UserList'
import {addUser} from '../redux/studentInfo'
import {connect} from 'react-redux';

class App extends React.Component {
  
onSubmit = (formValues) => {
  this.props.addUser(formValues)
}

  render() {
    let {students}= this.props.state
    console.log(students)
    return (
      <div class="container">
        <Header />
        <UserList students={students}/>
        <hr class="my-4" />
        <UserInput onSubmit={this.onSubmit}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    state: state.students
  }
}
export default connect(mapStateToProps,{addUser})(App)
import React from 'react';

class UserList extends React.Component {
 

  renderOutput = () =>{
    const { students } = this.props
    const last = students[students.length - 1]
    if(last){
      return (
        <div class="row">
          <div class="col">
            <label >First Name</label><br /><input value={last.fn} />
          </div>
          <div class="col" >
            <label >Last Name</label><br /><input value={last.ln}  />
          </div>
          <div class="w-100"></div>
          <div class="col" >
            <label >Phone</label><br /><input value={last.phone} />
          </div>
          <div class="col">
            <label >Email</label><br /> <input value={last.email} />
          </div>
        </div>
      )
    }
  }
  render() {
    
    return (
      <div>
        <h2>Add Students</h2><br />
        <h3>Class Information</h3><br/>
        <label>Class</label><br />
        <select>
          <option selected>Class 1</option>
          <option value="1">Class 2</option>
          <option value="2">Class 3</option>
        </select>
        {this.renderOutput()}
      </div>
    )
  }
}
export default UserList;

//class="custom-select custom-select-sm"

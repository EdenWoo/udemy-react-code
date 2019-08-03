import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { removeUser } from '../redux/studentInfo';

class UserInput extends React.Component {

  renderError({ error, touched }) {
    if (touched && error){
      return (
        <div>
          {error}
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {

    return (
      <div >
        <label> {label}</label><br />
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {

    this.props.onSubmit(formValues);
  }


  render() {
    return (
      <div>
        <div class="row">
          <div class="col">
            Student Info
        </div>
          <div class="col">
            <button type="button" onClick={this.props.removeUser} class="rounded-pill">-</button>Remove This Student
        </div>
        </div>

        <form onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error">
          <div class="row">
            <div class="col">
              <Field name="fn" component={this.renderInput} label="First Name" />
            </div>
            <div class="col">
              <Field name="ln" component={this.renderInput} label="Last Name" />
            </div>
            <div class="w-100"></div>
            <div class="col">
              <Field name="phone" component={this.renderInput} label="Phone" />
            </div>
            <div class="col">
              <Field name="email" component={this.renderInput} label="Email" />
            </div>
          </div>


          <div class="row">
            <div class="col">
              <br />
              <button type="button" onClick={this.props.reset} class="rounded-pill">+</button>Add Another Student
          </div>
          </div>

          <div class="row">
            <div class="col"></div>
            <div class="col"></div>
            <div class="w-100"></div>
            <div class="col"></div>
            <div class="col"><input type="submit" value="Submit" class="btn btn-primary" /></div>
          </div>
        </form>

      </div>
    )
  }
}
const validate = fmValues => {
  const errors = {}
  if (!fmValues.fn) {
    errors.fn = 'Plz input First name'
  }
  if (!fmValues.ln) {
    errors.ln = 'Plz input LastName'
  }
  if (!fmValues.phone) {
    errors.phone = 'Plz input Phone'
  }
  if (!fmValues.email) {
    errors.email = 'Plz input Email'
  }
  return errors
}

export default connect(null, { removeUser })(reduxForm({
  form: 'UserInfo',
  validate
})(UserInput))
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label> {label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
                >
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button type="submit" className="ui button primary">Submit</button>
            </form>
        );
        //field 其实不知道label是啥，所以自动传给前面的函数
        //其实吧，都是看这个Field 里的 title，来把validate里的title 和meta里的title连一起，这样meta
        //里面就有error message了，
    }
}
const validate = fmValues => {
    const errors = {};
    if (!fmValues.title) {
        errors.title = 'Enter a title';
    }
    if (!fmValues.description) {
        errors.description = 'Enter a desc';
    }
    return errors;
};
export default reduxForm({
    form: 'StreamForm',
    validate
})(StreamForm);


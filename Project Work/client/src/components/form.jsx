import React, { Component } from "react";
import Joi from "joi-browser";
import Input, { DropInput } from "./input";

class Form extends Component {
  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    let errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleSearch = ({ currentTarget: input }) => {
    this.props.onSearch(input.value);
  };

  validateProperty({ name, value }) {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  }

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderDropInput(options, name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <DropInput
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        type={type}
        error={errors && errors[name]}
        options={options}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors && errors[name]}
      />
    );
  }

  renderSearchInput(name, label, type = "text") {
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={this.props.searchPrefix}
        onChange={this.handleSearch}
        error={null}
      />
    );
  }
}

export default Form;

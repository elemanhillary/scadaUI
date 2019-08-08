/* eslint-disable prefer-template */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(signup(username, password));
    }
  }

  render() {
    const { registered } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Cicada Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor="username">
                username
              <input type="text" id="username" className="form-control" name="username" value={username} onChange={this.handleChange} />
              {submitted && !username
              && <div className="help-block">username is required</div>
              }
            </label>
          </div>
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor="password">
                  password
              <input type="password" id="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
              {submitted && !password
              && <div className="help-block">Password is required</div>
              }
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              {
                registered && <Redirect to="/signin" />
              }
              signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { registered } = state.signup;
  return {
    registered,
  };
};

const connectedSignup = connect(mapStateToProps)(Signup);
export { connectedSignup as SignupPage };

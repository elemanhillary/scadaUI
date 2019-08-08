/* eslint-disable no-undef */
import React from 'react';
import { shallow } from './helpers/config';
import { LoginPage, SignupPage } from '../src/components';

describe('<Login />', () => {
  let wrapper;
  const props = {
    login: jest.fn(),
    username: '',
    password: '',
    errors: {},
    loggingIn: false,
  };
  beforeEach(() => {
    wrapper = shallow(<LoginPage {...props} />);
  });
  it('should render Login component', () => {
    wrapper = shallow(<LoginPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Signup />', () => {
  let wrapper;
  const props = {
    signin: jest.fn(),
    username: '',
    password: '',
    errors: {},
    registering: false,
  };
  beforeEach(() => {
    wrapper = shallow(<SignupPage {...props} />);
  });
  it('should render SignupPage component', () => {
    wrapper = shallow(<SignupPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

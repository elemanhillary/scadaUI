import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  LoginPage, SignupPage,
  MyDropzone, PrivateRoute,
} from './components';
import { alertActions } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    dispatch(alertActions.clear());
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message
              && <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router>
              <div>
                <PrivateRoute exact path="/" component={MyDropzone} />
                <Route path="/signin" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };

export default App;

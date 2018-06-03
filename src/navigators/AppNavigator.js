import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import LoggedOut from '../screens/LoggedOut';
import LoggedIn from '../screens/LoggedIn';
import Login from '../screens/Login';
import ForgotPass from '../screens/ForgotPass';
import CreateAccountName from '../screens/CreateAccountName';
import CreateAccountCredentials from '../screens/CreateAccountCredentials';

export const AppNavigator = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    LoggedIn: { screen: LoggedIn },
    Login: { screen: Login },
    ForgotPass: { screen: ForgotPass },
    CreateAccountName: {screen: CreateAccountName},
    CreateAccountCredentials: {screen: CreateAccountCredentials},
});

const AppWithNavigationState = ({ dispatch, nav, listener }) => (
  <AppNavigator navigation={{ state: nav, dispatch: dispatch, addListener: listener}} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
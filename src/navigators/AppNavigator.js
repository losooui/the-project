import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, createStackNavigator } from 'react-navigation';
import LoggedOut from '../screens/LoggedOut';
import Login from '../screens/Login';
import ForgotPass from '../screens/ForgotPass';

export const AppNavigator = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    Login: { screen: Login },
    ForgotPass: { screen: ForgotPass },
});

const AppWithNavigationState = ({ dispatch, nav, listener }) => (
  <AppNavigator /*navigation={addNavigationHelpers({ state: nav, addListener: listener })}*/ />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
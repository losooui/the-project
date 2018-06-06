import { NavigationActions } from 'react-navigation';
import * as types from '../actions/types';
import { AppNavigator } from '../../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedOut'); //Switch to LoggedIn for easy test
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export const nav = (state = initialNavState, action) => {
    let nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};
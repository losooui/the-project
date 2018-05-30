import createReact from '../helpers/createReducer';
import { NavigationActions } from 'react-navigation';
import * as types from '../actions/types';
import { AppNavigator } from '../../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedOut');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export const nav = (state = initialNavState, action) => {
    let nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
}
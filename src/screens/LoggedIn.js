import React from 'react';
import { transparentHeaderStyle } from '../styles/navigation';
import TabBarNavigator from '../navigators/TabBarNavigator';

export default class LoggedIn extends React.Component {
    static navigationOptions = () => ({
        headerLeft: null,
        headerStyle: transparentHeaderStyle,
        gesturesEnabled: false,
    });
    
    render() {
        return (
            <TabBarNavigator />
        );
    }
}
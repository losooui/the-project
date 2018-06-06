import React from 'react';
import { transparentHeaderStyle } from '../styles/navigation';
import TabBarNavigator from '../navigators/TabBarNavigator';
import colors from '../styles/colors';

export default class LoggedIn extends React.Component {
    static navigationOptions = () => ({
        title: 'REEF',
        headerTintColor: colors.orange,
    });
    
    render() {
        return (
            <TabBarNavigator />
        );
    }
}
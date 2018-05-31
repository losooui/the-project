import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeContainer extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'HOME',
        tabBarIcon: ({ tintColor }) => (
            <Icon
            name="ios-home"
            size={22}
            color={tintColor}
            />
        ),
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
     wrapper: {
         display: 'flex',
         flex: 1,
         padding: 50,    
     }
 });
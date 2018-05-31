import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ExploreContainer extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
            <Icon
            name="ios-compass"
            size={22}
            color={tintColor}
            />
        ),
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Explore</Text>
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
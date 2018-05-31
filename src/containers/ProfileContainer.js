import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ProfileContainer extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => (
            <Icon
            name="md-person"
            size={22}
            color={tintColor}
            />
        ),
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Profile</Text>
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
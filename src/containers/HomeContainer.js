import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FeedCard from '../components/feedCard/FeedCard';

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
       /* if (this.props.data.loading) {
            return(
                <View>
                </View>
            );
       } */
        return (
            <View style={styles.wrappe}>
                <Text>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
     wrapper: {
         display: 'flex',
         flex: 1,
     }
 });
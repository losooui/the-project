import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions'
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

class ProfileContainer extends React.Component {
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
        console.log("this is the props >>>>>>", this.props.loggedOut.user.toString())
        return (
            <View style={styles.wrapper}>
                <Text>Profile</Text>
                <Text>User</Text>
                <Text>{JSON.stringify(this.props.loggedOut.user)}</Text>
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

 const mapStateToProps = (state) => {
    return {
        loggedOut: state.loggedOut,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
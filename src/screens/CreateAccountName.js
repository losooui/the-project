import React from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions'
import colors from '../styles/colors';
import{ transparentHeaderStyle } from '../styles/navigation';
import fonts from '../styles/fonts';
import BasicInput from '../components/inputs/BasicInput';
import NextButton from '../components/buttons/NextButton';
import Loading from '../components/Loading';
import NavBarButtonText from '../components/buttons/NavBarButtonText';

export default class CreateAccountName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            validName: false,
            name: '',
            username: '',
            validUsername: false,
            loadingVisible: false,
        }
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.onNextPress = this.onNextPress.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }

    static navigationOptions = ({ navigation }) => ({
        headerStyle: transparentHeaderStyle,
        headerTintColor: colors.white,
    });

    onNextPress() {
        this.setState({ loadingVisible: true });

        //This simulates a slow server response
        setTimeout(() => {
            const { username, name } = this.state;

            if (username === "aaaaaa") {
                alert("This username already exists");
                this.setState({ loadingVisible: false });
            } else {
                const { navigate } = this.props.navigation;
                navigate("CreateAccountCredentials", {
                    name: name,
                    username: username,
                });
                this.setState({ loadingVisible: false });

            }
        }, 2000);
        
    }

    handleNameChange(name) {
        this.setState({ name: name});

        if (!this.state.validName) {
            if (name.length > 0) {
                this.setState({ validName: true});
            }
        } else if (name.length < 1) {
            this.setState({ validName: false });
        }
    }

    //Observe changes in the password input
    handleUsernameChange(username) {
        this.setState({ username: username });

        if (!this.state.validUsername) {
            if (username.length > 3) {
                this.setState({ validUsername: true });
            } 
        } else if (username.length <= 3) {
            this.setState({ validUsername: false });
        }
    }

    toggleNextButtonState() {
        const { validName, validUsername } = this.state;
        if (validName && validUsername) {
            return true;
        }
        return false;
    }

    render() {
        const { loadingVisible } = this.state;
        return (
            <KeyboardAvoidingView 
            style={styles.wrapper}
            behavior="padding"
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}
                    keyboardShouldPersistTaps="handled">
                        <Text style={styles.header}>What's your name?</Text>
                        <BasicInput
                           labelText="NAME"
                           labelTextSize={14}
                           labelColor={colors.white}
                           textColor={colors.white}
                           cursorColor={colors.turquoise}
                           borderBottom={colors.white}
                           inputType="text"
                           customStyle={{marginBottom: 30}}
                           onChangeText={this.handleNameChange}
                        />
                        <BasicInput
                           labelText="USERNAME"
                           labelTextSize={14}
                           labelColor={colors.white}
                           textColor={colors.white}
                           cursorColor={colors.turquoise}
                           borderBottom={colors.white}
                           inputType="text"
                           customStyle={{marginBottom: 20}}
                           onChangeText={this.handleUsernameChange}
                        />  
                    </ScrollView>
                    <View style={styles.nextButton}> 
                            <NextButton
                            handleNextButton={this.onNextPress} 
                            enabled={this.toggleNextButtonState()}/>
                    </View>
                </View>
                <Loading
                modalVisible={loadingVisible} />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.orange,  
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
    },
    header: {
        fontSize: 34,
        color: colors.white,
        fontWeight: '200',
        marginBottom: 40,
    },
    nextButton: {
        alignItems: 'flex-end',
        right: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'transparent',
    }

});
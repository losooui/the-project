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


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            loadingVisible: false,
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onNextPress = this.onNextPress.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }

    static navigationOptions = ({ navigation }) => ({
        headerRight: <NavBarButtonText
        color={colors.white}
        location='right'
        text='Forgot Password?'
        handleOnPress={() => navigation.navigate('ForgotPass')}
         />,
        headerStyle: transparentHeaderStyle,
        headerTintColor: colors.white,
    });

    //TODO implement backend credentials validation
    onNextPress() {
        this.setState({ loadingVisible: true });

        //This simulates a slow server response
        setTimeout(() => {
            const { emailAddress, password } = this.state;
            if (this.props.logIn(emailAddress, password)) {
                this.setState({ formValid: true, loadingVisible: false });
                alert('good')
            } else {
                this.setState({ formValid: false, loadingVisible: false });
                alert('bad')
            }
        }, 2000);
        
    }

    handleEmailChange(email) {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.setState({ emailAddress: email});

        if (!this.state.validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({ validEmail: true});
            }
        } else {
            if (!emailCheckRegex.test(email)) {
                this.setState({ validEmail: false });
            }
        }
    }

    handlePasswordChange(password) {
        this.setState({ password: password });

        if (!this.state.validPassword) {
            if (password.length > 4) {
                this.setState({ validPassword: true });
            } 
        } else if (password.length <= 4) {
            this.setState({ validPassword: false });
        }
    }

    toggleNextButtonState() {
        const { validEmail, validPassword } = this.state;
        if (validEmail && validPassword) {
            return true;
        }
        return false;
    }
    //TODO polish: checkmarks, gradient, 
    render() {
        const { loadingVisible } = this.state;
        console.log("log:" + this.props.loggedInStatus);
        return (
            <KeyboardAvoidingView 
            style={styles.wrapper}
            behavior="padding"
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Log in</Text>
                        <BasicInput
                           labelText="EMAIL ADDRESS"
                           labelTextSize={14}
                           labelColor={colors.white}
                           textColor={colors.white}
                           cursorColor={colors.turquoise}
                           borderBottom={colors.white}
                           inputType="email"
                           customStyle={{marginBottom: 30}}
                           onChangeText={this.handleEmailChange}
                        />
                        <BasicInput
                           labelText="PASSWORD"
                           labelTextSize={14}
                           labelColor={colors.white}
                           textColor={colors.white}
                           cursorColor={colors.turquoise}
                           borderBottom={colors.white}
                           inputType="password"
                           customStyle={{marginBottom: 10}}
                           onChangeText={this.handlePasswordChange}
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
//TODO stop keyboard from disappearing
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
    loginHeader: {
        fontSize: 34,
        color: colors.white,
        fontWeight: '200',
        marginBottom: 40,
    },
    nextButton: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 20,
    }

});

const mapStateToProps = (state) => {
    return {
        loggedInStatus: state.loggedInStatus,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
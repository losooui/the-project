import React from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions'
import colors from '../styles/colors';
import{ transparentHeaderStyle } from '../styles/navigation';
import { human, systemWeights, sanFranciscoWeights} from 'react-native-typography';
import BasicInput from '../components/inputs/BasicInput';
import NextButton from '../components/buttons/NextButton';
import Loading from '../components/Loading';
import NavBarButtonText from '../components/buttons/NavBarButtonText';

const error = {
    general: "",
    email: "",
    password: ""
}


class CreateAccoutCredentials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            loadingVisible: false,
            error: error,
        }
        
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onNextPress = this.onNextPress.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }

    static navigationOptions = ({ navigation }) => ({
        headerStyle: transparentHeaderStyle,
        headerTintColor: colors.white,
    });


    //TODO implement backend credentials validation
    onNextPress() {
        this.setState({ loadingVisible: true });
        this.setState({ error: error });

        //This simulates a slow server response
        const params = this.props.navigation.state.params;
         const name = params.name;
         const username = params.username;

         const { emailAddress, password } = this.state;

         const data = { email: emailAddress, password, name, username };
         this.props.register(data, this.onSuccess, this.onError);        
    }

    onSuccess() {
         console.log('Success Callback')
         this.setState({ formValid: true, loadingVisible: false });

         const { navigate } = this.props.navigation;
         navigate('LoggedIn'); //Goes to the logged in screen
    }

    //TODO: add all different error alerts
    onError(error) {
        this.setState({ formValid: false, loadingVisible: false });
        alert("Oops, something went wrong. Try again.")

        let errObj = this.state.error;

        if (error.hasOwnProperty("message")) {
            errObj['general'] = error.message;
        } else {
            let keys = Object.keys(error);
            keys.map((key, index) => {
                errObj[key] = error[key];
            })
        }
        this.setState({error: errObj});

        console.log(this.state.error)
    }

    //Observe changes in the email input
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

    //Observe changes in the password input
    handlePasswordChange(password) {
        this.setState({ password: password });

        if (!this.state.validPassword) {
            if (password.length > 5) {
                this.setState({ validPassword: true });
            } 
        } else if (password.length <= 5) {
            this.setState({ validPassword: false });
        }
    }

    //Activate the next button when a valid email and pass are entered
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
                    <ScrollView style={styles.scrollView}
                    keyboardShouldPersistTaps="handled">
                        <Text style={styles.header}>Email and Password</Text>
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
                           customStyle={{marginBottom: 20}}
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
    header: {
        ...human.largeTitleObject,
        color: colors.white,
        ...systemWeights.light,
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

const mapStateToProps = (state) => {
    return {
        loggedInStatus: state.loggedInStatus,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccoutCredentials);
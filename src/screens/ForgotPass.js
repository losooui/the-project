import React from 'react';
import {View, ScrollView, Text, KeyboardAvoidingView, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions'
import{ transparentHeaderStyle } from '../styles/navigation';
import { human, systemWeights, sanFranciscoWeights} from 'react-native-typography';
import BasicInput from '../components/inputs/BasicInput';
import NextButton from '../components/buttons/NextButton';
import Loading from '../components/Loading';
import NavBarButtonText from '../components/buttons/NavBarButtonText';

const error = {
    general: "",
    email: ""
}

class ForgotPass extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            validEmail: false,
            loadingVisible: false,
            emailAddress:'',
            formValid: false,
            error: error,
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.onNextPress = this.onNextPress.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    static navigationOptions = ({ navigation }) => ({
        headerStyle: transparentHeaderStyle,
        headerTintColor: colors.white,
    });

    
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

    //TODO send a recovery email to the user
    onNextPress() {
        this.setState({ loadingVisible: true });
        //Clears the error
        this.setState({ error: error });

        //Checks if an account is connected to that email, if yes sends an emai
        const { emailAddress } = this.state;
        this.props.resetPassword(emailAddress, this.onSuccess, this.onError);           
    }

    onSuccess() {
        this.setState({ formValid: true, loadingVisible: false });
        alert("An email was sent to " + this.state.emailAddress + ".");
    }

    onError(error) {
        this.setState({ formValid: false, loadingVisible: false });
        let errObj = this.state.error;

        if (error.code === "auth/user-not-found") {
            alert("This email isn't linked to any account.")
        }

        if (error.hasOwnProperty("message")) {
            errObj['general'] = error.message;

        } else {
            let keys = Object.keys(error);
            keys.map((key, index) => {
                errObj[key] = error[key];
            })
        }
        
        this.setState({error: errObj});
    }

    toggleNextButtonState() {
        const { validEmail } = this.state;
        if (validEmail) {
            return true;
        }
        return false;
    }

    render() {
        const { loadingVisible } = this.state;
        return (
            <KeyboardAvoidingView
            style={styles.wrapper}
            behavior="padding">
                <ScrollView style={styles.form}
                keyboardShouldPersistTaps="handled">
                   <Text style={styles.heading}>Forgot your password?</Text>
                   <Text style={styles.subheading}>Enter your email to reset your password.</Text>
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
                </ScrollView>
                <View style={styles.nextButton}> 
                     <NextButton
                      handleNextButton={this.onNextPress} 
                      enabled={this.toggleNextButtonState()}/>
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
    form: {
        marginTop: 90,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
    },
    heading: {
        ...human.title1Object,
        color: colors.white,
        ...systemWeights.light,
    },
    subheading: {
        color: colors.white,
        ...systemWeights.regular,
        ...human.subdeadObject,
        marginTop: 10,
        marginBottom: 60,
    },
     nextButton: {
        alignItems: 'flex-end',
        right: 20,
        paddingBottom: 20,
        paddingTop: 20,
    },
});

const mapStateToProps = (state) => {
    return {
        loggedInStatus: state.loggedInStatus,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);
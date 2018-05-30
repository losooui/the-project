import React from 'react';
import {View, Text, KeyboardAvoidingView, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import BasicInput from '../components/inputs/BasicInput';
import NextButton from '../components/buttons/NextButton';
import Loading from '../components/Loading';

export default class ForgotPass extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            validEmail: false,
            loadingVisible: false,
            emailAddress:'',
            formValid: false,
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.onNextPress = this.onNextPress.bind(this);
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

    //TODO send a recovery email to the user
    onNextPress() {
        this.setState({ loadingVisible: true });

        //Checks if an account is connected to that email, if yes sends an email
        setTimeout(() => {
            if (this.state.emailAddress === 'wrong@gmail.com') {
               alert('no account connected to that email')
               this.setState({ formValid: false, loadingVisible: false });
            } else {
               this.setState({ formValid: true, loadingVisible: false });
               alert('email sent');
            }
        }, 2000);        
        
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
                <View style={styles.form}>
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
                </View>
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
        fontSize: 28,
        color: colors.white,
        fontWeight: '200'
    },
    subheading: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 60,
    },
     nextButton: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 20,
    },
})
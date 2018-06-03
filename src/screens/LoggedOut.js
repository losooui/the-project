import React from 'react';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import{ transparentHeaderStyle } from '../styles/navigation';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions'
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButtonText from '../components/buttons/NavBarButtonText';

export default class LoggedOut extends React.Component {
  constructor(props) {
      super(props);
      
      this.onCreateAccountPress = this.onCreateAccountPress.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
      headerRight: <NavBarButtonText
      color={colors.white}
      location='right'
      text='Log In'
      handleOnPress={() => navigation.navigate('Login')}
       />,
      headerStyle: transparentHeaderStyle,
      headerTintColor: colors.white,
  });

  onFacebookPress() {
      alert('Fb button pressed')
  }
  onCreateAccountPress() {
      const { navigate } = this.props.navigation;
      navigate("CreateAccountName");
  }
  render() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
                <Image 
                 source={require('../img/reef-logo-white.png')}
                 style={styles.logo}
                 />
                 <Text style={styles.welcomeText}>Discover Reef</Text>
                 <RoundedButton
                 text='Continue with Facebook'
                 textColor={colors.orange}
                 background={colors.white}
                 icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
                handleOnPress={this.onFacebookPress} />
                <RoundedButton
                 text='Create Account'
                handleOnPress={this.onCreateAccountPress} />

                <View style={styles.termsAndConditions}>
                   <Text style={styles.termsText}>By tapping Continue or Create Account, I agree to </Text>
                    <Text style={styles.termsText}>Reef's </Text>
                   <TouchableHighlight style={styles.linkButton}>
                       <Text style={styles.termsText}>Terms of Service</Text>
                    </TouchableHighlight>
                     <Text style={styles.termsText}>, </Text>
                   <TouchableHighlight style={styles.linkButton}>
                       <Text style={styles.termsText}>Payments Term of Service</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>, and </Text>
                   <TouchableHighlight style={styles.linkButton}>
                       <Text style={styles.termsText}>Pricacy Policy</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>.</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.orange,
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 60,
        padding: 20,
    },
    logo: {
        width: 100,
        height: 50,
        right: 10,
        marginBottom: 30,
       // alignSelf: 'center',
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '100',
        color: colors.white,  
        marginBottom: 40,
       // alignSelf: 'center',
    },
    facebookButtonIcon: {
        color: colors.orange,
        position: 'relative',
        left: 20,
        zIndex: 8,
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: '200',
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,       
    }

});

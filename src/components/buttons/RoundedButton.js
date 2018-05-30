import React from 'react';
import { PropTypes } from 'prop-types';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts'
import {Text, View, TouchableHighlight, StyleSheet,} from 'react-native';

export default class RoundedButton extends React.Component {
    render() {
        const { text, textColor, background, icon, handleOnPress } = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || colors.white;
        return(
            <TouchableHighlight 
            style={[{backgroundColor}, styles.wrapper]}
            onPress={handleOnPress}>
            <View style={styles.buttonTextWrapper}>
                {icon}
                <Text style={[{color}, styles.buttonText]}>{text}</Text>
            </View>
            </TouchableHighlight>
        );
    } 
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    background: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func.isRequired,

};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
        alignItems: 'center',
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonText: {
        fontSize: 17,
        width: '100%',
        textAlign: 'center',
    },
});


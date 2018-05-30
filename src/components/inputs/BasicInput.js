import React from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {View, Text, TextInput, TouchableOpacity, StyleSheet,} from 'react-native';

export default class BasicInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secureInput: props.inputType === 'password' ? true : false,
        };
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
    }

    toggleShowPassword() {
        this.setState({ secureInput: !this.state.secureInput });
    }
    render() {
        const { labelText, labelTextSize, labelColor, textColor, cursorColor, borderBottom, inputType, customStyle, onChangeText} = this.props;
        const fontSize = labelTextSize || 14;
        const { secureInput } = this.state;
        const color = labelColor || colors.white;
        const inputColor = textColor || colors.white;
        const borderBottomColor = borderBottom || "transparent";
        return(
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
                {inputType === 'password'? 
                <TouchableOpacity 
                style={styles.showIcon}
                onPress={this.toggleShowPassword}>
                    { secureInput ? <Icon name="eye" color={colors.white} size={18} style={styles.icon} /> : <Icon name="eye-slash" color={colors.white} size={18} style={styles.icon} />}                  
                </TouchableOpacity>
                : null }
                <TextInput autoCorrect={false}
                underlineColorAndroid="transparent"
                style={[{color: inputColor, borderBottomColor}, styles.inputField]}
                selectionColor={cursorColor}
                secureTextEntry={secureInput}
                onChangeText={onChangeText}
                 />
            </View>
        );
    }
}

BasicInput.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    cursorColor: PropTypes.string,
    borderBottom: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle: PropTypes.object,
    onChangeText: PropTypes.func,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    label: {
        fontWeight:'500',
        marginBottom: 10,
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
    },
    showIcon: {
        position: 'absolute',
        right: 0,
        height: 24,
        width: 24,
        backgroundColor: 'transparent',
    },
});
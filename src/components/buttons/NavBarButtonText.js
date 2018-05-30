import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class NavBarButton extends React.Component {
    render() {
        const { location, text, color, handleOnPress } = this.props;
        const marginPosition = location === 'right' ? { marginRight: 20 } : { marginLeft: 20 };

        return (
            <TouchableOpacity onPress={handleOnPress}>
                <Text style={[{color}, marginPosition, styles.text]}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

NavBarButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    location: PropTypes.string,
    handleOnPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
    }
}); 
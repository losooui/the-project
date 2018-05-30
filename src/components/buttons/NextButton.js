import React from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableHighlight, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default class NextButton extends React.Component {
    render() {
        const { enabled, handleNextButton } = this.props;
        const opacityStyle = enabled ? 0.6:0.2;
        return (
            <TouchableHighlight 
            style={[{opacity: opacityStyle}, styles.button]}
            onPress={handleNextButton}
            disabled={!enabled}
            >
                <Icon name="angle-right" color={colors.orange} size={32} style={styles.icon} />
            </TouchableHighlight>
        );
    }
}

NextButton.propTypes = {
    enabled: PropTypes.bool,
    handleNextButton: PropTypes.func,
}

//change to sqare
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        width: 60,
        height: 60,
        backgroundColor: colors.white,
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
    }
});

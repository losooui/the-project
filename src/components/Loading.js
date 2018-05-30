import React from 'react';
import { PropTypes } from 'prop-types';
import colors from '../styles/colors';
import {View, Image, Modal, Text, StyleSheet, } from 'react-native';

export default class Loading extends React.Component {
    render() {
        const { modalVisible } = this.props;
        return (
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}>
                <View style={styles.wrapper}>
                    <View style={styles.loadingContainer}>
                        <Image
                            style={styles.image}
                            source={require('../img/loading.gif')}
                         />
                    </View>
                </View>
            </Modal>
        );
    }
}

Loading.propTypes = {
    modalVisible: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    loadingContainer: {
        width: 90,
        height: 90,
        backgroundColor: colors.white,
        borderRadius: 15,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -45,
        marginTop: -45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    }
})
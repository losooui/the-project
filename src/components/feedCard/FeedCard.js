import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';
import colors from '../../styles/colors';
import Header from './Header';
import Meta from './Meta'
import ActionButtons from './ActionButtons'
import AddToBag from './AddToBag'

export default class FeedCard extends React.Component {
    render() {
    const image = "https://static1.squarespace.com/static/57e2f14d29687f319233dc34/594b21814f14bc9c95155ff7/594b218117bffc52929c0b52/1498160525873/IMG_7899.jpg";
        return(
            <ScrollView style={styles.wrapper}>
                <Header />
                <ImageBackground source={{ uri: image }} style={styles.image}>
                    <AddToBag />
                </ImageBackground>
                <Meta />
                <ActionButtons />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.white,
    }, 
    image: {
        flex: 1,
        height: 400,
        justifyContent: 'flex-end',
    }
});
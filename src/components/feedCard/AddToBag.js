import React from 'react';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts'
import {Text, View, TouchableHighlight, StyleSheet,} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { human, systemWeights } from 'react-native-typography';

export default class AddToBag extends React.Component {
    render() {
        return(
            <View style={styles.wrapper}>
               <TouchableHighlight style={styles.button}>
                    <View style={styles.buttonWrapper}>
                        <View style={styles.iconWrapper}>
                            <Icon
                            name="bag"
                            size={22}
                            color={colors.white}
                        />
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={styles.text}></Text>
                        </View>
                    </View>
               </TouchableHighlight>
            </View>
        );
    } 
}


const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'blue',
        justifyContent: 'flex-end',
        padding: 8
        ,
    },
    button: {
        flex: 0.20,
        height: 42,
        borderRadius: 21,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 42,
        borderRadius: 21,
        backgroundColor: 'rgba(255, 85, 85, 0.9)',
    },
    iconWrapper: {
      //  backgroundColor: 'red',
        paddingRight: 0,
    },
    textWrapper: {
      //  backgroundColor: 'green',
    },
    text: {
        ...human.footnoteObject,
         color: colors.white,
    },
});


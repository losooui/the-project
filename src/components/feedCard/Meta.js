import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { makeCircle, makeRounedRec } from '../../utils/metrics';
import { human, systemWeights, sanFranciscoWeights} from 'react-native-typography';

export default class Meta extends React.Component {
    render() {
        const price = "$69";
        const item = "Some random Item for sale";
        return (
            <View style={styles.wrapper}>
                <View style={styles.topWrapper}>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={styles.sep}>•</Text>
                    <TouchableOpacity>
                        <Text style={styles.details}>Details</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomWrapper}>
                    <Text style={styles.item}>{item}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    topWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
       // backgroundColor: 'blue',
    },
    bottomWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      //  backgroundColor: 'yellow',
    },
    price: {
       // ...human.footernoteObject,   
        ...human.footnoteObject,
        ...systemWeights.semibold,    
    },
    details: {
        ...human.footnoteObject,
        color: colors.lightgrey,
        ...systemWeights.light,
    },
    item: {
        ...human.footnoteObject,
        color: colors.black,
        ...systemWeights.regular,
    },
    sep: {
        paddingHorizontal: 4,
    }

});

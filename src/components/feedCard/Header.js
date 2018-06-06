import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons'
import { makeCircle, makeRounedRec } from '../../utils/metrics';
import { human, systemWeights} from 'react-native-typography';

export default class Header extends React.Component {
    render() {
        const username = "Username";
        const image = "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg";
        return (
            <View style={styles.wrapper}>
                <View style={styles.userMetaWrapper}>
                    <View style={styles.avatarWrapper}>
                        <Image source={{ uri: image }} style={styles.avatarImage} />
                    </View>
                    <View style={styles.userInfoWrapper}>
                        <Text style={styles.username}>{username}</Text>
                    </View>
                </View>
                <View style={styles.optionsWrapper}>
                    <TouchableOpacity>
                        <Icon
                         name="ios-more"
                         size={22}
                         color={colors.black}
                    />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    userMetaWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    optionsWrapper: {
        flex: 0.1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    avatarWrapper: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarImage: {
        ...makeRounedRec(42, 10),
    },
    userInfoWrapper: {
        justifyContent: 'center',
        paddingLeft: 16,
    },
    username:{
        ...human.subheadObject,
        ...systemWeights.semibold
    },
    /*action:{
        fontWeight: '300',
        fontSize: 14,
        color: colors.lightgrey,
    }*/
});
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import { human, systemWeights} from 'react-native-typography';

export default class ActionButtons extends React.Component {
    render() {
        return(
            <View style={styles.wrapper}>
                <View style={styles.topLineWraper}>
                    <View style={styles.topLine}/>
                </View>
                <View style={styles.actionWrapper}>
                    <View style={styles.numberWrapper}>
                        <Text style={styles.numberText}>Be the first to like this</Text>
                    </View>
                    <View style={styles.buttonsWrapper}>
                    <View style={styles.likeWrapper}>
                        <TouchableOpacity style={styles.likeButton}>
                            <Icon
                            name="heart" 
                            size={22}
                            color={colors.darkgrey} />
                        </TouchableOpacity>
                        <Text style={styles.like}></Text>
                    </View>
                    <View style={styles.commentWrapper}>
                        <TouchableOpacity style={styles.commentButton}>
                            <Icon
                            name="message-circle" 
                            size={22}
                            color={colors.darkgrey} />
                        </TouchableOpacity>
                        <Text style={styles.comment}></Text>
                    </View>
                    <View style={styles.shareWrapper}>
                        <TouchableOpacity style={styles.shareButton}>
                            <Icon
                            name="repeat" 
                            size={22}
                            color={colors.darkgrey} />
                        </TouchableOpacity>
                        <Text style={styles.share}></Text>
                    </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
    },
    topLineWraper: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    topLine: {
        flex: 0.96,
        height: 0.5,
        backgroundColor: colors.lightgrey,
    },
    actionWrapper: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        flexDirection: 'row',
       // backgroundColor: colors.black,
    },
    numberWrapper: {
        flex: 2/3,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
       // backgroundColor: 'blue',
    },
    buttonsWrapper: {
        flex: 1/3,
        flexDirection: 'row',
        justifyContent: 'flex-end',
       // backgroundColor: 'green',
    },
    numberText: {
        ...human.caption1Object,
        ...systemWeights.regular,
        color: colors.darkgrey,
    },
    likeWrapper: {
        flexDirection: 'row',
      //  backgroundColor: 'blue',
        alignItems: 'center',
    },
    commentWrapper: {
        flexDirection: 'row',
      //  backgroundColor: 'red',
        alignItems: 'center',
    },
    shareWrapper: {
        flexDirection: 'row',
      //  backgroundColor: 'green',
        alignItems: 'center',
    },
    likeButton: {
        paddingRight: 4,
    },
    commentButton: {
        paddingRight: 4,
    },
    shareButton: {
        paddingRight: 4,
    },
    like: {
        ...human.caption1Object,
        color: colors.darkgrey,
      //  ...systemWeights.light,
        paddingRight: 16,
    },
    share: {
        ...human.caption1Object,
        color: colors.darkgrey,
        paddingRight: 0,
    },
    comment: {
        ...human.caption1Object,
        color: colors.darkgrey,
        paddingRight: 16,
    }
});
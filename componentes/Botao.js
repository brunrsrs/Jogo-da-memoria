import React from 'react';
import { Text, TouchableHighlight, StyleSheet, Dimensions, Button, Pressable } from 'react-native';

export const BotaoDefault = props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={style.botao}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

export const BotaoPequeno = props2 => {
    return (
        <TouchableHighlight onPress={props2.onClick}>
            <Text style={style.botao2}>
                {props2.label}
            </Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create ({
    botao: {
        fontSize: 30,
        height: Dimensions.get('window').width/5,
        width: Dimensions.get('window').width/2,
        padding: 18,
        marginBottom: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black',

    },

    botao2: {
        fontSize: 15,
        height: Dimensions.get('window').width/8,
        width: Dimensions.get('window').width/4,
        padding: 14,
        marginBottom: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black'
    },
})
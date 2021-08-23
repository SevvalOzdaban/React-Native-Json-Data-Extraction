import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (

        <TouchableOpacity onPress={onPress} style={styles.buttonStyle} activeOpacity={0.6}>
            <Text style={styles.textStyle}> {children} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,

    },
    buttonStyle: {
        flex: 1,
        color: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5

    }

};
export default Button;
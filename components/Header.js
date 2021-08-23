import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyle, viewStyle} = styles;

    return(
        <View style = {viewStyle}>
            <Text style = {textStyle}> {props.headerText} </Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#6ef5ff',
        height: 60,

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        shadowOffset: {widht: 0, height:2},
        shadowOpacity: 0.5,

    }
};

export default Header;



import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View>
            <Text>Pizza Bro's</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        padding: 10,
        backgroundColor: '#FCBF3F'
    }
});

export default Header;
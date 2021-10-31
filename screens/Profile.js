import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../constants/profile.jpg')}
                style={styles.img}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:  'center'
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 50
    }
});

export default ProfileScreen;
import React from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import MenuItems from '../constants/MenuItems';

const MenuScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    MenuItems.map( food => {
                        return (
                            <Pressable 
                                key={food.name}
                                onPress={handlePress}
                                >
                                <View>
                                <Image
                                    source={food.img}
                                    style={styles.item}
                                />
                                <Text style={styles.price}>
                                    {food.price}
                                </Text>
                            </View>
                            </Pressable>
                        );
                    }
                    )
                }
            </ScrollView>
        </View>
        
    );
}

const handlePress = () => {
    // return (
        Alert.alert("pressed");
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F2AA3D'
        
    },
    item: {
        width: 300,
        height: 300,
        margin: 20
    },
    price: {
        marginLeft: 20,
        fontSize: 20
    }
});

export default MenuScreen;
import React from 'react';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DrawerItems from '../constants/DrawerItems';
import ProfileScreen from '../screens/Profile';
import MenuScreen from '../screens/Menu';
import SettingsScreen from '../screens/Settings';

const Drawer = createDrawerNavigator();
const NavigationBar = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <Drawer.Navigator
                drawerType='front'
                initialRouteName='Menu'
            >
            {
                DrawerItems.map( drawer => 
                    <Drawer.Screen 
                        key={drawer.name}
                        name={drawer.name}
                        component={
                            drawer.name==='Menu' ? MenuScreen : 
                            drawer.name==='Profile' ? ProfileScreen : SettingsScreen
                        }
                    />)
            }
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const MyTheme = {
    dark: false,
    colors: {
        primary: 'black',
        background: '#F2AA3D',
        card: '#F2AA3D',
        text: 'black',
        border: '#F2AA3D',
        notification: 'white',
    }
};

export default NavigationBar;
import React from 'react';
import {Platform, Text, View, StatusBar} from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';
//import Colors from '../constants/Colorss';
import Colors from "../Constants/Colors"
import HomeScreen from '../Screens/HomeScreen';
import LinksScreen from '../Screens/LinksScreen';
import SettingsScreen from '../Screens/SettingsScreen';

export default DrawerNavigator({
    Today: {
        screen: HomeScreen
    },
    Upcoming: {
        screen: LinksScreen
    },
    Someday: {
        screen: SettingsScreen
    }
});

// export default TabNavigator({     Home: {         screen: HomeScreen,
// navigationOptions: {             tabBarLabel: '笑话'         }     }, Links: {
// screen: LinksScreen     },     Settings: {         screen: SettingsScreen  }
// }, {     navigationOptions: ({navigation}) => ({ tabBarIcon: ({focused}) =>
// {             const {routeName} = navigation.state;  let iconName; switch
// (routeName) {             case 'Home':                iconName = "Home"   //
// iconName = Platform.OS === 'ios' ? `ios-information-circle${focused ? '' //
// : '-outline'}` : 'md-information-circle';       break; case 'Links': iconName
// = "Links" // iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' :
// '-outline'}` // : 'md-link';   break;    case 'Settings': iconName =
// "Settings" // iconName = Platform.OS === 'ios' ? `ios-options${focused ? '' :
//         // '-outline'}` : 'md-options';             }    return (     <Text>
// {iconName} </Text>             );         }     }), tabBarOptions: {
// showLabel: false,     style: { backgroundColor: Colors.gray4, borderTopColor:
// "transparent",     height: 50         }   }, tabBarComponent: TabBarBottom,
// tabBarPosition: 'bottom', animationEnabled: false,     swipeEnabled: false
// });
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import BlankScreen from '../screens/BlankScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {COLORS} from '../theme/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon focused={focused} title={'Home'} iconName={'home'} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Leagues"
        component={BlankScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon
              focused={focused}
              title={'Leagues'}
              iconName={'trophy'}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Research"
        component={BlankScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon
              focused={focused}
              title={'Research'}
              iconName={'search'}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Leaderboard"
        component={BlankScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon
              focused={focused}
              title={'Leaderboard'}
              iconName={'bargraph'}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon focused={focused} title={'Profile'} iconName={'user'} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    backgroundColor: COLORS.whiteBG,
    borderTopWidth: 0,
    elevation: 5,
    // shadowColor: 'rgba(0,0,0,0.06)',
    borderTopColor: 'transparent',
    paddingBottom: 15,
  },
});

export default TabNavigator;

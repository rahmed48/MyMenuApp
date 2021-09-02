import * as React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Cart} from '../pages';
import {colors} from '../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  const stateGlobal = useSelector(state => state);

  if (stateGlobal.length > 0) {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.inactive,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 60,
            borderTopWidth: 0,
            elevation: 20,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="food-fork-drink"
                color={color}
                size={43}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            headerShown: false,
            tabBarBadgeStyle: {
              position: 'absolute',
              top: -5,
              backgroundColor: colors.primary,
              color: colors.secondary,
            },
            tabBarBadge: stateGlobal.length,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="cart" color={color} size={40} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inactive,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 60,
          borderTopWidth: 0,
          elevation: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              color={color}
              size={43}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarBadgeStyle: {
            position: 'absolute',
            top: -5,
            backgroundColor: colors.primary,
            color: colors.secondary,
          },
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cart" color={color} size={40} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Router;

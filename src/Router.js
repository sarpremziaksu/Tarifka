/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./pages/Categories/Categories";
import Meals from "./pages/Meals/Meals";
import Detail from "./pages/Detail/Deail";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Categories" 
          component={Categories} 
          options={{
            title: 'Categories',
            headerTitleAlign: 'center', // Başlığı ortalar
            headerTintColor: '#fada5e', // Başlık rengini sarı yapar
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            headerTitleAlign: 'center', 
            headerTintColor: '#fada5e',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
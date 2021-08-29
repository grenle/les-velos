import React from "react";
import { NavigationContainer } from "@react-navigation/native"; //pour la navigation entre écrans
import { ActivityIndicator } from "react-native"; //pour le loading
import Dashboard from "./components/dashboard/Dashboard";
import LogReg from "./components/log-reg";
import Profil from "./components/Profil"
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"; //choix entre top bar ou bottom bar
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomIcon from "./components/common/CustomIcon";
import { useUser } from "./hooks/useUser"; //custom hook pour la gestion de l'utilisateur connecté

// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function Main() {
  const { isConnected } = useUser();

  if (isConnected === "loading") return <ActivityIndicator />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NotConnected"
          component={LogReg}
          options={() => ({
            header: () => <></>,
          })}
        />
        <Stack.Screen
          name="Connected"
          component={Connected}
          options={() => ({
            header: () => <></>,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Connected() {
  return (
    <Tab.Navigator headerLeft={<></>}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Mon Tableau de Bord",
          tabBarIcon: ({ color }) => <CustomIcon color={color} name="home" />,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: "Mon Profil",
          tabBarIcon: ({ color }) => (
            <CustomIcon color={color} name="account" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

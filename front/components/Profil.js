import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, Text, Button } from "react-native-paper";
import { useUser } from "../hooks/useUser";

export default function Profil(props) {
    const {navigation} = props
    const { logout } = useUser()

    const handleLogout = async () => {
        await logout()
        navigation.navigate("NotConnected")
    }

  return (
    <>
      <View>
        <Title>Mon profil</Title>
        <Text>TO DO : créer la page profil</Text>
        <Button onPress={handleLogout}>
            Se déconnecter
        </Button>
      </View>
    </>
  );
}

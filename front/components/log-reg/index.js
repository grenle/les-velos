import { rosybrown } from "color-name";
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import { useUser } from "../../hooks/useUser";

import Login from "./login";
import Register from "./register";

export default function LogReg(props) {
  const { navigation } = props;
  const { isConnected } = useUser();

  const { setUsername, setToken } = props;
  const [registering, setRegistering] = useState(false);

  const goToDashboard = () => navigation.navigate("Connected");

  if (isConnected === true) goToDashboard();

  return (
    <>
      <View style={styles.buttonContainer}>
        <Button onPress={() => setRegistering(true)} title="S'inscrire" />
        <Button onPress={() => setRegistering(false)} title="Se Connecter" />
      </View>
      {registering ? (
        <Register
          setUsername={setUsername}
          setToken={setToken}
          goToDashboard={goToDashboard}
        />
      ) : (
        <Login
          setUsername={setUsername}
          setToken={setToken}
          goToDashboard={goToDashboard}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Title,
  TextInput,
  Button,
} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { login } from "../../../api";
import { useUser } from "../../../hooks/useUser";

export default function LogReg(props) {
  const { goToDashboard } = props;

  const { saveUser } = useUser();
  // const { setUsername, setToken } = props;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [logged, setLogged] = useState(null);

  const onLogin = async () => {
    const response = await login({ email, password });
    if (response.success === true) {
      setLogged(true);
      await saveUser(response);
      goToDashboard();
    }
    if (response.success === false) {
      setLogged(false);
    }
    // if(response.success){
    //     setToken(response.token)
    //     setUsername(response.name)
    // }
  };
  return (
    <>
      <View icon="lock">
        <MaterialCommunityIcons name="lock" size={26} style={styles.icons} />
        <Title style={styles.title}>Veuillez saisir vos identifiants</Title>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="default"
        placeholder="Email"
        mode="outlined"
        label="Email"
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        secureTextEntry={true}
        placeholder="Mot De Passe"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        label="Mot de passe"
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={onLogin}
        color="lightgrey"
      >
        Se connecter
      </Button>
      {logged === true && <Text>Vous êtes connecté !!!</Text>}
      {logged === false && <Text>Erreur mot de passe ou email inconnu</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  view: {
    flexDirection: "column",
    marginTop: 30,
  },
  title: {
    textAlign: "center",
  },
  icons: {
    tintColor: "lightgrey",
    textAlign: "center",
  },
  button: {
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  link: {
    textAlign: "right",
    marginRight: 40,
    marginTop: 10,
    color: "blue",
  },
});

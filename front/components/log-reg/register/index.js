import React, { useState } from "react";
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,

} from "react-native";
import { DefaultTheme, Provider as PaperProvider, Title, TextInput, Avatar, Button, Checkbox } from 'react-native-paper';
import { register } from "../../../api";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function LogReg(props) {
  const { setUsername, setToken } = props;
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [checked, setChecked] = useState(false);
  const [success, setSuccess] = useState(null);

  const onRegister = async () => {
    const response = await register({ name, email, password });

    if (response.success === true) {
      setSuccess(true)
    }
    if (response.success === false) {
      setSuccess(false)
    }
    // if (response.success) {
    //   setUsername(response.name);
    //   setToken(response.token);
    // }
  };

  function handleChangeName(nameFieldValue) {
    setName(nameFieldValue);
  }
  function handleChangeEmail(emailFieldValue) {
    setEmail(emailFieldValue);
  }
  function handleChangePassword(passwordFieldValue) {
    setPassword(passwordFieldValue);
  }


  return (
    <View style={styles.view}>
      <View icon="lock">
        <MaterialCommunityIcons name="lock" size={26} style={styles.icons} />
        <Title style={styles.title}>Veuillez saisir vos informations
        </Title>
      </View>

      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Prénom Nom"
        onChangeText={handleChangeName}
        mode="outlined"
        label="Prénom Nom"
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Email"
        onChangeText={handleChangeEmail}
        mode="outlined"
        label="Email"
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        secureTextEntry={true}
        placeholder="Mot De Passe"
        onChangeText={handleChangePassword}
        mode="outlined"
        label="Mot de passe"
      />
      <Checkbox.Item label="Je souhaite m'inscrire"
        style={styles.button}
        position="leading"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />

      <Button style={styles.button} mode="contained" onPress={onRegister} color="lightgrey" >
        S'inscrire
      </Button>
      <Text style={styles.link} t>Déjà inscrit ? Se connecter</Text>
      {success === true && <Text>Votre compte a bien été créé !</Text>}
      {success === false && <Text>Cette adresse email est déjà prise !</Text>}
    </View>
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
    marginTop: 30
  },
  title: {
    textAlign: "center"
  },
  icons: {
    tintColor: "lightgrey",
    textAlign: "center"
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
    color: "blue"
  }
});

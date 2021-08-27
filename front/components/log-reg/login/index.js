import React, {useState} from 'react'
import { Button, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import { login } from '../../../api'

export default function LogReg(props){
    const { setUsername, setToken } = props
    const [email, setEmail] = useState('g@g.com')
    const [password, setPassword] = useState('123')
    const onLogin = async () => {
        const response = await login({email, password})
        if(response.success){
            setToken(response.token)
            setUsername(response.name)
        }
    }
    return (
        <>
        <View style={{
        borderColor: "black", borderStyle: "solid", borderWidth: 2, marginLeft: 2, marginBottom: 10, borderRadius: 10
      }}>
        <Text style={{ fontSize: 28, fontWeight: "bold"}}>A propos</Text>

        <Text style={{fontSize:18 }}>
          Vous ne parvenez pas à gérer le dosage du Préviscan ?
          Notre application CoTCoeur est une solution innovante de calcul de celui-ci.
          CoTCoeur a été conçu par une équipe de battantes ; nous avons le code dans le sang et il nous tient à cœur de concevoir une application, simple, fiable et efficace.
        </Text>

      </View >
            <Text>Veuillez saisir vos identifiants</Text>
            <Text>Email</Text>
            <TextInput onChangeText={setEmail} value={email} style={styles.input} keyboardType="email-address" placeholder="Email" />
            <Text>Mot de Passe</Text>
            <TextInput onChangeText={setPassword} value={password} style={styles.input} keyboardType="default" secureTextEntry={true} placeholder="Mot De Passe" />
            <Button title="Go" onPress={onLogin} />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginVertical: 10
    },
});  
import React, {useState} from 'react'
import { Button, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

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
})
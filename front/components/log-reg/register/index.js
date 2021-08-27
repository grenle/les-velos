import React, {useState} from 'react'
import { Button, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import { register } from '../../../api'

export default function LogReg(props){
    const { setUsername, setToken } = props
    const { name, setName } = useState('name')
    const { email, setEmail } = useState('email')
    const { password, setPassword } = useState('password')
    const onRegister = async () => {
        const response = await register({name, email, password})
        if(response.success){
            setUsername(response.name)
            setToken(response.token)
        }
    }
    return (
        <>
            <Text>Veuillez saisir vos informations</Text>
            <Text>Nom</Text>
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Nom" />
            <Text>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" placeholder="Email" />
            <Text>Mot de Passe</Text>
            <TextInput style={styles.input} keyboardType="default" secureTextEntry={true} placeholder="Mot De Passe" />
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
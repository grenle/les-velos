import { rosybrown } from 'color-name';
import React, {useState} from 'react'
import { Button, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import Login from './login'
import Register from './register'

export default function LogReg(props){
    const { setUsername, setToken } = props
    const [registering, setRegistering] = useState(false)
    return (
        <>
            <View style={styles.buttonContainer}>
                <Button onPress={() => setRegistering(true)} title="S'inscrire" />
                <Button onPress={() => setRegistering(false)} title="Se Connecter" />
            </View>
            {
            registering ?
                <Register setUsername={setUsername} setToken={setToken} /> :
                <Login setUsername={setUsername} setToken={setToken} />
            }
        </>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})
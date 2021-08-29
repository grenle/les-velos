import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, ScrollView, SafeAreaView, Text, TextInput } from 'react-native';
import Pies from "./components/dashboard/dosage/pills/pies"
import InrModal from './components/inr-modal'

import LogReg from './components/log-reg'
import Dashboard from  './components/dashboard'

import { getUserHistory } from './api'

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [username, setUsername] = useState(false)
  const [token, setToken] = useState(false)
  const [history, setHistory] = useState(false)
  useEffect(() => {
    (async () => {
      if (token) {
        const h = await getUserHistory()
        setHistory(h)
      }
    })()
  }, [token])
  const hasHistory = history && history.length
  const latest = hasHistory ? history[history.length-1] : false
  const dosage = latest ? (latest.data.inr * 2 - 4) * 5 + 20 : 0
  return (
    <ScrollView style={styles.container}>
       <View style={{padding: 20}}>
         <View style={{paddingTop: 10}}>
           <Text>PROUT</Text>
         </View>
       <Button style={{ marginVertical: 10 }} title="Nouvel INR" onPress={() => setShowModal(true)} />
       <Button style={{ marginVertical: 10 }} title="Logout" onPress={() => setToken(false)} />
        <Pies portions={2} /> 

       <InrModal showModal={showModal} setShowModal={setShowModal} history={history} setHistory={setHistory} />
       {token ? <Dashboard history={history} latest={latest} dosage={dosage} /> : <LogReg setUsername={setUsername} setToken={setToken} />}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  },
  container: {
    flex: 1,
  },
});

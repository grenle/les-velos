import React, {useState} from 'react'
import { StyleSheet, Button, Modal, Text, TextInput, View, ScrollView } from 'react-native';

export default function InrModal(props) {
    const { showModal, setShowModal, history, setHistory } = props
    const [inr, setInr] = useState(2)
    const onSave = () => {
        const h = [...history]
        const measure = {userId: 4, timeStamp: (new Date()).toISOString(), data: {inr} }
        h.push(measure)
        setHistory(h)
        setInr(2)
        setShowModal(false)
    }
    return<Modal
      animationType="slide"
      transparent={true}
      visible={showModal}>

       
      <ScrollView style={{ backgroundColor: 'white', padding: 10 }}>
        <Text style={{ marginVertical: 10 }}>Veuillez saisir votre INR:</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="ajouter votre INR" value={String(inr)} onChangeText={setInr} />
        <Button title="Enregistrer" onPress={onSave} />
      </ScrollView>

    </Modal>
   

  }
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginVertical: 10
    },
  });
  
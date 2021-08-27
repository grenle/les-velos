import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';

import Pills from './pills'

export default function Dosage(props){
    const { latest, dosage } = props
    return (
        <ScrollView>
        <View style={styles.box}>
            <Text style={styles.title}>Dosage Actuel</Text>
            <View style={styles.textInfo}>
            {latest && <Text>Dernier INR: {latest.data.inr}</Text>}
            {latest && <Text>Dernier dosage: {dosage}</Text>}
            </View>
            <Pills dosage={dosage} />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    box: {
        marginVertical: 30,
        backgroundColor: 'lightgrey',
        paddingVertical: 30,
    },
    textInfo: {
        padding: 30
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    },
});

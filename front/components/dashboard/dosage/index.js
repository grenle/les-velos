import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Pills from './pills'

export default function Dosage(props){
    const { latest, dosage } = props
    return (
        <View style={styles.box}>
            <Text style={styles.title}>Dosage Actuel</Text>
            <View style={styles.textInfo}>
            {latest && <Text>Dernier INR: {latest.data.inr}</Text>}
            {latest && <Text>Dernier dosage: {dosage}</Text>}
            </View>
            <Pills dosage={dosage} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        marginVertical: 30,
        backgroundColor: 'lightgrey',
        paddingVertical: 30,
        flex: 1,
    },
    textInfo: {
        padding: 30,
        flex: 1,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    },
});

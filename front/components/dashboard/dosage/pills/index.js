import React from 'react'
import { StyleSheet, View,ScrollView } from 'react-native'

import Pie from './pies'

export default function Pills(props) {
    const { dosage } = props
    const portions = dosage / 5
    const fullPie = Math.floor(portions / 4)
    const partialPie = portions % 4
    console.log(dosage, portions, fullPie, partialPie)
    return (
        <ScrollView>
        <View style={styles.box}>
            {fullPie ? <View style={styles.pillBounds}><Pie portions={4} /></View> : null}            
            <View style={styles.pillBounds}>
                {partialPie ? <Pie portions={partialPie} /> : null}
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'lightgrey',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 30,
    },
    pillBounds: {
        alignItems: 'center',
        flexGrow: 1,
    }
});

import React from 'react'
import { StyleSheet, View } from 'react-native'

import Pie from './pies'

export default function Pills(props) {
    const { dosage } = props
    const portions = dosage / 5
    const fullPie = Math.floor(portions / 4)
    const partialPie = portions % 4
    console.log(dosage, portions, fullPie, partialPie)
    return (
        <View style={styles.box}>
            {fullPie ? <View style={styles.pillBounds}><Pie portions={4} /></View> : null}            
            <View style={styles.pillBounds}>
                {partialPie ? <Pie portions={partialPie} /> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'lightgrey',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 30,
        flex: 1,
    },
    pillBounds: {
        alignItems: 'center',
        flex: 1,
    }
});

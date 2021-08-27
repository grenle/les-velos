import React from 'react'
import { ScrollView, View } from 'react-native'

import Dosage from './dosage'
import History from './history'

export default function Dashboard(props){
    const { latest, dosage } = props
    return (
        <View>
            <Dosage latest={latest} dosage={dosage} />
            <History />
        </View>
    )
}

//latest ? latest.data.inr : 0
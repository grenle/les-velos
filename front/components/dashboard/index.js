import React from 'react'
import { ScrollView, View } from 'react-native'

import Dosage from './dosage'
import History from './history'

export default function Dashboard(props){
    const { latest, dosage, history } = props
    return (
        <View>
            <Dosage latest={latest} dosage={dosage} />
            <History history={history} />
        </View>
    )
}

//latest ? latest.data.inr : 0
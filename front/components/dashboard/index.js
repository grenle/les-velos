import React from 'react'
import { ScrollView, View } from 'react-native'

import Dosage from './dosage'
import History from './history'

export default function Dashboard(props){
    const { latest, dosage } = props
    return (
        <ScrollView>
       
            <Dosage latest={latest} dosage={dosage} />
            <History />
      
      </ScrollView>
      
    )}

//latest ? latest.data.inr : 0
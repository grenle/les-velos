import React, {useState} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Svg, {Rect, Line} from 'react-native-svg'

const data = [ 10, 30, 1, 40, 5, 10, 8, 13, 35, 24, 2, 19, 33, 31, 13, 23, 25, 34, 14, 24, 34 ]

function add(x, y){ return x + y }

function sum(xs){ return xs.reduce(add, 0) }

function max(xs){
    return [...xs].sort((x, y) => y - x)[0]
}

function cumulativeSum(xs){
    const res = [...xs]
    for(let i = 0; i < xs.length; i++){
        res[i] = i ? res[i-1] + res[i] : res[i]
    }
    return res
}

function numberToPercentString(number){
    return String(number) + '%'
}

function getBarsXs(data){
    // if we look at the graph's bars as separating areas.
    // There are on more of those areas than bars.
    const partsCount = data.length + 1
    // and those areas have a width in percentage of the
    // whole width of:
    const partsWidth = (1 / partsCount) * 100
    // we fill an array with those widths
    const parts = new Array(data.length).fill(partsWidth)
    // which we transform into a cumulative sum as a string
    // with a %
    return cumulativeSum(parts).map(numberToPercentString)
}

function getBarsYx(data){
    const largest = max(data)
    const parts = data.map( y => 100 * (1 - (y / largest)) )
    return parts.map( x => String(x) + "%" )
}

function zip(xs, ys){
    const res = new Array(xs.length)
    xs.forEach( (_, i) => res[i] = [ xs[i], ys[i] ] )
    return res
}

function dataToBars(data){
    return zip(getBarsXs(data), getBarsYx(data))
}

function Graph(props){
    const xy = dataToBars(props.data)
    for(const pair of xy){
        console.log(`x: ${pair[0]}, pseudo height: ${pair[1]}`)
    }
    return (
        <Svg width="100%" height="200">
            <Svg>
                {xy.map((pair, i) => {
                    return <Line key={i} x1={pair[0]} x2={pair[0]} y1={pair[1]} y2="100%" stroke="grey" strokeWidth="10px" />
                })}
            </Svg>
        </Svg>
    )
}

export default function History(props){
    const { history } = props
    console.log('history', history)
    return (
        <View style={styles.graphContainer} >
            <Text style={styles.title}>Historique</Text>
            {history ? <Graph data={history.map(x => x.data.inr)} /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    graphContainer: {
        backgroundColor: 'lightgrey',
        padding: 30,
        marginBottom: 30,
        flex: 1,
    },
    title: {
        fontSize: 30,
        paddingBottom: 30,
        textAlign: 'center',
    },
});

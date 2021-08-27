import React from 'react'

import Svg, { G, Path } from 'react-native-svg'

const slicePaths = [
    <Path key={1} d="M0 0-70 70A99 99 0 0 1-70-70Z" fill="#000"/>,
    <Path key={2} d="M0 0-70-70A99 99 0 0 1 70-70Z" fill="#000"/>,
    <Path key={3} d="M0 0 70-70A99 99 0 0 1 70 70Z" fill="#000"/>,
    <Path key={4} d="M0 0 70 70A99 99 0 0 1-70 70Z" fill="#000"/>,
]

export default function Pies(props){
    return (
        <Svg width="100" height="100" viewBox="0 0 200 200">
            <G transform="translate(100,100) rotate(45)" stroke="#fff" strokeWidth="2">
                {slicePaths.slice(0, props.portions)}
            </G>
        </Svg>
    )
}
